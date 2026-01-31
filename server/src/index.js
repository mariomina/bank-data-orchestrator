const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

const fs = require('fs');

// Determine environment
// Production (Docker) puts files in ../public
// Development (Local Monorepo) puts files in ../../client/dist/client/browser
const productionPath = path.join(__dirname, '../public');
const developmentPath = path.join(__dirname, '../../client/dist/client/browser');

const staticPath = fs.existsSync(productionPath) ? productionPath : developmentPath;
console.log(`Serving static files from: ${staticPath}`);

// Routes
app.use('/api', routes);

app.use(express.static(staticPath));

// The "catchall" handler: for any request that doesn't
// match one above, send back Angular's index.html
// Handle SPA - using regex syntax for better compatibility with newer Express versions
app.get(/(.*)/, (req, res) => {
    res.sendFile(path.join(staticPath, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
