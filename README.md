# github-app-languages
Input a username from GitHub to be presented with the best guess of the user's favorite programming language.
## THIS SOLUTION WAS NOT SELECTED AS FINAL.
This solution is an experiment with using node for api calls. The final guess of user's language is made based on 30 repositories
## Required steps to run locally

To be able to run code locally: 
1. Create personal token on GitHub. 
2. Create .env file in server root
3. Add you personal token with name GITHUB_ACCESS_TOKEN=<your_personal_token_goes_here>

## Available Scripts 

In the project directory, you can run:

### `npm install`

Installs all dependencies required by the application.
Required to run it for both client and server directories

### `npm start`
Both *client* and *server* directories

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Other notes

Repository has other branches where other solutions presented
- Fetch api via axios in React and find out favourite language by counting sum of bites. I think this solution gives less accurate result based on my own experience and according to other people's feedback.
*Branch name: 'count-by-sumOfBites'*
- Create a separate server directory and call api using express, then pass endpoint to client directory using axios. This is more of an experiment. I wanted to learn how to do it. 
Two branches are created: 
1. based on sum of bites - one endpoint *Branch name: 'node-version'*
2. based on language per repo - two endpoints *Branch name: 'node-version-guessByNumberOfRepos'*

Zipped files for each branch attached.
