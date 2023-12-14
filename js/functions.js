
function botaoEntrar() {
    senha = document.getElementById("inputSenha").value
    if(senha == '')
    {
        alert("O campo senha está em branco.")
    }
        else
        {
            if(senha =='123' ){
                window.location.href = "/html/menuInicial.html"
            }else{
                alert("Senha incorreta, tente novamente.")
            }
        }
}