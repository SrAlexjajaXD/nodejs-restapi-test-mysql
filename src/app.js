import express from "express"
import docentesRoutes from "./routes/docentes.routes.js";
import alumnosRoutes from "./routes/alumnos.routes.js";
import bodyParser from "body-parser";

const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-Width, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    next();
});

app.use(alumnosRoutes)
app.use(docentesRoutes)

app.use((req, res, next) =>{
    res.status(404).json({
        message: "ruta no encontrada"
    })
})

export default app