var request = new XMLHttpRequest();

function loadTxt() {
    request.onreadystatechange = processTxt;
    request.open("GET", "data.txt", true);
    request.send();
}

function processTxt() {
    if (request.status == 200 && request.readyState == 4) {
        var txt = document.getElementById("txt");
        txt.innerHTML = request.responseText;
    }
}