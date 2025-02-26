const db = require("../config/firebase");

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
        // Busca o usuário no Firestore
        const userRef = db.collection("users").doc(username);
        const doc = await userRef.get();

        if (!doc.exists) {
            return res.status(401).json({ success: false, message: "Usuário não encontrado." });
        }

        const user = doc.data();

        if (user.password === password) {
            res.json({ success: true, message: "Login bem-sucedido!" });
        } else {
            res.status(401).json({ success: false, message: "Credenciais inválidas." });
        }
    } catch (error) {
        console.error("Erro ao fazer login:", error);
        res.status(500).json({ success: false, message: "Erro ao fazer login." });
    }
};