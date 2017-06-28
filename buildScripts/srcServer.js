import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware') (compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../src/index.html')));

// for http request instance
app.get('/users', (req, res) => res.json([{'firstName': 'Bob', 'lastName': 'Smith', 'email': 'bs@gmail.com'}, {'firstName': 'Bill', 'lastName': 'Johnson', 'email': 'bj@gmail.com'}, {'firstName': 'Ric', 'lastName': 'Castello', 'email': 'rc@gmail.com'}]));

app.listen(port, err => err ? console.log(err) : open(`http://localhost:${port}`));
