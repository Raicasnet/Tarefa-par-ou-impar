const form = document.getElementById("parImparForm");
const resposta = document.getElementById("resposta");

// Evento de envio (Verificar)
form.addEventListener("submit", function(e) {
    e.preventDefault();
    
    const numero = parseInt(document.getElementById("innumero").value);

    if (isNaN(numero)) {
        resposta.innerText = "Por favor, insira um número válido.";
        resposta.className = "h5 mt-4 text-center text-danger";
        return;
    }

    if (numero % 2 === 0) {
        resposta.innerText = `O número ${numero} é par!`;
        resposta.className = "h5 mt-4 text-center text-success fw-bold";
    } else {
        resposta.innerText = `O número ${numero} é ímpar!`;
        resposta.className = "h5 mt-4 text-center text-warning text-dark fw-bold";
    }
});

// Evento de reset (Limpar) corrigido para usar as variáveis corretas
form.addEventListener("reset", () => {
    resposta.innerText = "";
    resposta.className = "h5 mt-4 text-center text-secondary";
});
