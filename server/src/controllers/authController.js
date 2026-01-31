const jwt = require('jsonwebtoken');

const SECRET_KEY = process.env.JWT_SECRET || 'enext_technical_test_secure_key_2024';

exports.login = (req, res) => {
    const { username, password } = req.body;

    // Hardcoded credentials for this technical test
    if (username === 'admin' && password === 'admin123') {
        // Create token
        const token = jwt.sign(
            { username: username, role: 'admin' },
            SECRET_KEY,
            { expiresIn: '1h' }
        );

        return res.json({
            message: 'Login successful',
            token: token
        });
    }

    return res.status(401).json({ message: 'Invalid credentials' });
};
