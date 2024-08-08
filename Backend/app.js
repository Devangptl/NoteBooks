import express from "express"
import itemRoute from "./routes/item.route.js"
import cors from "cors"
import { Item } from "./model/item.model.js"

const app = express()

app.use(cors())
app.use(express.json())

app.use("/" , itemRoute)




export default app