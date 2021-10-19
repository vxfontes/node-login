const { Router } = require('express');
const routes = Router();

const controller = require ('../controllers/controller');

routes.get('/', controller.index);
routes.get('/login', controller.login);
routes.post('/perfil', controller.confirma);


module.exports = routes;

