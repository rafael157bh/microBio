
const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(event) {
   
    event.preventDefault(); 

    const usuario = document.getElementById('username').value;
    const senha = document.getElementById('password').value;


    console.log("Tentativa de login efetuada:");
    console.log("Utilizador:", usuario);
    console.log("Palavra-passe capturada com sucesso.");


    alert(`Olá, ${usuario}! O seu pedido de login foi enviado para processamento.`);


});