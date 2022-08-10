# github-app-languages
Input a username from GitHub to be presented with the best guess of the user's favorite programming language.
# This is an alternative solution 
Fetch api via axios in React and find out favourite language by counting sum of bites. 

Deployed on Netlify
[https://github-language-guess.netlify.app/]

## Required steps to run locally
To be able to run code locally:

Create personal token on GitHub.
Create .env.local file in client root
Add you personal token with name REACT_APP_GH='your_personal_token_goes_here'

## Available Scripts
In the project directory, you can run:

### npm install
Installs all dependencies required by the application.

### npm start
Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

## Other notes
Repository has other branches where other solutions presented (main is not included in list below)

Create a separate server directory and call api using express, then pass endpoint to client directory using axios. This is more of an experiment. I wanted to learn how to do it. Two branches are created:
- based on sum of bites - one endpoint Branch name: *'node-version'*
- based on language per repo - two endpoints Branch name: *'node-version-guessByNumberOfRepos'*
Zipped files for each branch attached.