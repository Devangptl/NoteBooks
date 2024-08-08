import { Item } from "../model/item.model.js"
import { asyncHandler } from "../utils/asyncHandler.js"

const registerItem = asyncHandler(async (req, res) => {
    const { date, amount, description } = req.body
    const item = await Item.create({
        date,
        amount,
        description,
    })
    console.log(item)
    return res
})

const showItem = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params;
  
        if (!ObjectId.isValid(id)) {
          return res.status(400).send('Invalid ID format');
        }
    
        const data = await collection.findOne({ _id: new ObjectId(id) });
    
        if (!data) {
          return res.status(404).send('Document not found');
        }

        return res.status(200).send("date mil gayi").json(date);
    }
    catch(err){
        res.status(500).send("error aayi he " , err)
    }
})

export { registerItem, showItem }