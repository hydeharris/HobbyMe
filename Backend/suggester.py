import os
from dotenv import load_dotenv
import openai

# Load environment variables from .env file
load_dotenv()

# Access the API key
openai.api_key = os.getenv("OPENAI_API_KEY")

# Example usage
prompt = "Hello, how are you?"
response = openai.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=[{"role": "system", "content": "You are a helpful assistant."}, {"role": "user", "content": prompt}],
    max_tokens=150
)
print(response.choices[0].message.content)

class Suggester:
    def __init__(self, hobbies, responses, user, questions):
        self.hobbies = hobbies
        self.responses = responses
        self.user = user
        self.questions = questions

    def suggest(self):
        # This is where the magic happens
        # Use the ChatGPT model to suggest hobbies based on the user's responses
        prompt = "I have answered the following questions regarding what my interests are: " # This is a placeholder prompt
        for question in self.questions.questions:
            prompt += question + " "
        prompt += "Based on my responses, what hobbies would you suggest for me? "
        i = 0
        for response in self.responses.responses:
            prompt += str(i) + " " + response + " "
            i += 1

        response = openai.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[{"role": "system", "content": "You are a helpful assistant."}, {"role": "user", "content": prompt}],
            max_tokens=150
        )
        print(response.choices[0].message.content)
    
    def add_hobby(self, hobby):
        self.hobbies.append(hobby)

    def remove_hobby(self, hobby):
        self.hobbies.remove(hobby)
    
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
        self.responses.append(response)

    def remove_response(self, response):
        self.responses.remove(response)

class Questions:
    def __init__(self, questions=None):
        if questions is None:
            self.questions = [] # list of question strings
        else:
            self.questions = questions

    def add_question(self, question):
        self.questions.append(question)

    def remove_question(self, question):
        self.questions.remove(question)

# Example usage
name = input("Enter your name: ")
suggester = Suggester([], Responses(), name, Questions())

# Add questions
for i in range(2):
    suggester.questions.add_question(input("Enter a question: ")) # Add a question

# Answer questions
for question in suggester.questions.questions:
    print(question)
    suggester.responses.add_response(input("Enter your response: ")) # Add a response

# Suggest hobbies using ChatGPT
suggester.suggest()