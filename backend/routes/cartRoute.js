import express from "express";
import { addToCart, getCartItems, removeFromCart } from "../controllers/cartController.js";
import authMiddleware from "../middleware/auth.js";

const cartrouter = express.Router();

cartrouter.post("/add", authMiddleware, addToCart);
cartrouter.post("/remove", authMiddleware, removeFromCart);
cartrouter.get("/get", authMiddleware, getCartItems);

export default cartrouter;