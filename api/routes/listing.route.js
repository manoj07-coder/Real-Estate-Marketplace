import express  from 'express';
import { createListing } from '../controllers/list.controller.js';
import { verifyToken } from '../utils/verify.user.js';

const router =  express.Router();

router.post('/create',verifyToken,createListing);

export default router;