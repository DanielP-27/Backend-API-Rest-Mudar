/** Archivo central de enrutamiento */
import {Router, Request, Response} from "express";

const router = Router();

router.get( '/users', (req: Request, res: Response) => {
  const msg = 'users';

  console.log(msg);
  res.send (`<h1> ${msg} </h1>`)
  
});

export default router;  /** permite utilizar la funcionalidad creada en las lineas 2 a 12 */