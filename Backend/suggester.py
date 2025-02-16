import os
from dotenv import load_dotenv
import openai

# Load environment variables from .env file
load_dotenv()

# Access the API key
openai.api_key = os.getenv("OPENAI_API_KEY")

class Suggester:
    def __init__(self, hobbies, responsesList, user, questionsList):
        self.hobbies = []                   # list of Hobby objects
        self.responsesList = responsesList  # Responses object
        self.user = user                    # User's name
        self.questionsList = questionsList  # Questions object

    def suggest(self):
        # Use the ChatGPT model to suggest hobbies based on the user's responses
        prompt = "I have answered the following questions regarding what my interests are: " # This is a placeholder prompt
        for question in self.questionsList.questions:       # Add the questions to the prompt
            prompt += question + " "
        prompt += "Based on my responses, what hobbies would you suggest for me? Answer in the following format: (Name of Hobby): (Description of Hobby), etc..."
        for response in self.responsesList.responses:     # Add the responses to the prompt
            prompt += " " + response + " "                # Add the response to the prompt

        response = openai.chat.completions.create(      # Get the response from the model
            model="gpt-3.5-turbo",
            messages=[{"role": "system", "content": "You are a helpful assistant."}, {"role": "user", "content": prompt}],
            max_tokens=500
        )
        print(response.choices[0].message.content) # Print the response from the model

       # Parse the response and add the suggested hobbies to the user's list of hobbies 
        paragraph = response.choices[0].message.content.split("\n")
        for hobby in paragraph:
            if  hobby != "" and hobby[1] == '.': # Check if the line is a hobby
                name = hobby.split(":")[0]
                name = name[3:] # Remove the number and the space
                description = hobby.split(":")[1]
                self.hobbies.append(Hobby(name.strip(), description.strip()))   # Add the hobby to the list of hobbies

    def generate_response(self, prompt):
        response = openai.chat.completions.create(
             model="gpt-3.5-turbo",
            messages=[{"role": "system", "content": "You are a helpful assistant. Be consise with your answers"}, {"role": "user", "content": prompt}],
            max_tokens=500
        )
        return response.choices[0].message.content
    
    def add_hobby(self, hobby):
        self.hobbies.append(hobby)

    def remove_hobby(self, hobby):
        self.hobbies.remove(hobby)

    def get_response(self, text):
        self.responsesList.add_response(text)
    
class Hobby:
    def __init__(self, name, description):
        self.name = name
        self.description = description

class Responses:
    def __init__(self, responses=None):
        if responses is None:
            self.responses = [] # list of response strings
        else:
            self.responses = responses

    def add_response(self, response):
        self.responses.append(response) # Add a response to the list

    def remove_response(self, response):
        self.responses.remove(response)

    def get_response(self, index):
        return self.responses[index]

class Questions:
    def __init__(self, questions=None):
        if questions is None:
            self.questions = [] # list of question strings
        else:
            self.questions = questions

    def add_question(self, question):
        self.questions.append(question) # Add a question to the list

    def remove_question(self, question):
        self.questions.remove(question)

# Example usage of the Suggester class
name = input("Enter your name: ")
suggester = Suggester([], Responses(), name, Questions())   # Create a Suggester object

# Add questions
suggester.questionsList.add_question("What are you interested in?")
suggester.questionsList.add_question("How much free time do you have in hours?")
suggester.questionsList.add_question("How fit are you on a scale of 1 to 5?")

# Answer questions
for question in suggester.questionsList.questions:
    print(question)
    suggester.responsesList.add_response(input("Enter your response: ")) # Add a response

# Generate response using ChatGPT
prompt = f"Given that the user is interested in " + suggester.responsesList.get_response(0) + ", has " + suggester.responsesList.get_response(1) + "hours of freetime in a day, and rates themselves as a " + suggester.responsesList.get_response(2) + " on a scale of 1-5 of fitness, explain why Chess would be a good or bad fit for them."
response = suggester.generate_response(prompt)
print(response)
'''
# Suggest hobbies using ChatGPT
suggester.suggest()
# Print the suggested hobbies
for hobby in suggester.hobbies:
    print(hobby.name + ": " + hobby.description)
    '''