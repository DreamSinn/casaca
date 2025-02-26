const express = require("express");
const cors = require("cors");

const app = express();

// Configura o CORS
app.use(cors({
    origin: "https://ctbgen-git-main-darosz640s-projects.vercel.app", // Permite apenas o frontend
    methods: "GET, POST, OPTIONS", // Métodos permitidos
    allowedHeaders: "Content-Type" // Cabeçalhos permitidos
}));

// Rotas
app.post("/api/login", (req, res) => {
    // Lógica do login
    res.json({ success: true, message: "Login bem-sucedido!" });
});

app.post("/api/register", (req, res) => {
    // Lógica do registro
    res.json({ success: true, message: "Usuário registrado com sucesso!" });
});

// Inicia o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});