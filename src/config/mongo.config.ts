import { connect } from "mongoose";


/** Configuración para la conexión con MongoDB */
async function dbConnect () : Promise<void>   {
    const DB_URI = <string> process.env.DB_URI;     //`${process.env.DB.URI}`;  Equivale al caste del string visto en esta linea//
    await connect(DB_URI);
}

export default dbConnect; 