/** Los controles se encargan de las funcionaliades de cada una de las rutas */

import { Request, Response } from "express";

async function getProducts(req: Request, res : Response) {
  console.log('Obtengo todos los productos');
}

async function getProduct(req: Request, res : Response)  {
  console.log('Obtengo un producto por ID');
}

async function createProduct (req: Request, res : Response) {
  console.log('Crea un producto');
}

async function updateProduct (req: Request, res : Response) {
  console.log('Actualiza un producto por ID');
}

async function deleteProduct (req: Request, res : Response) {
  console.log('Elimina un producto por ID');
}

export {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
}