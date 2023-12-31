import express from "express";
import { google, signOut, signUp, signin } from "../controller/auth.controller.js";

const router = express.Router()

router.post('/signup', signUp)
router.post('/signin', signin)
router.post('/google', google)
router.get('/signout', signOut)


export default router