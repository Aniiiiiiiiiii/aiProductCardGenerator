# AI Product Card Generator

This project is a simple React-based web application that generates product card content using AI.
The user enters a product name and category, and the application generates a title, short description, and tags for that product.

The main goal of this project is to demonstrate AI integration, clean React structure, and basic UI handling.

## Features
- Input field for product name
- Input field for product category
- Button to generate product details
- AI-generated:
  - Product title
  - Short description
  - Tags
- Simple and clean product card UI
- Loading indicator in the generate button and basic error handling

## Tech Stack
- React (Vite)
- JavaScript (ES6)
- OpenAI Responses API
- CSS for basic styling

## How AI Is Used
This application uses an AI model through OpenAI’s Responses API to generate product content.

Workflow:
- The user enters a product name and category.
- This data is sent to the AI API as a prompt.
- The AI generates structured content in JSON format, including:
  - Title
  - Short description
  - Tags
- The response is cleaned and parsed safely.
- The generated content is displayed as a styled product card in the UI.

This approach ensures reliable AI output and smooth rendering on the frontend.

## Setup Instructions
To run the project locally, follow these steps:
1. Clone the repository (https://github.com/Aniiiiiiiiiii/aiProductCardGenerator.git)
2. Install dependencies:
  - npm install
3. Create a .env file in the root directory and add your OpenAI API key:
  - VITE_OPENAI_API_KEY=api_key_goes_here
4. Start the development server:
  - npm run dev
5 Open the application in your browser (usually at http://localhost:5173)

## Notes
- API keys are stored securely using environment variables.
- The UI is intentionally kept simple as per the assignment requirements.
- The focus of this project is clean code, correct AI usage, and clarity rather than complex UI.
