import express from 'express';

const app = express()

const port = 9000;

app.use('/', (req, res) => {
    res.send({message:"Hello express vercel app"})
})

app.listen(port, () => {
    console.log(`server listen on port ${port}`)
})