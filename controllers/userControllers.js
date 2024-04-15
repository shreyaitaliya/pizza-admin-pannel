const usermodel = require('../models/usermodel');

const register = (req, res) => {
    return res.render('register');
}

const registeruser = async (req, res) => {
    try {
        let userdata = await usermodel.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            city: req.body.city,
            phone: req.body.phone,
            image: req.file.path
        })
        return res.redirect('back');
    } catch (error) {
        console.log(error);
        return false;
    }
}

const login = (req, res) => {
    return res.render('login');
}

module.exports = ({
    register, registeruser, login
})