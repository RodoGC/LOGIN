var contenedor_login_register| = document. querySelector (". contenedor__login-register") ;
var formulario_login = document. querySelector (". formulario__login");
var formulario_register = document.querySelector(". formulario__register");
var caja_trasera_login = document querySelector(" caja_trasera-login") ;
var caja_trasera_register = document querySelector(". caja_trasera-register");


function register(){  
    formulario_register.Style.display = "block";
    contenedor_login_register.Style.left = "410px";
    formulario_login.Style.display="none";
    caja_trasera_register.Style.opacity="0";
    caja_trasera_login.Style.opacity="1";
  }