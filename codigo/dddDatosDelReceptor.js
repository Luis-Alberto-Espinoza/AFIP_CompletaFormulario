let formu = document.getElementById('formulario') 
formu[0].value = 5 
agregarOpcionesTiposDocSegunCondicionIVA("5", gEsComprobanteB) 
formu[7].checked = true 
formu[15].checked = true 


  setTimeout(function () {
validarCampos()
  }, 500);
