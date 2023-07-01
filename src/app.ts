import 'dotenv/config'; 
import express, {Request, Response} from 'express';
import routeMain from './routes/index.route';
import db from "./config/mongo.config";


// const {request, response} = express;

const app = express ();
const PORT = process.env.PORT  || 3001;

/** Routing: enrutamiento */
/** http://localhost:3000/ */
app.get ('/', (req : Request , res: Response) => {   /**req = request, res = response */
    const message = 'Bienvenido a la API de mudar de colombia'
    console.log(message);   //mensaje al navegador

    res.send (message);     //mensaje a la terminal
    res.send (`<h1> ${message}</h1>`);
});

/** http://localhost:3000/home (Endpoint) */
app.get('/home', (req: Request, res: Response) => {
  const namePage = 'Home';

  console.log(namePage);
  res.send (`<h1> ${namePage}</h1>`);
})

/** Implementando Middlewares a Express */
app.use(express.json());

//http://localhost:3000/api
app.use('/api', routeMain );

// Resolvemos la promera: conexión a Monho usando Mongoose //
db()
    .then(() => console.log(`MongoDB se conectó correctamete`))
    .catch(() => console.log(`MongoDB sufre problemas de conexión`));
    
    

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});
