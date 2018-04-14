var express = require('express');   

var app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html'); // set up ejs for templating

app.use('/custom', express.static(__dirname + '/custom')); 				// set the static files location /public/img will be /img for users
app.use('/scripts', express.static(__dirname + '/node_modules')); 				// set the static files location /public/img will be /img for users
app.use('/pages', express.static(__dirname + '/pages'));

require('./app/routes.js')(app);

app.listen(process.env.PORT || 8888, function (){
	console.log('port - 8888');
});
