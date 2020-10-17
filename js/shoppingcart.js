var rmv = document.getElementsByClassName('remove');
for(i=0;i<rmv.length;i++){
    var btn = rmv[i];
    btn.addEventListener('click',function(event){
        var btnclicked = event.target
        btnclicked.parentElement.parentElement.parentElement.remove()
        updateItemTotal()
    })
}

var quantityInputs = document.getElementsByClassName('product-quantity')
for (var i=0;i<quantityInputs.length;i++){
    var input = quantityInputs[i]
    input.addEventListener('change',quantityChanged)
}

function quantityChanged(event){
    var input = event.target
    if (input.value <= 0){
        input.value = 1
    }
    updateItemTotal()
    
}



function updateItemTotal(){
    var container = document.getElementsByClassName('storeContainer')[0]
    var store = container.getElementsByClassName('store')[0]
    var itemContainer = store.getElementsByClassName('productlist')[0]
    var items = itemContainer.getElementsByClassName('productitem')
    var total = 0
    var nbrItems = items.length
    for(i=0;i<items.length;i++){
        var item = items[i]
        var itemPrice = item.getElementsByClassName('product-price')[0]
        var itemQuantity = item.getElementsByClassName('product-quantity')[0]
        var price = itemPrice.innerText.replace('dt','')
        var quantity = itemQuantity.value
        totalItem = price*quantity
        item.getElementsByClassName('total-product-price')[0].innerText=totalItem+" dt"
        total+= totalItem
    }
    delivery = document.getElementsByClassName('delivery')[0].value
    code = document.getElementById("promo-code")
    promo = 0 
    if (code.value == "gomycode"){ promo = 20}else if(code.value == ""){} else{alert('Code promo invalide')}
    document.getElementsByClassName('nbritems')[0].innerText = nbrItems + " objets"
    document.getElementById('items-counter').innerText = nbrItems + " objets"
    document.getElementsByClassName('total-cost')[0].innerText = total + " dt"
    var finalCost = total*(1-(promo/100)) + parseInt(delivery)
    document.getElementById('final-cost').innerText = "Total cost: " + finalCost + " dt"

}

document.getElementsByClassName('delivery')[0].addEventListener('change',updateItemTotal)

updateItemTotal()

hearts = document.getElementsByClassName("fa-heart")
for (var i=0;i<hearts.length;i++){
    var heart = hearts[i]
    var toggle = function(){
        this.classList.toggle('far')
        this.classList.toggle('fas')
        this.classList.toggle('red')
    }
    heart.addEventListener("click",toggle)
}

apply = document.getElementById("btn-apply")
apply.addEventListener('click',updateItemTotal)
var alertfunc = function(){
    alert('Thank you for your purchase')
}
checkout = document.getElementById('btn-cost')
checkout.addEventListener('click',alertfunc)
