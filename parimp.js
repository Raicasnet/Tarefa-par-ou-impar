const form = document.querySelector("form");
const resposta = document.getElementById("resposta");

form.addEventListener("submit", function(e){
    const numero = parseInt(form.innumero.value);
    if (numero % 2 === 0) {
        resposta.innerText = `O número ${numero} é par !`;
    } else {
        resposta.innerText = `O número ${numero} é ímpar !`;
    }

    e.preventDefault();    

})

frm.addEventListener("reset", () => {
	resp.innerText = "";
    
});