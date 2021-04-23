function openFunction() {
    document.getElementById("menu").style.width = "250px" ;
    document.getElementById("open-btn").style.display="none";
    document.getElementById("close-btn").style.display="initial";
    document.getElementById("Réfrigérateur").style.display="initial";
    document.getElementById("Gaz").style.display="initial";
    document.getElementById("Lavabo").style.display="initial";
    document.getElementById("Table").style.display="initial";
    document.getElementById("Porte_Légumes").style.display="initial";
    document.getElementById("Éléments_cuisine").style.display="initial";
    document.getElementById("cuisine").style.display="initial";
    document.getElementById("elements-btn").style.display="initial";
}

function closeFunction() {
    document.getElementById("menu").style.width = "0px" ;
    document.getElementById("open-btn").style.display="initial";
    document.getElementById("close-btn").style.display="none";
    document.getElementById("Réfrigérateur").style.display="none";
    document.getElementById("Gaz").style.display="none";
    document.getElementById("Lavabo").style.display="none";
    document.getElementById("Table").style.display="none";
    document.getElementById("Porte_Légumes").style.display="none";
    document.getElementById("Éléments_cuisine").style.display="none";
    document.getElementById("cuisine").style.display="none";
    document.getElementById("elements-btn").style.display="none";
   
}

function manageElements() {
    if (document.getElementById("elements").style.display=="initial") {
    document.getElementById("elements").style.display="none";
    document.getElementById("elements").style.transition = "0.3s ease" ;
}
    else {
        document.getElementById("elements").style.display="initial";
        document.getElementById("elements").style.transition = "0.3s ease" ;
    }
}