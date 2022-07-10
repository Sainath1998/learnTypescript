import express from "express";
const app = express()


app.get('/',(req, res)=>{
    res.send('Helo world')
})

app.listen(3000,()=>{
    console.log(`the typescript app is running on port 3000`)
})