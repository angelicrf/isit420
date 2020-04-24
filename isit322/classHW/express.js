let express = require('express');
let PORT = 3000;

const app = express();

app.get('/', (req,res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write("<h2>The is the main page</h2>");
    res.write("<a href='/nextPage'>NextPage</a>");
    res.end();
})
app.get('/nextPage', (req,res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write("<h2>The is the main page</h2>");
    res.write("<a href='./'>Go Back to Main</a>");
    res.end();
})

app.listen(PORT, () =>
    console.log(`the server is running on port ${PORT}`));