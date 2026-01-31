const express = require('express');
const router = express.Router();
const bankController = require('./controllers/bankController');
const authController = require('./controllers/authController');
const { verifyToken } = require('./middleware/authMiddleware');

// Public Routes
router.post('/auth/login', authController.login);

// Protected Routes
router.get('/external-data', verifyToken, bankController.getExternalData);

module.exports = router;
