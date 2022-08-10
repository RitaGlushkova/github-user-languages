# github-app-languages
Input a username from GitHub to be presented with the best guess of the user's favorite programming language.

## Deployed on Netlify
[https://github-language-guess.netlify.app/]

## Required steps to run locally

To be able to run code locally: 
1. Create personal token on GitHub. 
2. Create .env.local file in client root
3. Add you personal token with name REACT_APP_GH='your_personal_token_goes_here'


## Available Scripts 

In the project directory, you can run:

### `npm install`

Installs all dependencies required by the application.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.
Tests main function which returns favourite language and proportion of it being used in 100 repos.

## Other notes

Repository has other branches where other solutions are presented
- Fetch api via axios in React and find out favourite language by counting sum of bites. I think this solution gives less accurate result based on my own experience and according to other people's feedback.
*Branch name: 'count-by-sumOfBites'*
- Create a separate server directory and call api using express, then pass endpoint to client directory using axios. This is more of an experiment. I wanted to learn how to do it. 
Two branches are created: 
1. based on sum of bites - one endpoint *Branch name: 'node-version'*
2. based on language per repo - two endpoints *Branch name: 'node-version-guessByNumberOfRepos'*

Zipped files for each branch attached.
