var UserModel = require('../models/user');

exports.addUser = function (req, res) {
    const newUser = new UserModel(req.body);
    newUser.save(function (err, user) {
        if (err) {
            // return error
            res.status(500).send(err)
        } else {
            res.send(user);
        }
    })
}

exports.getUsers = function (req, res) {
    UserModel.find({}, function (err, data) {
        if (err) {
            // return error
            res.status(500).send(err)
        } else {
            // return array of data
            res.send(data);
        }
    });
}

exports.getUserByName = function (req, res) {
    const name = req.params.name
    UserModel.find({ userName: `${name}`}, function (err, data) {
        if (err) {
            // return error
            res.status(500).send(err)
        } else {
            // return array of data
            res.send(data);
        }
    });
}