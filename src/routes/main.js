const express = require('express');
const router = express.Router()

const {index, about, login, admin, contact, noEntry} = require('../controllers/mainController')

const accesAdmin = require('../middlewares/acessAdmin')

router.get('/', index);
router.get('/about', about);
router.get('/login', login);
router.get('/admin', accesAdmin, admin);
router.get('/contact',contact);
router.get('/no-entry', noEntry);

module.exports = router