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

  res.render('home');

});

//start at the port we said(listen), also print where we are in the console
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

//run it
//npx nodemon app.js