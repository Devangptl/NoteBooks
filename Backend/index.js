import app from "./app.js";
import connectDB from "./db.js";

const PORT  = 2000

connectDB()
.then(()=>{
    app.listen(2000 , ()=>{
        console.log(`Server Running in ${PORT}` );
        
    })
})
.catch((error)=>{
    console.log("MongoDB error " , error);
    
})