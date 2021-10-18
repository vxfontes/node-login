const express = require('express');
const app = express();
const usuario = [{ login: "MeuLogin", senha: "MinhaSenha"}];

const routes = express.Router();
app.use("/", routes);

routes.get ("/", (req, res) => {
    res.send("Tudo certo com o servidor");
});


/////////////////////////////////////////
app.listen (8080, () => {
    console.log('Servidor online');
});