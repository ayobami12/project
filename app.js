// const bodyParser = require('body-parser');
// const http=require('http')
const express=require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const port =5000;
app.listen(
    port, ()=>console.log(`server is running on ${port}`)
)


app.get('/id/:id/name/:name', (req, res)=>{
    res.send({
        data:req.body,
        params:{
        id:req.params.id,
        name: req.params.name, 
}
})
})
    app.post('/bluebeans', (req, res)=>{
console.log(req.body);
res.send(req.body);
})

// const { prototype } = require('events')
// const carItem = `{
//     "product": "Leather Seat"
//     "colour": "Blue"
//     "price": '$50'
// }`

// const post_options={
//     hostname: "postman-echo.com",
//     method: "POST",
//     path: "/post",
//     headers: {
//         "Content-Type":"application/json"
//     }
// }

// const post_request=http.request(post_options, (response)=>{
//     console.log(`Response Code : ${response.statusCode}`)
//     console.log(`response body`);
//     response.pipe(process.stdout);
// })

// post_request.end(carItem)