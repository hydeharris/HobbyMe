import os 
from flask import Flask, request, jsonify
from flask_cors import CORS
import openai
from dotenv import load_dotenv

from suggester import Suggester, Responses, Questions
suggester = Suggester([], Responses(), "user", Questions())  # Create a global instance


load_dotenv()

openai.api_key = os.getenv("OPENAI_API_KEY")

app = Flask(__name__)
# Enable CORS for all routes with specific origins
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})


userInterests = []
userFitness = 1
userFreetime = 0

@app.route('/store-fitness', methods=['POST', 'OPTIONS'])
def store_profile():
    global userFitness, userFreetime

    # Handle preflight OPTIONS request
    if request.method == 'OPTIONS':
        return '', 204
    
    try:
        data = request.json

        free_time = data.get('freeTime', 0)
        exertion = data.get('exertion', 0)

        userFitness = exertion
        userFreetime = free_time
        
        return jsonify({
            'status': 'success',
        })
    
    except Exception as e:
        return jsonify({
            'status': 'error',
            'message': str(e)
        }), 500
    
@app.route('/store-interests', methods=['POST', 'OPTIONS'])
def store_interests():
    global userInterests

    # Handle preflight OPTIONS request
    if request.method == 'OPTIONS':
        return '', 204
    
    try:
        data = request.json

        interests = data.get('interests', [])
        userInterests.extend(interests)
        
        return jsonify({
            'status': 'success',
        })
    
    except Exception as e:
        return jsonify({
            'status': 'error',
            'message': str(e)
        }), 500
    
@app.route('/reset-data', methods=['POST', 'OPTIONS'])
def reset_data():
    global userInterests, userFitness, userFreetime

    # Handle preflight OPTIONS request
    if request.method == 'OPTIONS':
        return '', 204
    
    try:
        userInterests = []
        userFitness = 1
        userFreetime = 0
        
        return jsonify({
            'status': 'success',
        })
    
    except Exception as e:
        return jsonify({
            'status': 'error',
            'message': str(e)
        }), 500
    
#from suggester import Suggester, Responses, Questions

@app.route('/chat', methods=['POST', 'OPTIONS'])
def chat():
    if request.method == 'OPTIONS':
        return '', 204
    
    try:
        data = request.json
        user_message = data.get('message', '')
        activity = data.get('activity', '')
        
        # Use OpenAI to generate a chat response about the activity
        response = openai.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": f"You are an expert assistant for {activity}. Be concise and helpful."},
                {"role": "user", "content": user_message}
            ],
            max_tokens=150
        )
        
        bot_response = response.choices[0].message.content
        
        return jsonify({
            'status': 'success',
            'message': bot_response
        })
        
    except Exception as e:
        return jsonify({
            'status': 'error',
            'message': str(e)
        }), 500
    
@app.route('/fit-description', methods=['POST', 'OPTIONS'])
def get_fit_description():
    global userInterests, userFitness, userFreetime

    if request.method == 'OPTIONS':
        return '', 204
    
    try:
        data = request.json
        activity = data.get('activity', '')
        
        # Use OpenAI to generate a personalized fit description
        data = request.json
        activity = data.get('activity', '')
        
        # Create prompt for fitness description
        prompt = f"Given that the user is interested in {', '.join(userInterests)}, has {userFreetime} hours of freetime in a day, and rates themselves as a {userFitness} on a scale of 1-50 willingness of fitness, explain why {activity} would be a good or bad fit for them. Address them as 'you'. You can be highly critical as well if you don't think it is a good fit. Only mention their specific stats if needed."
        
        # Use suggester's generate_response
        fit_description = suggester.generate_response(prompt)
        
        return jsonify({
            'status': 'success',
            'fitDescription': fit_description
        })
    
        
    except Exception as e:
        return jsonify({
            'status': 'error',
            'message': str(e)
        }), 500

if __name__ == '__main__':
    # Run the Flask app on port 5000
    app.run(debug=True, host='0.0.0.0', port=8000)