const express = require('express');
require('dotenv').config();
const bodyParser = require("body-parser");

const app = express();

//request from cross origin
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
	);
	res.setHeader(
		'Access-Control-Allow-Methods',
		'GET, POST, PUT, DELETE, PATCH, OPTIONS'
	);
	next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//port
// process.env.NODE_ENV = process.env.PORT;
const port = process.env.PORT;

app.listen(port, () => console.log(`server app listening at:${port}`));

//api versionig
app.get('/api/v1', (req, res) => {
	res.json({
		status: 'success',
		data: {
			message: 'hello world'
		}
	});
});









const express = require('express');
require('dotenv').config();
const bodyParser = require("body-parser");

const app = express();

//request from cross origin
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
	);
	res.setHeader(
		'Access-Control-Allow-Methods',
		'GET, POST, PUT, DELETE, PATCH, OPTIONS'
	);
	next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//port
// process.env.NODE_ENV = process.env.PORT;
const port = process.env.PORT;

app.listen(port, () => console.log(`server app listening at:${port}`));

//api versionig
app.get('/api/v1', (req, res) => {
	res.json({
		status: 'success',
		data: {
			message: 'hello world'
		}
	});
});