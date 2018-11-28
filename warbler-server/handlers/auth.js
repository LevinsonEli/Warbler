const db = require("../models");
const jwt = require("jsonwebtoken");

exports.signin = function() {};


exports.signup = async function(req, res, next) {
    try {
        // create a user
        let user = await db.User.create(req.body);
        let { id, username, profileImageUrl } = user;

        // createa a token (signing token)
        let token = jwt.sign(
            {
                id,
                username,
                profileImageUrl
            },
            process.env.SECRET_KEY
        );
        return res.status(200).json({
            id,
            username,
            profileImageUrl,
            token
        });
    } catch (err) {
        // if the validation failed
        if (err.code === 11000) {
            err.message = "Sorry, that username and/or email already taken.";
        }
        return next({
            status: 400,
            message: err.message
        });
    }
};


