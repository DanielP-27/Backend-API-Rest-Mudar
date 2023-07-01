import { connect } from "mongoose";


/** Configuración para la conexión con MongoDB */
async function dbConnect () : Promise<void>   {
    const DB_URI = 'mongodb://127.0.0.1:27017/mudar';
    await connect(DB_URI);
}

export default dbConnect; 