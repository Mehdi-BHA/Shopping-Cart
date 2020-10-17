var closeicon = document.getElementsByClassName("fa-times-circle")[0]

function closeTab(){
    var shopContainer = document.getElementsByClassName("storeContainer")[0]
    shopContainer.classList.add("closed")
}


closeicon.addEventListener('click',closeTab)

var w = document.getElementById("panier")

function openTab(){
    var shopContainer = document.getElementsByClassName("storeContainer")[0]
    shopContainer.classList.remove("closed")

}
w.addEventListener('click',openTab)