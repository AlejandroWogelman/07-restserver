import { Router } from "express";
import {
  usersDELETE,
  usersGET,
  usersPOST,
  usersPUT,
} from "../controllers/user.controller.js";

const router = Router();

router.get("/", usersGET);
router.post("/", usersPOST);
router.put("/:id", usersPUT);
router.delete("/", usersDELETE);

export default router;
