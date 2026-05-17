import express from 'express';
import { createList, deleteTask, showList, updateShow, updateTodo } from '../controller/todoController.js';
 const router=express.Router();
router.post("/dataSend",createList);
router.get("/all",showList);
router.post("/delete",deleteTask);
router.get("/show/:id",updateShow)
router.post("/update/:id",updateTodo)
 export default router;