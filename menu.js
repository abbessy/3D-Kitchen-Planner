function openFunction() {
    document.getElementById("menu").style.width = "250px" ;
    document.getElementById("open-btn").style.display="none";
    document.getElementById("dropdown").style.display="initial";
    document.getElementById("dropdown2").style.display="initial";
    document.getElementById("calculer").style.display="initial";
}

function closeFunction() {
    document.getElementById("menu").style.width = "0px" ;
    document.getElementById("open-btn").style.display="initial";
    document.getElementById("dropdown").style.display="none";
    document.getElementById("dropdown2").style.display="none";
    document.getElementById("calculer").style.display="none";
}

function openFunction2() {
    document.getElementById("menu-cuisine").style.width = "250px" ;
    document.getElementById("open-btn2").style.display="none";
    document.getElementById("cuisine1").style.display="initial";
    document.getElementById("cuisine2").style.display="initial";
    document.getElementById("close-btn2").style.display="initial";
}

function closeFunction2() {
    document.getElementById("menu-cuisine").style.width = "0px" ;
    document.getElementById("open-btn2").style.display="initial";
    document.getElementById("cuisine1").style.display="none";
    document.getElementById("cuisine2").style.display="none";
    document.getElementById("close-btn2").style.display="none";
}
