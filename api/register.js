module.exports = async (req, res) => {
    const { username, password } = req.body;

    // Simulação de banco de dados
    const users = [];
    const userExists = users.some((u) => u.username === username);

    if (userExists) {
        return res.status(400).json({ success: false, message: "Usuário já existe." });
    }

    users.push({ username, password });
    res.json({ success: true, message: "Usuário registrado com sucesso!" });
};