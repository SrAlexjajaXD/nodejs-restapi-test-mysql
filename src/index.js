import app from "./app.js"
import { PORT } from "./config.js"
import cors from 'cors'

app.use(cors())
app.listen(PORT)
console.log("server running on port", PORT)