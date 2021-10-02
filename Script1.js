function toggleChange(x) {
    x.classList.toggle("change");
}

function comment() {
    document.querySelector(".buttons").setAttribute("style", "pointer-events: none;");
    document.getElementById("wrapper").setAttribute("style", "filter: blur(8px); z-index:1");
    document.getElementById("comments").setAttribute("style", "visibility: visible; z-index:2");
    
}

function goBack() {
    document.getElementById("comments").setAttribute("style", "visibilty: hidden;");
    document.querySelector("#wrapper").setAttribute("style", "filter: blur(0px);");
    document.querySelector(".buttons").setAttribute("style", "pointer-events: all;");
}