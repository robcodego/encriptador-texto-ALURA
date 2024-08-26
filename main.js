document.querySelector('.encrypt_button').addEventListener('click', ()=>{
    const texto = document.getElementById('texto-no-encrypt').value;
    let tx_encriptado = "";
    const claves={
        "e": "enter",
        "i": "imes",
        "a": "ai",
        "o": "ober",
        "u": "ufat"
    };

    for(let i of texto){ 
        if(i in claves){
            for(let j in claves){
                if(i == j){
                    tx_encriptado += claves[j];
                    break;
                } 
            }
        } else{
            tx_encriptado += i;
        }
    }
    document.getElementById('wrapper_encrypt_text_message_m').textContent = tx_encriptado;
    document.getElementById('wrapper_encrypt_text_message_m').style.display = 'block';
    document.querySelector('.copy_button').style.display = 'inline';
    document.getElementById('not-found').style.display = "none";
    document.getElementById('nofound_message').style.display = "none";
    document.getElementById('input_text').style.visibility = "hidden";

});
document.querySelector('.dencrypt_button').addEventListener('click', ()=>{
    const texto = document.getElementById('texto-no-encrypt').value;
    const tx_encriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.getElementById('wrapper_encrypt_text_message_m').textContent = tx_encriptado;
    document.getElementById('wrapper_encrypt_text_message_m').style.display = 'block';
    document.querySelector('.copy_button').style.visibility = 'visible';
    document.getElementById('not-found').style.display = "none";
    document.getElementById('nofound_message').style.display = "none";
    document.getElementById('input_text').style.visibility = "hidden";

});

function copiarTexto() {
    // Seleccionar el texto del elemento p
    const texto = document.getElementById("wrapper_encrypt_text_message_m").innerHTML;
    console.log(texto)

    // Usar la API Clipboard para copiar el texto
    navigator.clipboard.writeText(texto).then(function() {
        // Mostrar mensaje de éxito
        const mensaje = document.getElementById("mensaje");
        mensaje.style.display = "block";
        
        // Ocultar el mensaje después de 2 segundos
        setTimeout(() => {
            mensaje.style.display = "none";
        }, 2000);
    }).catch(function(err) {
        console.error("Error al copiar el texto: ", err);
    });
}