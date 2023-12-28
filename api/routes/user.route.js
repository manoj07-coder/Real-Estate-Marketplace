import express from "express";
import { test } from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verify.user.js";
import { updateUser,deleteUser,getListings } from "../controllers/user.controller.js";

const router = express.Router()

router.get('/test',test);
router.post('/update/:id',verifyToken,updateUser)
router.delete('/delete/:id',verifyToken,deleteUser)
router.get('/listings/:id',verifyToken,getListings)

export default router;