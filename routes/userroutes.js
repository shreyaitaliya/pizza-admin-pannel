const express = require('express');

const routes = express.Router();

//multer

const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix)
    }
})

const upload = multer({ storage: storage }).single('image');

//user conterollers 
const usercontrollers = require('../controllers/userControllers');

routes.get('/', usercontrollers.register);
routes.post('/registeruser', upload, usercontrollers.registeruser);
routes.get('/login', usercontrollers.login);




module.exports = routes