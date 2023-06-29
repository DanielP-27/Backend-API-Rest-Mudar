// archivo principal de la aplicación. 

import express, {Request, Response} from 'express';
import main from './routes';

// const {request, response} = express;

const app = express ();

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

app.use('/', main )


app.listen(3000, () => {
  console.log('Servidor lanzado en el puerto 3000');
});
