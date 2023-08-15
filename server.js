import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({ path: './.env' });
const app = express();

// Server Setup
const PORT = 3333;
/* connecting mongodb using atlas cloud */  
mongoose.connect('mongodb+srv://admin:admin@crudnodejs.ydtzqky.mongodb.net/URL-Shortener?retryWrites=true&w=majority')
.then(() => {
  console.log('MongoDB is Already Connected!');

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
}).catch((error) => { 
  console.log(error); 
});