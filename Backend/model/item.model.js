import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({

    date: {
        type : String,
        require : true
    },
    amount: {
        type : Number,
        require : true
    },
    description: {
        type : String,
        require : true
    }

} , {timestamps :true})

export const Item = mongoose.model("Item" , itemSchema) 