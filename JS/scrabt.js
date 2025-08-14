

///////////////////////////////////////////////////
let allproducts = document.querySelector(".products");

let products = [
    
    {
        id: 1,
        title: "Omega Speedmaster ",
        color: "Black × Gold",
        imageurl: "imges/c7.jpeg"
    },
    {
        id: 2,
        title: "Rolex Cosmograph  ",
        color: " Silver × Blac",
        imageurl: "imges/c2.jpeg"
    },
    {
        id: 3,
        title: "LIGE Classic Leather",
        color: " Gold × Brown",
        imageurl: "imges/c3.jpeg"
    },
    {
        id: 4,
        title: "Omega Speedmaster ",
        color: "Green × Black",
        imageurl: "imges/c5.jpeg"
    },
    {
        id: 5,
        title: "Nike Air Max",
        color: "Beige",
        imageurl: "imges/s1.jpg"
    },
    {
        id: 6,
        title: "Adidas Ultraboost",
        color: "White",
        imageurl: "imges/s5.jpg"
    },
    {
        id: 7,
        title: "Puma RS-X",
        color: "Gray",
        imageurl: "imges/s4.jpg"
    },
    {
        id: 8,
        title: "Converse Chuck ",
        color: "Black",
        imageurl: "imges/s3.jpg"
    },
    {
        id: 9,
        title: "Lamborghini Aventador",
        color: "Blue",
        imageurl: "imges/v1.jpg"
    },
    {
        id: 10,
        title: "Lamborghini Huracán",
        color: "Peach",
        imageurl: "imges/v2.jpg"
    },
    {
        id: 11,
        title: "Lamborghini Urus",
        color: "Blue",
        imageurl: "imges/v3.jpg"
    },
    {
        id: 12,
        title: "Lamborghini Gallard",
        color: "Mauve",
        imageurl: "imges/v4.jpg"
    },
];

function drowProduct() {
    let y = products.map(item => `
        <div class="col-lg-3 col-md-4 col-sm-6 col-12" id="kk">
            <div class="card h-100 shadow-sm product-card extra-padding-mobile">
                <img src="${item.imageurl}" class="card-img-top" alt="${item.title}" style="height: 170px; object-fit: cover;">
                <div class="card-body text-center">
                    <h6 class="card-title">${item.title}</h6>
                    <p class="card-text small">Stylish luxury with gold .</p>
                    <span class="d-block mb-2">Color: ${item.color}</span>
                    <button class="btn btn-primary btn-sm" onclick="addToCart(${item.id})">
                        Add To Cart
                    </button>
                    <i class="fa-solid fa-heart ms-2 "></i>
                </div>
            </div>
        </div>
    `).join("");

    allproducts.innerHTML = `<div class="row justify-content-center g-3">${y}</div>`;
}

drowProduct();

////////////////////////////////////////////

let veiwProductDiv = document.querySelector(".veiwProduct div")
let badge = document.querySelector(".badge")


let addeditem =localStorage.getItem('productIncart')? JSON.parse(localStorage.getItem('productIncart')): [];
if( addeditem){
    addeditem.map(item =>{
        veiwProductDiv.innerHTML +=  ` <p> ${item.title}</p>`
    })
    badge.style.display ="block"
    badge.innerHTML = addeditem.length
}

function addToCart(id){
let chooseItem = products.find((item) => item.id === id)
veiwProductDiv.innerHTML +=  ` <p> ${chooseItem.title}</p>`


addeditem = [...addeditem , chooseItem]


localStorage.setItem("productIncart" ,JSON.stringify(addeditem) )

    let veiwProductDivp = document.querySelectorAll(".veiwProduct div p")

badge.innerHTML = veiwProductDivp.length

badge.style.display = "block"


veiwProduct.style.display = "block"
}










let cart = document.querySelector(".cart")
let veiwProduct = document.querySelector(".veiwProduct")
cart.addEventListener('click' , ()=>{
    if( veiwProduct .innerHTML !=""){
        if(veiwProduct.style.display == "block"){
             veiwProduct.style.display = "none"
            
        }else{
            veiwProduct.style.display = "block"
      
        }
    }
})
