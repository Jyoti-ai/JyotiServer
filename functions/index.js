const functions = require('firebase-functions');
const firebase = require('firebase-admin');
const express = require('express');
const engines = require('consolidate');
const app = express();


const firebaseApp = firebase.initializeApp(
  functions.config().firebase
);

function getJSON() {
  const ref = firebaseApp.database().ref('quiz-data');
  return ref.once('value').then(snap =>snap.val());
}

function getBodyOnly() {
  const ref = firebaseApp.database().ref('quiz-data/body');
  return ref.once('value').then(snap =>snap.val());
}

app.engine('hbs', engines.handlebars);
app.set('views', './views');
app.set('view engine', 'hbs');

app.get('/', (request, response) => {
    //response.set('Cache-Control', 'public, max-age=300, s-maxage=600');
    getBodyOnly().then(data => {
      console.log('data : ', data);
      response.render('main',{data});
    });
});

app.get('/quiz.json', (request, response) => {
    //response.set('Cache-Control', 'public, max-age=300, s-maxage=600');
    getJSON().then(data => {
      response.json(data);
    });
});

app.get('/open-website', (request, response) => {
  response.redirect('https://jyotiserver.firebaseapp.com');
});
// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.app = functions.https.onRequest(app);
