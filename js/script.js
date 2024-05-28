let idioma = "esp"

function cambiarIdioma() {
    let bandera = document.getElementById('idioma')
    if (idioma == "esp") {
        idioma = "eng"
    }
    else {
        idioma = "esp"
    }
    bandera.src = "./static/img/" + idioma + ".png"
    headerInfo()
}

function headerInfo() {
    document.getElementById('header_info').innerHTML = headers[idioma]
}

function isOpen(div) {
    if (div.classList.contains("isOpen")) {
        return true
    }
    else { return false }
}

function openPopup(cual) {
    document.getElementById('main_container').className = 'main_container grayed'
    document.getElementById('overlay').classList = 'isOpen'
    let popup = document.getElementById('popup')
    popup.style = 'display:block;'
    popup.classList = 'popup isOpen'
    /*                    <div class="popup start isClosed" id="fulbacho">
                        <a href="" target=”_blank”>Jugar</a>
                    </div>*/
    popup.innerHTML = info[cual][idioma]
    let link
    if (!document.getElementById('link')) {
        link = document.createElement('a')
        link.setAttribute('target', '_blank')
        popup.appendChild(link)
    }
    else { link = document.getElementById('link') }
    link.href = links[cual]
    if (idioma == 'esp') {
        link.innerHTML = 'Jugar'
    }
    else {
        link.innerHTML = 'Play'
    }
}
document.addEventListener("DOMContentLoaded", () => {
    ['click', 'ontouchstart'].forEach(evt =>
        document.getElementById('overlay').addEventListener(evt, () => {
            document.getElementById('overlay').classList = 'isClosed'
            document.getElementById('main_container').className = 'main_container ungrayed'
        }, false)
    );
    headerInfo()
});
