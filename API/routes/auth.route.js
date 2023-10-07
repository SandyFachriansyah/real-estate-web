import express from "express";
import { signUp, signin } from "../controller/auth.controller.js";

const router = express.Router()

router.post('/signup', signUp)
router.post('/signin', signin)

export default router