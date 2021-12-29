const router = require('express').Router();
const verifyToken = require('./verifyToken');

router.get('/', verifyToken , (req, res) => {
    res.send(req.user);
    //res.json({posts: [{title: 'My First Post', description: 'Random data you should not access'}]});
});

module.exports = router;