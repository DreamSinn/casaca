const express = require("express");
const router = express.Router();

// Simulação de banco de dados
const users = [];

router.post("/users", (req, res) => {
    const { username, password } = req.body;

    // Verificar se o usuário já existe
    const userExists = users.some((u) => u.username === username);
    if (userExists) {
        return res.status(400).json({ success: false, message: "Usuário já existe." });
    }

    // Adicionar novo usuário
    users.push({ username, password });
    res.json({ success: true, message: "Usuário registrado com sucesso!" });
});

module.exports = router;