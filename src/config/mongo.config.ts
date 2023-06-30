import { connect } from "mongoose";

/** ToDo: Resolver conexión de MongoDB con Mongoose */

/** Configuración para la conexión con MongoDB */
async function dbConnect () : Promise<void>   {
    const DB_URI = 'mongodb://127.0.0.1:27017';
    await connect(DB_URI);
}

export default dbConnect; 