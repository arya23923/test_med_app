const express = require('express');
const cors = require('cors');
const http = require('http');
const connectToMongo = require('./db');
const app = express();


app.set('view engine','ejs')
app.use(express.static('public'))

const PORT = process.env.PORT || 8181;


// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectToMongo();

// Routes
app.use('/api/auth', require('./routes/auth'));

app.get('/', (req, res) => {
    res.send('hello world!');
});

// Set up a POST route at the '/' path
app.post('/auth/register', (req, res) => {
  const data = req.body;
  
  // For example, log the data received in the POST request
  console.log('Received data:', data);

});



  // Start the server
app.listen(PORT, () => {
console.log(`Server is running on port http://localhost:${PORT}`);
});
