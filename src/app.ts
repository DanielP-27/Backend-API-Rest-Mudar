// archivo principal de la aplicación. 

import express from 'express';

const app = express ();

/** Routing: enrutamiento */
/** http://localhost:3000/ */
app.get ('/', (req, res) => {   /**req = request, res = response */
    const message = 'Bienvenido a la API de mudar de colombia'
    console.log(message);   //mensaje al navegador

    res.send (message);     //mensaje a la terminal
    res.send (`<h1> ${message}</h1>`);
});

/** http://localhost:3000/home (Endpoint) */
app.get('/home', (req, res) => {
  const namePage = 'Home';

  console.log(namePage);
  res.send (`<h1> ${namePage}</h1>`);
})


app.listen(3000, () => {
  console.log('Servidor lanzado en el puerto 3000');
});
