const { application } = require("express");
const usuario = [{ login: "MeuLogin", senha: "MinhaSenha"}];

module.exports = {

    index(req, res) {
        res.send("Tudo certo com o servidor");
    },
    
    login(req, res) {
        res.sendFile(__dirname + '/view' + '/login.html');
    },

    confirma(req, res) {
        
    }
};


