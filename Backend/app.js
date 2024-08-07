import express from "express"
import itemRoute from "./routes/item.route.js"

const app = express()

app.use("/" , itemRoute)

export default app