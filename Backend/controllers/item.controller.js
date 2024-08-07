import { Item } from "../model/item.model.js"
import { asyncHandler } from "../utils/asyncHandler.js"


const registerItem = asyncHandler( async (req , res) =>{


    const {date , amount, description } = req.body

    // console.log(req.body);
    

    // console.log("description : " , description)

    // if (
    //     [date , amount , description ].some( (field) => field?.trim() === "" )
    // ) {
    //     console.log( "All field are required")
    // }


    const item = await Item.create({
        date,
        amount,
        description ,
      
    })

    console.log(item)



    return res
   


})

export {registerItem}