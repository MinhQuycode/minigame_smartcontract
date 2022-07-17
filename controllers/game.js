var User = require("../models/users")

module.exports = function(app) {
    app.get("/", function(req, res) {
        res.render("layout")
    })

    app.post("/register", function(req, res) {
        if (!req.body.email || !req.body.name || !req.body.phone) {
            res.json({ Result: 0, message: "Please enter full field !" })
        } else {
            const newUser = new User({
                email: req.body.email,
                name: req.body.name,
                phone: req.body.phone,
                pay: false,
                addressWallet: "",
                dateRegis: Date.now()
            })
            newUser.save(function(err) {
                if (err) {
                    res.json({ Result: 0, message: "Mongoose save err !" })
                } else {
                    res.json({ Result: 1, message: newUser })
                }
            })
        }
    })
}