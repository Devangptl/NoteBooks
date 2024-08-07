import { Item } from "../model/item.model.js"
import { asyncHandler } from "../utils/asyncHandler.js"


const registerItem = asyncHandler( async (req , res) =>{
    const {date , amount, description } = req.body
    const item = await Item.create({
        date,
        amount,
        description ,
    })
    console.log(item)
    return res
})

export {registerItem}