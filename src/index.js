import app from "./app.js"
import { PORT } from "./config.js"
import cors from 'cors'

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-Width, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    next();
});
app.listen(PORT)
console.log("server running on port", PORT)