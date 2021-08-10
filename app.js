import express from 'express'

const app = express()

app.listen(8080, () => {
    console.log('app started')
})

app.get('/', (req, res) => {
    res.send('app is running')
})