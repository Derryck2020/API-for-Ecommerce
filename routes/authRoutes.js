const express = require('express');
const router = express.Router();

const { register, login, logout } = require('../controllers/authController');