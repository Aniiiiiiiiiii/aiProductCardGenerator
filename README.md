# AI Product Card Generator

A simple React application that generates product card content (title, description, tags)
using an AI model based on user input.

## Features
- Enter product name and category
- Generate AI-powered title, description, and tags
- Clean card-based UI
- Loading and error handling

## Tech Stack
- React (Vite)
- JavaScript (ES6)
- OpenAI Responses API
- CSS

## How AI Is Used
The application sends the product name and category to an AI model via OpenAI's Responses API.
The AI returns structured JSON containing a title, short description, and tags, which are then
rendered as a product card.

## Setup Instructions
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
