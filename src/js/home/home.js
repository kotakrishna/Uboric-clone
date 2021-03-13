function bath() {
    window.location.href = "./src/pages/bathroom.html"
}

function hdp() {
    window.location.href = "./src/pages/headphone.html"
}

function menft() {
    window.location.href = "./src/pages/men-footwear.html"
}

function womenft() {
    window.location.href = "./src/pages/women-footwear.html"
}

function kidft() {
    window.location.href = "./src/pages/kids-footwear.html"
}

function sock() {
    window.location.href = "./src/pages/socks.html"
}

function ft() {
    window.location.href = "./src/pages/footwear.html"
}

function kw() {
    window.location.href = "./src/pages/kitchen-ware.html"
}

function hc() {
    window.location.href = "./src/pages/health-care.html"
}

function groc() {
    window.location.href = "./src/pages/grocery.html"
}

function spi() {
    window.location.href = "./src/pages/spice.html"
}

var search = document.getElementById("input")
search.onchange = go

function go() {
    console.log(search.value);
    localStorage.setItem("search", search.value)
        // window.location.href = "./search_page.html"
        // window.location.href = "./../../pages/search_page.html"
        // window.location.href = "src/pages/search_page.html"
    window.location.href = "src/pages/search_page.html"
}

function log() {
    window.location.href = "./src/login.html"


}

function actiontoggle() {
    var action = document.querySelector('.action');
    action.classList.toggle('active')
}