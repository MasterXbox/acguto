document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Aqui você pode adicionar a lógica de autenticação
        // por exemplo, verificar o nome de usuário e senha
        // e redirecionar o usuário para a página apropriada.

        // Exemplo simples para demonstração:
        const password = document.getElementById("password").value;

        if ( password === "250367" || password === "25/03/67") {
            
        } else {
            alert("Login falhou. Tente novamente.");
        }
    });
});