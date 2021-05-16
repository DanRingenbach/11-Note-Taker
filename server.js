var express = require('express')
var htmlRoutes = require('./routes/htmlRoutes.js')
var apiRoutes = require('./routes/apiRoutes.js')
var app = express();

app.use(express.json());

app.use(express.urlencoded({extended:true}));

app.use(express.static('public'));

app.use(apiRoutes)
app.use(htmlRoutes)


const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}`))

