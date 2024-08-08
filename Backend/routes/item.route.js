import { Router } from "express";
import { registerItem , showItem} from "../controllers/item.controller.js";

const router = Router()

router.route("/note").post(registerItem)
router.route("/item").get(showItem)

export default router