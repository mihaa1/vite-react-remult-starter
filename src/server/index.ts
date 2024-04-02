import express from 'express';

const app = express();

app.get('/hello', (req, res) => res.send('Hello World!'));

app.listen(process.env['PORT'] || 3002, () => console.log('Server started'));
