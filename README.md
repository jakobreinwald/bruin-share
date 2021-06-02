# Bruin Share
A MERN Stack based web application for UCLA students to share their notes and other school essentials.

Currently being developed by Jakob Reinwald, Quyen Ngo, Alan Nguyen, and Matthew Lee.

# Using the App

Bruin Share is currently deployed and is ready for use at the following link!

[https://bruin-share-notes.netlify.app](https://bruin-share-notes.netlify.app)

Users will be able to view and download all posts without creating or logging in to an account. In order to make posts of their own and like others' posts, users can create an account with Bruin Share, or log in using their Google account! (Note: for mobile users logging in through their Google account, we recommend using Chrome instead of Safari).

Alternatively, if you want to run the app locally, follow the instructions in the [Running the App Locally](#Running-the-App-Locally) section of this README.

# Brief Project Details

The project was made using [MongoDB](https://www.mongodb.com), [Express.js](https://expressjs.com), [React.js](https://reactjs.org), and [Node.js](https://nodejs.org/en/). All of our user and post data is stored in a MongoDB database. This project was also built with the [React Redux](https://react-redux.js.org) and [Material UI](https://material-ui.com) libraries. The backend of this application is deployed using [Heroku](https://dashboard.heroku.com/apps), and the frontend is deployed using [Netlify](https://www.netlify.com). Additionally, this app is mobile friendly and will work on all devices, including both computers and phones!

Users can find a more detailed description of app functionality and information in the About section of the site.

# Running the App Locally

First, clone the repository. and install the required dependencies by running the following commands:
```
git clone https://github.com/jakobreinwald/bruin-share.git
```

The, cd into the folder created and install the required dependencies.
```
cd bruin-share/client
npm install
cd ../server
npm install
```
Now, in order to access the database properly, we have to create a dotenv file. Using the same format as the file ".env.example" in the server directory, create a file called ".env" in server, and add the following information to it.
```
PORT = 5000
CONNECTION_URL = mongodb+srv://public:public@cluster0.9wa15.mongodb.net/bruin-share?retryWrites=true&w=majority
```
Normally, you would not have access to the database collections, but we provided access to a public user with username "public" and password "public" (as can be seen in the connection url string).


To start the app, both the server and client sides need to be running at once. We provided a script for doing exactly so in the server side directory, so all you need to do after cloning, installing dependencies, and accessing the database is stay in the server directory and run the following command:
```
npm run dev
```
You can also do the same thing using yarn:
```
yarn run dev
```
After that, the entire app and functionality will appear in your browser!


