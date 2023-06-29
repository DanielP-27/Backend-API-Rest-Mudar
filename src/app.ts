// archivo principal de la aplicación. 

import express from 'express';

const app = express ();

app.listen(3000, () => {
  console.log('Servidor lanzado en el puerto 3000');
});
