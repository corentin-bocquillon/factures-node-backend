'use strict';

module.exports = {
    // Auth middleware
    authenticate: () => {
        return (req, res, next) => {
            passport.authenticate('local', (error, user, info) => {
                if(error) {
                    res.status(401).json({"statusCode": 401, "message": "error : " + error.toString()});
                } else if(!user) {
                    res.status(401).json({"statusCode": 401, "message": "User does not exist"});
                } else {
                    req.login(user, function(error) {
                        if (error) return next(error);
                        next();
                    });
                }
            })(req, res, next);
        }
    },

    logout: (req, res) => {
        req.logout();
        res.status(200).json({"statusCode": 200, "message": "Logged out."});
    },

    isLoggedIn: (req, res, next) => {
        if(req.isAuthenticated()){
            return next()
        }
        return res.status(401).json({"statusCode" : 401, "message" : "Not authenticated."})
    }
};
