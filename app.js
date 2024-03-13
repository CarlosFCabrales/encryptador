/* declaracion de variables */
let palabra = document.getElementById("oracionlimpia");
let mensaje = document.getElementById("oracioncrypto");


/* funcion para checar que no haya caracteres especiales en la palabra a encriptar  */
function validateInput1() {
    var inputValue = document.getElementById("oracionlimpia").value; 
    var regex = /^[a-zA-Z\s]*$/; // checa que solo sean letras o espacio

    if (!regex.test(inputValue)) {
        alert("No se permite usar numeros, acentos o caracteres especiales");
        
    } else {
        botonEncriptar();   
    }        
}

/* Funcion para llamar al boton de encriptar */
function botonEncriptar(){                        
    const textoEncriptado = encriptar(palabra.value);  
    mensaje.value = textoEncriptado;

}

/* Funcion para Encriptar */
function encriptar(stringEncriptada){    

    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]]; 
    stringEncriptada = stringEncriptada.toLowerCase();
   
    

    for(let i = 0; i < matrizCodigo.length; i++){        
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }

    return stringEncriptada
}



/* funcion para checar que no haya caracteres especiales en la palabra a desencriptar  */
function validateInput2() {
    var inputValue = document.getElementById("oracionlimpia").value; 
    var regex = /^[a-zA-Z\s]*$/; // checa que solo sean letras o espacio

    if (!regex.test(inputValue)) {
        alert("No se permite usar numeros, acentos o caracteres especiales");
        
    } else {
        botonDesencriptar();   
    }        
}


/* Funcion para llamar al boton de desencriptar */
function botonDesencriptar(){                    
    const textoEncriptado = desencriptar(palabra.value);
    mensaje.value = textoEncriptado;

}

/* Funcion para desencriptar */
function desencriptar(stringDesencriptada){    

    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]]; 
    stringDesencriptada = stringDesencriptada.toLowerCase();
   
    for(let i = 0; i < matrizCodigo.length; i++){        
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
    }

    return stringDesencriptada
}



/* Funcion para limpiar las dos cajas de texto */
function limpia() {
    document.getElementById('oracionlimpia').value = '';
    document.getElementById('oracioncrypto').value = '';
    return
}


/* Funcion para copiar el texto  */
function copiarTexto() {
    let textoACopiar = document.getElementById("oracioncrypto");    // asignamos el valor del textarea a una variable

    navigator.clipboard.writeText(textoACopiar.value)    // usamos el metodo clipbpard para copiar el valor del textArea
}



/* alert(`la oracion es: ${letras.toLowerCase()} y mide: ${letras.length}`);  */
