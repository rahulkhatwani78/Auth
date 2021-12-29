const router = require('express').Router();
const User = require('../model/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {registerValidation, loginValidation} = require('../validations');

// REGISTER
router.post('/register', async (req, res) => {

    // Let's validate the data before we make a user
    const validation = registerValidation(req.body);
    if(validation.error) return res.status(400).send(validation.error.details[0].message);

    // Check whether the email already exists
    const emailExists = await User.findOne({email: req.body.email});
    if(emailExists) return res.status(400).send('Email already exists!');

    // Hash passwords
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // Creating a new user
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    });
    
    // Storing the user in DB
    try {
        const savedUser = await user.save();
        res.send({user: savedUser._id});
    } catch(err) {
        res.status(400).send(err);
    }
});

// LOGIN
router.post('/login', async (req, res) => {

    // Let's validate the data before we make a user
    const validation = loginValidation(req.body);
    if(validation.error) return res.status(400).send(validation.error.details[0].message);

    // Check whether the email already exists
    const user = await User.findOne({email: req.body.email});
    if(!user) return res.status(400).send('Email doesn\'t exists!');

    // Checking if the password is correct
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if(!validPass) return res.status(400).send('Invalid password!');

    // Create and assign a token
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
    res.header('Auth-Token', token).send(token);

    //res.send('Logged in!');

});

router.post('/', async (req, res) => {
    console.log("Hello");
    res.send("Working");
});

module.exports = router;