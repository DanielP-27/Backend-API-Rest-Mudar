// la estructura que se define con models se vera refelajada en la base de datos de la página, aplicación //
import {Schema, model} from "mongoose";

const productSchema = new Schema(
  // Objeto principal define los valores o atributos del modelos (primeras {})
  {
    name: {
      type: String,
      required: true, 
    },
    price: {
      type: Number,
      required: false
    },
    description: {
      type: String
    }
  },
  // El segundo objeto define las configuraciones que se pueden aplicar en mongoose para este objeto
  {
    timestamps: true
  }
);

// Define el modelo a partir de la estructura requerida por mongoose //
const productModel = model ('Products', productSchema);


// se recomienda exportar los modelos por default SIEMPRE
export default productModel;