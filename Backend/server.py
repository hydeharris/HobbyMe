from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
# Enable CORS for all routes with specific origins
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

userInterests = []

@app.route('/process-array', methods=['POST', 'OPTIONS'])
def process_array():
    # Handle preflight OPTIONS request
    if request.method == 'OPTIONS':
        return '', 204
    
    try:
        # Get the JSON data sent from React
        data = request.json
        print(request.json)
        # Extract the array
        array_data = data.get('data', [])
        userInterests = array_data
        # Do something with the array (example: calculate sum)
        
        
        # Return a response
        return jsonify({
            'status': 'success',
            'message': f'Received array with {len(array_data)} elements. Sum: {0}',
            'processed_data': array_data
        })
    
    except Exception as e:
        return jsonify({
            'status': 'error',
            'message': str(e)
        }), 500

if __name__ == '__main__':
    # Run the Flask app on port 5000
    app.run(debug=True, host='0.0.0.0', port=8000)