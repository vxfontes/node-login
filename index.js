const express = require('express');
const app = express();
app.use("/", routes);



/////////////////////////////////////////
app.listen (8080, () => {
    console.log('Servidor online');
});