import express from 'express';
import mongoose from 'mongoose';

// Server Setup
const app = express();
const PORT = 3333;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
