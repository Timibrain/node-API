const express = require("express")
const app = express();
const port = 5555
const Home = "/"
 const htmlPage = "/html"

app.get(Home,(request,response)=>{
    console.log(`/has been accessed`);
    response.send(`Hi,We can now take our cold zobo`)
})


app.get(htmlPage, (request, response)=>{
    console.log(`HTML page called for`)
    console.log(__dirname);
    response.sendFile(`${__dirname}/index.html`)
    
})


const allStudent= [
    {name: 'Ayanfe', age: 20, course: 'Computer science'},
    { name: 'Ayanfe', age: 20, course: 'Computer science' },
    { name: 'Ayanfe', age: 20, course: 'Computer science' },
    { name: 'Ayanfe', age: 20, course: 'Computer science' },
]

app.get('/api',(req,res)=>{
    try {
        res.status(201).json({message: allStudent})
    } catch (error) {
        res.status(503).json({message:error})
    }
})








app.listen(port,()=>{
    console.log(`Server ruuning at ${port}`);
})