//importing the express package
import express from 'express';

//make a variable called app to store to store the app created by express()
const app = express();

//a variable to hold the PORT number we want to put the app on
const PORT = 3003;

//use ejs files instead of html
app.set('view engine', 'ejs');

//the browser can use anything in /public
app.use(express.static('public'));

//when we get a request for the home page or main address (/) show them 'home'
app.get('/', (req, res) => {

    const person = { name: 'Donald Duck', occupation: 'plumber', favoriteColor: 'blue' };

    res.render('home', { person });
});

// Define a friends "route" ('/friends')
app.get('/friends', (req, res) => {

    const friends = [ 'Mickey', 'Goofy', 'Minnie', 'Daisy' ];

    res.render('friends', { friends });
});

// Define a movies "route" ('/movies')
app.get('/movies', (req, res) => {

    const movies = [ 'Everything Everywhere All At Once', 'Gone Girl', 'Logan Lucky', 'RokkinRolla', 'Parasite', 'Conan the Barbarian', 'Fury Road', 'Pans Labyrinth' ];

    res.render('movies', { movies });

});

//start at the port we said(listen), also print where we are in the console
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

//run it
//npx nodemon app.js