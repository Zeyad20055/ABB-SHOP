let username = document.getElementById("username")
let email = document.getElementById("email")
let password = document.getElementById("password")
let registerBtn = document.getElementById("sign_up")

registerBtn.addEventListener("click" , (e) =>{
     e.preventDefault() // يمنع السلوك الافتراضي

     if(username.value == "" || email.value == "" || password.value == "") {
        Swal.fire({
            title: "The Internet?",
            text: "Please Enter all fields",
            icon: "question"
        });
     } else if(password.value.length < 8) {
        Swal.fire({
            title: "Weak Password",
            text: "Password must be at least 8 characters",
            icon: "error"
        });
     } else {
        localStorage.setItem("username" , username.value)
        localStorage.setItem("email" , email.value)
        localStorage.setItem("password" , password.value)

        setTimeout(() => {
            window.location.href = "login.html"
        }, 1000);
     }
})

let show = document.getElementById("show")
show.addEventListener('click' , ()=>{
    password.type = show.checked ? "text" : "password"
})
