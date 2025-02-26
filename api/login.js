module.exports = async (req, res) => {
    // Configura os cabeçalhos CORS
    res.setHeader("Access-Control-Allow-Origin", "*"); // Permite todas as origens
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS"); // Métodos permitidos
    res.setHeader("Access-Control-Allow-Headers", "Content-Type"); // Cabeçalhos permitidos

    // Responde à requisição OPTIONS (pré-voo do CORS)
    if (req.method === "OPTIONS") {
        return res.status(200).end();
    }

    // Lógica do login
    const { username, password } = req.body;

    // Simulação de banco de dados
    const users = [];
    const user = users.find(
        (u) => u.username === username && u.password === password
    );

    if (user) {
        res.json({ success: true, message: "Login bem-sucedido!" });
    } else {
        res.status(401).json({ success: false, message: "Credenciais inválidas." });
    }
};