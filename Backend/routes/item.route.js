import { Router } from "express";
import { registerItem } from "../controllers/item.controller.js";

const router = Router()

router.route("/note").post(registerItem)

export default router