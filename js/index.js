
    document.getElementById("buttonText").addEventListener("click", function(){
    let inputText = document.getElementById("inputText").value;

    localStorage.setItem("storedText", inputText); //guarda en localstorage

    document.getElementById("inputText").value = "";
});

