import { Router } from "express";
import { addReview, deleteReview, getReview, updateReview } from "../controllers/reviewControll.js";
import { addOrder, deleteOrder, getOrder, updateOrder } from "../controllers/orderControll.js";

export const orderRoute=Router();


orderRoute.get("/order",getOrder);

orderRoute.post("/add/order/:id",addOrder);

orderRoute.patch("/update/order:id",updateOrder);

orderRoute.delete("/delete/order/:id",deleteOrder);

