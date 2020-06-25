module.exports.login = function(req, res) {
    res.status(200).json({
        email: req.body.email,
        pass: req.body.pass
    })
    // res.send('Login');
}

module.exports.register = function(req, res) {
    res.send('Register');
}