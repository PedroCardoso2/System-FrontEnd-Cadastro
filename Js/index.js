let firstNameUser = document.querySelector(".firstname");
let lastNameUser = document.querySelector(".lastname");
let emailUser = document.querySelector(".emaill");
let dateUser = document.querySelector(".datebirth");
let passwordUser = document.querySelector(".pass");

let frm = document.querySelector(".form");


const cadastrar = () => {
    fetch("http://localhost:8080/usuario",
        {
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
        .then(function (res) {console.log(res)})
        .catch(function (res) {console.log(res)})
}




function limpar(){
     firstNameUser.value = "";
     lastNameUser.value = "";
     emailUser.value = "";
     passwordUser.value = "";
     dateUser.value = "";
}



frm.addEventListener('submit', (e) => {
    e.preventDefault();
    cadastrar();
    limpar();

})
