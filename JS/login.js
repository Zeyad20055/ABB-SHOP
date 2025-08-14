let username = document.getElementById("username")
let password = document.getElementById("password")
let loginBtn = document.getElementById("sign_in")


let getUserName = localStorage.getItem("username")
let getPassword = localStorage.getItem("password")

loginBtn.addEventListener( "click" , (e) =>{
    e.preventDefault()
    if(username.value == "" || password.value == "") {
       

          Swal.fire({
            title: "The Internet?",
            text: "Please Enter all fields",
            icon: "question"
        });
       }else{
 if( getUserName.trim() === username.value.trim() && getPassword === password.value){
        setTimeout(() => {
            window.location.href = "index.html"
        }, 1000);
 } else{
   
   Swal.fire({
            title: "The Internet?",
            text: "username or password is wrong",
            icon: "question"
        });
 }
     
       }
})

let show = document.getElementById("show")

show.addEventListener('click' , ()=>{
    password.type = show.checked ? "text" : "password"
})
