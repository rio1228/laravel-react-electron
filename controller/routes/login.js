const express = require('express');
const app = express()
const router = express.Router();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
// app.set('view engine', 'html');

router.get('/', function(req, res, next) {
    res.render('../../view/entry/login/')
});

// router.post('/', function(req, res, next) {
    // if (req.body.userName) {
    //     console.log('login.js true')
    //     req.session.user = { name: req.body.userName };
    //     res.redirect('../');
    // } else {
    //     console.log('login.js false')
    //     const err = 'data is wrong';
    //     res.render('login', { error: err });
    // }
// });

module.exports = router;