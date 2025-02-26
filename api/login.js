module.exports = async (req, res) => {
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