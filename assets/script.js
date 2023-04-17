function copyText(div) {
    var text = div.querySelector('.copyText').innerHTML;
    navigator.clipboard.writeText(text);
    document.getElementById('copyInfo').classList.add("animate");
    test();
}

function Sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
   }

async function test() {
    await Sleep(2000); // Pausiert die Funktion für 3 Sekunden
    document.getElementById('copyInfo').classList.remove("animate");
   }    