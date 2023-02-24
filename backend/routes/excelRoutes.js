import express from "express";
const router = express.Router();
import { subirExcel } from "../controllers/ExcelController.js";

router.post('/subir', subirExcel);

export default router;