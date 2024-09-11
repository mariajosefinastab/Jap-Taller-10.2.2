const storedText = localStorage.getItem("storedText"); //recupero el dato guardado en localStorage

document.getElementById("data").textContent = storedText ? storedText : "no hay dato guardado"; //ternario, condición ? valor_si_verdadero : valor_si_falso;