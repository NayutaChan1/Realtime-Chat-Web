import { Router } from "express";
import * as authController from "../controllers/auth.controller";

const router = Router();

router.post("/register", authController.register);
router.post("/login", authController.findUser);
// router.get("/profile", authMiddleware, authController.findUser)

export default router;