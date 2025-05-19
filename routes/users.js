const express = require('express');
const router = express.Router();


let users = [
    {
        firstName: "John",
        lastName: "wick",
        email:"johnwick@gamil.com",
        DOB:"22-01-1990",
    },
    {
        firstName: "John",
        lastName: "smith",
        email:"johnsmith@gamil.com",
        DOB:"21-07-1983",
    },
    {
        firstName: "Joyal",
        lastName: "white",
        email:"joyalwhite@gamil.com",
        DOB:"21-03-1989",
    },
];

// GET request: Retrieve all users
router.get("/",(req,res)=>{
  // Copy the code here
  res.send(JSON.stringify({users}, null, 4));//This line is to be replaced with actual return value
});

// GET by specific ID request: Retrieve a single user with email ID
router.get("/:email",(req,res)=>{
  // Copy the code here
  const email = req.params.email;
  let user = users.filter((user) => user.email === email);

  res.send(user)//This line is to be replaced with actual return value
});


// POST request: Create a new user
router.post("/",(req,res)=>{
  // Copy the code here
  users.push({
    "firstName" : req.query.firstName,
    "lastName" : req.query.lastName,
    "email" : req.query.email,
    "DOB" : req.query.DOB
  });
  res.send("The user " + req.query.firstName + " has been added!");//This line is to be replaced with actual return value
});


// PUT request: Update the details of a user by email ID
router.put("/:email", (req, res) => {
  // Copy the code here
  const email = req.params.email;
  let filtered_users = users.filter((user) => user.email === email);

  if (filtered_users.length > 0) {
    let filtered_user = filtered_users[0];

    let firstName = req.query.firstName;
    if (firstName) {
        filtered_user.firstName = firstName;
    }

    let lastName = req.query.lastName;
    if (lastName) {
        filtered_user.lastName = lastName;
    }

    let DOB = req.query.DOB;
    if (DOB) {
        filtered_user.DOB = DOB;
    }

    users = users.filter((user) => user.email != email);
    users.push(filtered_user);
    
    res.send(`User data with email ${email} updated.`)//This line is to be replaced with actual return value
    } else {
        res.send("Unable to find user with the given email.")
    }
});


// DELETE request: Delete a user by email ID
router.delete("/:email", (req, res) => {
  // Copy the code here
  const email = req.params.email;

  users = users.filter((user) => user.email != email);

  res.send(`User with email ${email} deleted.`)//This line is to be replaced with actual return value
});

module.exports=router;
