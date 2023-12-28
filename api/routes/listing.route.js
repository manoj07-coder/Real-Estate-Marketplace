import express  from 'express';
import { createListing,deleteListing,updateListing } from '../controllers/list.controller.js';
import { verifyToken } from '../utils/verify.user.js';

const router =  express.Router();

router.post('/create',verifyToken,createListing);
router.delete('/delete/:id',verifyToken,deleteListing)
router.post('/update/:id',verifyToken,updateListing)

export default router;