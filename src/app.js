import express from "express"
import docentesRoutes from "./routes/docentes.routes.js";
import alumnosRoutes from "./routes/alumnos.routes.js";

const app = express()

app.use(express.json())

app.use(alumnosRoutes)
app.use(docentesRoutes)

app.use((req, res, next) =>{
    res.status(404).json({
        message: "ruta no encontrada"
    })
})

export default app