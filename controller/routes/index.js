/**
 * Created by ohs60275 on 2017/08/19.
 */
"use strict";
const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('../../view/entry/index/')

});

router.post('/', function(req, res, next) {
    if (req.body.userName) {
        console.log('login.js true')
        req.session.user = { name: req.body.userName };
        res.redirect('../');
    } else {
        console.log('login.js false')
        const err = 'data is wrong';
        res.render('login', { error: err });
    }
});

module.exports = router;