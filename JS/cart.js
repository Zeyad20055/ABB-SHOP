

let allproducts = document.querySelector(".products");
let getCart = localStorage.getItem("productIncart");
let cartBadge = document.querySelector(".badge"); 



if (getCart) {
    let item = JSON.parse(getCart);
    drawProduct(item);
}
 updateCartCount(); 

function drawProduct(products) {
    let y = products.map((item) => {
        return `

    <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-4" id="bb"> 
  
    <div class="card h-100 text-center product-item p-3"> 

        <img src="${item.imageurl}" alt="${item.title}" 
             class="card-img-top product-img" 
             style="height: 200px; object-fit: cover; width: 100%;"> 
        <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <p class="card-text small">This mobile made in China</p>
            <span class="d-block mb-2">Color: ${item.color}</span>
            <button class="btn btn-danger btn-sm" onclick="remove(this, ${item.id})">
                Remove From Cart
            </button>
        </div>
    </div>
</div>

        `;
    }).join("");

    allproducts.innerHTML = `
        <div class="container">
            <div class="row justify-content-center g-3">
                ${y}
            </div>
        </div>
    `;
}

let cartItems = JSON.parse(localStorage.getItem("productIncart")) || [];
if (cartItems.length > 0) {
    cartBadge.style.display = "block";
    cartBadge.textContent = cartItems.length;
} else {
    cartBadge.style.display = "none";
}



function remove(button, id) {
   
    let productItem = button.closest(".product-item");
    if (productItem) {
        productItem.remove();
    }


    let cartItems = JSON.parse(localStorage.getItem("productIncart")) || [];
    let updatedCart = cartItems.filter(item => item.id !== id);
    localStorage.setItem("productIncart", JSON.stringify(updatedCart));


    updateCartCount();
}

function updateCartCount() {
    let cartItems = JSON.parse(localStorage.getItem("productIncart")) || [];
    cartBadge.textContent = cartItems.length;
}


let clearCartBtn = document.getElementById("clearCart");

clearCartBtn.addEventListener("click", function() {
    
    localStorage.removeItem("productIncart");

  
    allproducts.innerHTML = "";

    
    updateCartCount();
});

