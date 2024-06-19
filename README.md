## Netflix-clone

### This project is a Netflix clone developed using ReactJS and styled with TailwindCSS. State management is handled with the Redux Toolkit, while Google Firebase is used for secure sign-up/login authentication. The application fetches movie data from the TMDB API, and implements the Gemini AI key for advanced search capabilities, ensuring a smooth and intuitive user experience.


### Features

- Login/Sign Up 
    - Sign In/ Sign Up Form
    - redirects to browse page
- Browse (after authentication)
    - Header
    - Main Movie
        - Trailer in background
        - Title & Description
    - Movie Suggestions
        - MovieLists * N
- NetflixGPT
    - Search Bar
    - Movie Suggestions according to search

## Steps to run this project in your local machine

#### 1. Open your terminal and go to your prefered directory and paste this command
`git clone https://github.com/manoharmadhavarapu/netflix-clone.git`


#### 2. Open that cloned project in your prefered IDE and run this command
`npm install` 

#### 3. Create a .env file under root folder and write these keys
`REACT_APP_GEMINI_AI_API_KEY=YOUR_OWN_GEMINI_AI_KEY`
`REACT_APP_TMDB_API_KEY=YOUR_OWN_TMDB_API_KEY`
`REACT_APP_FIREBASE_API_KEY=YOUR_OWN_FIREBASE_API_KEY`

To create your own TMDB api key go to https://www.themoviedb.org/ page and login and create your api key.

For gemini_ai key go to https://ai.google.dev/ and click on "get api key in google ai studio" and create your api key.

For firebase api key and firebase configuration visit  https://firebase.google.com/ and 'go to console'. 

Replace existing firebase configuration details with your details.

#### 4. run the below command
`npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Project Screenshots


![Sign-in page](https://github.com/manoharmadhavarapu/netflix-clone/assets/147366931/268728e4-e4f8-4d3d-8986-0e64f492a528)

![Main Page](https://github.com/manoharmadhavarapu/netflix-clone/assets/147366931/65f00430-8e57-4bd4-b991-bd4558855c5c)

![Movie List](https://github.com/manoharmadhavarapu/netflix-clone/assets/147366931/9cd367dc-0b10-40ff-914c-c534d986ff96)

![Search Page](https://github.com/manoharmadhavarapu/netflix-clone/assets/147366931/e1b961f1-b40f-4ac0-9d83-5aa62a3d071a)