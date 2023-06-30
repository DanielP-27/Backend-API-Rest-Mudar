/** Archivo central de enrutamiento */
import {Router, Request, Response} from "express";
import { getProducts } from "../controllers/product.controller";

const router = Router();

//http://localhost:3000/api/products/
router.get( '/', getProducts);


export default router;  /** permite utilizar la funcionalidad creada en las lineas 2 a 12 */