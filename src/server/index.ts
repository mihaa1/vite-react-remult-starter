import express from 'express'
import { api } from './api'
const app = express()

app.get('/hello', (_req, res) => res.send('Hello World!'))
app.use(api)

app.listen(process.env['PORT'] || 3002, () => console.log('Server started'))
