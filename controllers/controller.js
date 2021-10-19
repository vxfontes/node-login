const { application } = require("express");
const usuarios = [{ login: "MeuLogin", senha: "MinhaSenha" }];
let verlogin, versenha;

module.exports = {

    index(req, res) {
        res.send("Tudo certo com o servidor");
    },

    login(req, res) {
        res.sendFile(__dirname + '/view' + '/login.html');
    },

    confirma(req, res) {
        let { login, senha } = req.body;

        var verificacao = false;
        for (let i = 0; i < usuarios.length; i++) {
            if (usuarios[i].login == login && usuarios[i].senha == senha) {
                verificacao = true;
                res.json({ Response: "Você foi logado com sucesso!! Bem vindo: ",login});
                break;
            } else {
                res.json({Response: "Login não efetuado, tente novamente"});
            }
        }
    }
};


