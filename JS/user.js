let links = document.getElementById("links")
let userDate = document.getElementById("user-info")
let user = document.getElementById("user")

if(localStorage.getItem("username")){
    links.remove()
    userDate.style.display = "flex"
    user.innerHTML = localStorage.getItem("username")
user.style.textTransform = "capitalize"
   
}
let logOut = document.getElementById("LogOut")//.onclick = ()=>{
//     localStorage.clear()
//     window.location = "register.html"
// }
logOut.addEventListener("click" , ()=>{
    localStorage.clear()
    window.location = "register.html"
})