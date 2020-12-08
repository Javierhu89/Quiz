const respuestas = ["groenlandia", "edson" , "atenea" , "1986" , "recreativo", "matt", "amazonas" , "huelva", "renacido", "brendan"];

document.getElementById("final").addEventListener("click",function(event){
    event.preventDefault();
    let aciertos=0;
    let marcas=0;
    let j = 0;
    let answers = document.getElementsByName("preguntas");
    let fondos =  document.getElementsByName("opciones");
        for (let p=0 ; p<answers.length ; p++ ){
            if (answers[p].checked){
                marcas++;
            }
        }
        if ( marcas < 10){
            alert ("Responde a todas las preguntas, melón!");
        } else {
            for (let i=0 ; i<answers.length ; i++){
                if (answers[i].checked){
                    if (respuestas[j] == answers[i].value)
                    {
                    answers[i].parentElement.style.backgroundColor = "#228B22";
                    answers[i].parentElement.style.border = "solid black 3px";
                    answers[i].parentElement.style.padding = "16px 0px 16px 0px";
                    fondos[i].style.backgroundColor = "#228B22";
                    aciertos++;
                    }else{
                        answers[i].parentElement.style.backgroundColor = "#B22222";
                        answers[i].parentElement.style.border = "solid black 3px";
                        answers[i].parentElement.style.padding = "16px 0px 16px 0px";
                        fondos[i].style.backgroundColor = "#B22222";
                    } j++;
                }
            } alert ("Has acertado: " + aciertos);
        }
        if (aciertos == 10){
            alert ("¡¿Cuántas veces lo has intentado para sacarlo?!");
            alert ("Venga no te autoengañes, has mirado en Google y lo sabes!");
            alert ("Está bien, aquí abajo tienes a tu princesa:");
            let princesa = document.createElement("img");
            princesa.setAttribute("src","./img/princess.jpg");
            princesa.setAttribute("id","princesa");
            document.getElementById("_princesa").appendChild(princesa);
            document.getElementById("final").style.visibility = "hidden"; 
            document.getElementById("final").style.margin = "0px"; 
            event.target.submit(); // ¿Se ha enviado algo?
        }
});