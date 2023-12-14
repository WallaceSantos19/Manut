function mostrarOcultarSenha(){

    var olho = document.getElementById("mostrarSenha").style.display

    if(olho == "block"){
        document.getElementById("mostrarSenha").style.display="none"
        document.getElementById("ocultarSenha").style.display="block"
        document.getElementById("inputSenha").type="text"
    }
        else{
            document.getElementById("mostrarSenha").style.display="block"
            document.getElementById("ocultarSenha").style.display="none"
            document.getElementById("inputSenha").type="password"
        }
}