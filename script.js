
function enviar() {
    //Método que captura as informações digitadas pelo usuário no formulário.
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const msg = document.getElementById('msg').value.trim();

    //Método que valida se os campos foram preenchidos
    if(!nome || !email || !msg) {
        alert("Preencha todos os campos");
    }else {
        alert('Mensagem enviada com sucesso');
        document.getElementById('contactForm').reset();
    }

    
}