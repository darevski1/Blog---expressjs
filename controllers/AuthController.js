module.exports = {

    login: (req, res) => {
        res.render('login', {
            title: "Login to your account",

        })
    },
    register: (req, res) => {
        res.render('register', {
            title: "Register your account",
        })
    }


}