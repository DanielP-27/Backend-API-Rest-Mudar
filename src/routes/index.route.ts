/** Archivo central de enrutamiento */
import {Router, Request, Response} from "express";
import routeUsers from "./users.route";
import routeProducts from "./products.route";

const router = Router();

/** Implementando Middlewares a Express */
router.use ('/users', routeUsers);  //http://localhost:3000/api/users
router.use ('/products', routeProducts); //http://localhost:3000/api/products

export default router;  