const text_input = document.getElementById("text-input");
const btn_check = document.getElementById("check-btn");
const result = document.getElementById("result");

// Verifica que el input no este vacio
function checkInput(e){
    e.preventDefault();
    if (text_input.value === "" || text_input.value === null) {
        alert("Por favor ingresa un texto");
    } else {
        esPalindromo();
    }
}

// Verifica si es palindromo
function esPalindromo(){
    const cadena = text_input.value;
    const cadenaLimpia = cadena.toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]|[^a-z0-9]/g, "");

    // Paso 2: Invertir la cadena limpia
    const cadenaInvertida = cadenaLimpia.split("").reverse().join("");

    // Paso 3: Comparar la cadena limpia con la invertida
    // Almacena la comparación en una constante resultado
    const resultado = cadenaLimpia === cadenaInvertida ? `${cadena} es Palindromo` : `${cadena} no es Palindromo`;
    result.innerText = resultado;
}

// Event listener para el boton
btn_check.addEventListener("click", checkInput, esPalindromo);

