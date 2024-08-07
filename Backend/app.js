import express from "express"
import itemRoute from "./routes/item.route.js"
import cors from "cors"

const app = express()

app.use(cors())
app.use(express.json())

app.use("/" , itemRoute)

export default app