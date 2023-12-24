//dotenv import
require('dotenv').config();
require('express-async-errors');

//express package
const express = require('express');
const app = express();

//auxillary packages
const morgan = require('morgan');

//database import
const connectDB = require('./db/connect');

//middleware import
const notFoundMiddleware = require('./middleware/not-found');
const noterrorHandlerMiddleware = require('./middleware/error-handler');

app.use(morgan('tiny'));
app.use(express.json());

app.get('/', (req, res) => {
	res.send('e-commerce api');
});

app.use(notFoundMiddleware);
app.use(noterrorHandlerMiddleware);

const port = process.env.PORT || 5000;
const start = async () => {
	try {
		await connectDB(process.env.MONGO_URL);
		app.listen(port, console.log(`Server is listening on port ${port}...`));
	} catch (error) {
		console.log(error);
	}
};

start();
