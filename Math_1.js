const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8080;

// Use body-parser middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Serve HTML with a form for inputting math problems
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Math Problem Solver</title>
        </head>
        <body>
            <h1>Math Problem Solver</h1>
            <form action="/" method="post">
                <label for="problem">Enter a math problem:</label>
                <input type="text" id="problem" name="problem" required>
                <button type="submit">Solve</button>
            </form>
        </body>
        </html>
    `);
});

// Handle POST requests to solve math problems
app.post('/', (req, res) => {
    const problem = req.body.problem;
    let result;

    try {
        // Evaluate the math problem using JavaScript's eval() function
        result = eval(problem);
    } catch (error) {
        result = 'Error: Invalid input';
    }

    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Math Problem Solver</title>
        </head>
        <body>
            <h1>Math Problem Solver</h1>
            <form action="/" method="post">
                <label for="problem">Enter a math problem:</label>
                <input type="text" id="problem" name="problem" value="${problem}" required>
                <button type="submit">Solve</button>
            </form>
            <p>Result: ${result}</p>
        </body>
        </html>
    `);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
