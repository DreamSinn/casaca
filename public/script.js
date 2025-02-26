// Função para cadastrar
async function register(event) {
    event.preventDefault(); // Impede o envio do formulário
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
        alert("As senhas não coincidem!");
        return;
    }

    try {
        const response = await fetch(`${API_URL}/register`, {
            method: "POST", // Método POST
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();
        alert(data.message);
        if (data.success) window.location.href = "login.html";
    } catch (error) {
        console.error("Erro ao cadastrar:", error);
        alert("Erro ao cadastrar. Tente novamente.");
    }
}

// Função para login
async function login(event) {
    event.preventDefault(); // Impede o envio do formulário
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch(`${API_URL}/login`, {
            method: "POST", // Método POST
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();
        alert(data.message);
        if (data.success) window.location.href = "start.html";
    } catch (error) {
        console.error("Erro ao fazer login:", error);
        alert("Erro ao fazer login. Tente novamente.");
    }
}