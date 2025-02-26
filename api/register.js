module.exports = async (req, res) => {
    // Configura os cabeçalhos CORS
    res.setHeader("Access-Control-Allow-Origin", "*"); // Permite todas as origens
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS"); // Métodos permitidos
    res.setHeader("Access-Control-Allow-Headers", "Content-Type"); // Cabeçalhos permitidos

    // Responde à requisição OPTIONS (pré-voo do CORS)
    if (req.method === "OPTIONS") {
        return res.status(200).end();
    }

    // Lógica do registro
    const { username, password } = req.body;

    // Simulação de banco de dados
    const users = [];
    const userExists = users.some((u) => u.username === username);

    if (userExists) {
        return res.status(400).json({ success: false, message: "Usuário já existe." });
    }

    // Adiciona o novo usuário
    users.push({ username, password });
    res.json({ success: true, message: "Usuário registrado com sucesso!" });
};