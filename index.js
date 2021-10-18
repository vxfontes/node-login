const express = require('express');
const app = express();
const usuario = [{ login: "MeuLogin", senha: "MinhaSenha"}];
app.use("/", routes);



/////////////////////////////////////////
app.listen (8080, () => {
    console.log('Servidor online');
});