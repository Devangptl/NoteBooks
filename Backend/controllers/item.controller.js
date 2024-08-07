import { Item } from "../model/item.model.js"
import { asyncHandler } from "../utils/asyncHandler.js"


const registerItem = asyncHandler( async (req , res) =>{


    const {Date , amount, description } = req.body

    console.log("description : " , description)

    if (
        [Date , amount , description ].some( (field) => field?.trim() === "" )
    ) {
        console.log( "All field are required")
    }


    const item = await Item.create({
        Date,
        amount,
        description ,
      
    })

    console.log(item)



    return res
    .status(201)
    .json(
        new ApiResponse(200 , createdUser , "User registered Successfully")
    )


})

export {registerItem}