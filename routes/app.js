var express = require('express');
var router = express.Router();
//var User = require('../models/user');

router.get('/', function (req, res, next) {
    res.render('index');
});

//router.post('/', function (req, res, next) {
//    var email = req.body.email;
//    var user = new User({
//        firstName: 'Ariel',
//        lastName: 'Halperin',
//        email: email,
//        password: '123'
//    });
//
//    user.save();
//
//    res.redirect('/');
//});


module.exports = router;
