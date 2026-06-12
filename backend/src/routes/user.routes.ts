import { Router } from "express";
import { authMiddleware, AuthRequest } from "../middlewares/auth.middlewares";
import { profile } from "../controllers/user.controller";

const router = Router();

router.get("/profile", authMiddleware,  profile);

export default router;