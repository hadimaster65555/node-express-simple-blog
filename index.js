const express = require('express');
const path = require('path');
const expressEdge = require('express-edge');

const app = new express();

app.use(express.static('public'));
app.use(expressEdge);
app.set('views',`${__dirname}/views`);

app.get('/', (request,response) => {
    // response.sendFile(path.resolve(__dirname, 'pages/index.html'));
    response.render('index');
});

app.get('/about', (request, response) => {
    // response.sendFile(path.resolve(__dirname, 'pages/about.html'))
    response.render('about');
});

app.get('/post', (request, response) => {
    // response.sendFile(path.resolve(__dirname, 'pages/post.html'))
    response.render('post');
});

app.get('/contact', (request, response) => {
    // response.sendFile(path.resolve(__dirname, 'pages/contact.html'))
    response.render('contact');
});

app.listen(3000, () => {
    console.log('App Started');
});

