function validateForm(){
    //Recebe os dados do form
    let isLoggedIn = false;
    var nome = document.getElementById('nome').value;
    var password = document.getElementById('senha').value;

    //Vê se o usuário preencheu todos os dados
    if (nome === '' || password === '') {
        alert('Por favor preencha todos os campos');
        return false; 
    }
    //Login do administrador
    else if (nome == 'admin' || password == '123') {
       alert("Login realizado com sucesso!");
       window.location.href = 'siteInicial.html';
       sessionStorage.setItem("isLoggedIn", "true");
       return true;
    }
    else{
       alert('Login não realizado!')
       return false;
    }

  

}


;