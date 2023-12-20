const firstNameUser = document.getElementsByClassName("firstname");
const lastNameUser = document.getElementsByClassName(".lastname");
const emailUser = document.getElementsByClassName(".emaill");
const dateUser = document.getElementsByClassName(".datebirth");
const passwordUser = document.getElementsByClassName(".pass");

let frm = document.querySelector(".form");  // Selecionar o formulário

const cadastrar = (e) => {
    e.preventDefault();  

    
   
        fetch("http://localhost:8080/usuario", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                firstName: firstNameUser.value,
                lastName: lastNameUser.value,
                email: emailUser.value,
                password: passwordUser.value,
                dateofbirth: dateUser.value
            })
        })
        .then(function (res) {
            console.log(res);
            limpar();  // Limpar os campos após o envio bem-sucedido
        })
        .catch(function (err) {
            console.error(err);
        });
   
}

function limpar() {
    firstNameUser.value = "";
    lastNameUser.value = "";
    emailUser.value = "";
    passwordUser.value = "";
    dateUser.value = "";
}

frm.addEventListener('submit', cadastrar);  // Usar o evento de envio do formulário
