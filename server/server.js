const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const UserModel = require('./Models/Users');

const app = express();
const port = 3000;

// Enable CORS
app.use(cors());

// Parse JSON requests
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://leoneandela:Leon16061998@cluster0.cnanadi.mongodb.net/Redux?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Define a route to fetch users
app.get('/', (req, res) => {
  UserModel.find()
    .then(users => {
      res.json(users);
    })
    .catch(error => {
      res.status(500).json({ message: error.message });
    });
});

app.post('/create', (req, res)=>{
  UserModel.create(req.body)
  .then(user => res.json(user))
  .catch(err => console.log(err))
} )

app.put('/update/:id', (req, res)=>{
  const id = req.params.id;
  UserModel.findByIdAndUpdate({_id: id}, {
    name: req.body.name,
    email: req.body.email,
    age: req.body.age,

  })
  .then(user => res.json(user))
  .catch(err => console.log(err))
} )

app.delete('/delete/:id', (req, res)=>{
  const id = req.params.id;
  UserModel.findByIdAndDelete({_id: id})
  .then((response)=>{
    res.json(response)
  })
  .catch((error)=>{
    console.log(error);
  })
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
