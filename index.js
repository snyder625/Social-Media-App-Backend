import express from 'express';
import mongoose  from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import AuthRoute from './Routes/AuthRoute.js';

//Routes

const app = express();

//Middleware
app.use(bodyParser.json({limit:'30mb', extended: true}));
app.use(bodyParser.urlencoded({limit:'30mb', extended: true}));

dotenv.config()

mongoose.connect(process.env.MONGO_DB, {useNewUrlParser: true, useUnifiedTopology: true})
.then((app.listen(process.env.PORT, ()=> {console.log('Server started on port ' + process.env.PORT)})))
.catch((error)=> {console.log(error)});

//Routes Usage
app.use('/auth', AuthRoute)