const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'pug');

app.set('views', './views');

app.use(express.json());

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static('public'));


app.get('/', (req, res) => {

    res.render('index', { title: 'TTMB', message: 'Are you ready for this sick shit'}
    );

});

app.post('/', (req, res) => {

    console.log('got a request');
    console.log(req.body);
    res.redirect('/')

});

const port = process.env.PORT || 3000;


app.listen(port, () => console.log(`listening on port ${port}`));
