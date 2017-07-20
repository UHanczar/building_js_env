import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../dist/index.html')));

// for http request instance
app.get('/users', (req, res) => res.json([{'firstName': 'Bob', 'lastName': 'Smith', 'email': 'bs@gmail.com'}, {'firstName': 'Bill', 'lastName': 'Johnson', 'email': 'bj@gmail.com'}, {'firstName': 'Ric', 'lastName': 'Castello', 'email': 'rc@gmail.com'}]));

app.listen(port, err => err ? console.log(err) : open(`http://localhost:${port}`));
