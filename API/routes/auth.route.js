import express from "express";
import { google, signUp, signin } from "../controller/auth.controller.js";

const router = express.Router()

router.post('/signup', signUp)
router.post('/signin', signin)
router.post('/google', google)

export default router