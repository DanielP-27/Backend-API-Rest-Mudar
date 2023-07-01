/** Los controles se encargan de las funcionaliades de cada una de las rutas */

import { Request, Response, json } from "express";
import ProductModel from "../models/products.model";

async function getProducts(req: Request, res : Response) {
  console.log('Obtengo todos los productos');
  res.send(`Obtengo todos los productos`);
}

async function getProduct(req: Request, res : Response)  {
  console.log('Obtengo un producto por ID');
  res.send(`Obtengo un producto por ID`);
}

async function createProduct (req: Request, res : Response) {
    const data = req.body;
    const response = await ProductModel.create( data );
    console.log(response);
    res.json(response);
}

async function updateProduct (req: Request, res : Response) {
  console.log('Actualiza un producto por ID');
  res.send(`Actualiza un producto por ID`);
}

async function deleteProduct (req: Request, res : Response) {
  console.log('Elimina un producto por ID');
  res.send(`Elimina un producto por ID`);
}

export {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
}