# Sentiment and Subjectivity Analyzer

This project is a webapp which lets users enter a short statement to see the sentiment and subjectivity analysis of the statement. 

## Front End
The front-end is built using html, css and javascript. Styling is done via sass which is compiled to css via webpack loaders.

Service Workers are used so that this webpage can be accessed even when the server is offline.

## Back End
The back-end is running node js and express as the middleware. The backend serves as the API endpoint for the front end and fetches the sentiment analysis results powered by Aylien NLP API.


## Testing framework
Jest testing framework is used to test all javascript functionality.

## How to run the project
First clone the project, obtain an API key from Aylien and create a .env file in the root directory with the Aylien API id and key.

- npm install
- npm run build-prod
- npm run start
- visit localhost:8081

One the webpage launches, enter any short statements to see the sentiment and objectivity analysis of the statement.