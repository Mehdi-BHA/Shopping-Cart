function Products(pic,name,manufactor,price){
    this.pic = pic,
    this.name = name,
    this.manufactor = manufactor,
    this.price = price
}

const product0 = new Products('https://images-na.ssl-images-amazon.com/images/I/81lDaY4ZpFL.jpg','FIFA 20','PS4',200)
const product1 = new Products('https://i.jeuxactus.com/datas/jeux/c/a/call-of-duty-modern-warfare-2-remastered/l/call-of-duty-modern-war-5e7dfbc97bd91.jpg','Call Of Duty','PS4',170)
const product2 = new Products('https://images-na.ssl-images-amazon.com/images/I/81e%2B-ZfvwLL._SL1500_.jpg','Sims 4','PC',120)
const product3 = new Products('https://www.wiki.tn/46632/jeu-ps4-nba-2k20-sport.jpg','NBA 2k20','PS4',250)
const product4 = new Products('https://static.fnac-static.com/multimedia/Images/FR/NR/c9/d0/ac/11325641/1505-1/tsp20190827110057/Grand-Theft-Auto-V-Edition-Premium-Online-PS4.jpg','GTA V','PS4','140')


var products = []
products.push(product0,product1,product2,product3,product4)

function populateList (){
    var productList = ""
    for (i=0;i<products.length;i++){
        productList += `
        <div class="productitem">
            <div class="product">
                <i class="far fa-heart"></i>
                <img src=${products[i].pic} alt="">
                <div class="productDetails">
                    <h1>${products[i].name}</h1>
                    <h2>${products[i].manufactor}</h2>
                    <h3 class="remove">Remove</h3>
                </div>
            </div>  
            <p><input type="number" min="0" max="10" value="1" class="product-quantity"></p>
            <p class="product-price">${products[i].price} dt</p>
            <p class="total-product-price"></p>
        </div>
        `
    }

    document.getElementsByClassName("productlist")[0].insertAdjacentHTML ('beforeend',productList)
    

}

populateList()







