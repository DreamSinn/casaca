const db = require("./firebase");

module.exports = async (req, res) => {
    // Configura os cabeçalhos CORS
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") {
        return res.status(200).end();
    }

    const { username, password } = req.body;

    try {
        // Verifica se o usuário já existe
        const userRef = db.collection("users").doc(username);
        const doc = await userRef.get();

        if (doc.exists) {
            return res.status(400).json({ success: false, message: "Usuário já existe." });
        }

        // Adiciona o novo usuário
        await userRef.set({ username, password });
        res.json({ success: true, message: "Usuário registrado com sucesso!" });
    } catch (error) {
        console.error("Erro ao registrar:", error);
        res.status(500).json({ success: false, message: "Erro ao registrar." });
    }
};