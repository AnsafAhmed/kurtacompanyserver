import express from 'express'
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const app = express()

const PORT = process.env.PORT || 3000;
const __dirname = dirname(fileURLToPath(import.meta.url))

app.get('/', (req, res) => {
    res.send('app is running')
})

app.get('/image/:image', (req, res) => {
    res.sendFile(`/uploads/${req.params.image}`, { root: __dirname })
})

app.listen(PORT, () => {
    console.log('app started')
})

