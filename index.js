import express from 'express';

const app = express()

const port = 9000;

app.use('/', (req, res) => {
    res.send({message:"Hello express cyclic app ,You are in production"})
})

app.listen(port, () => {
    console.log(`server listen on port ${port}`)
})
