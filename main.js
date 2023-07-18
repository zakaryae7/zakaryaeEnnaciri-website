// Variables 
var loadingaz = document.getElementById("ezz");
const submit = document.getElementById("submit");
const name = document.getElementById("name");
const username = document.getElementById("username");
const phone = document.getElementById("phonenumber");
const password = document.getElementById("password");
const loginPass = document.getElementById("loginpassword");
const loginName = document.getElementById("loginname");

// Local Storage items when sign up (backend.js haha)
function local(){
    localStorage.setItem("name",""+name.value+"");
    localStorage.setItem("username",""+username.value+"");
    localStorage.setItem("password",""+password.value+"");
    localStorage.setItem("phone",""+phone.value+"");
    localStorage.setItem('login','0')
}

// Match login values with sign up values if matched go home page if not display error message
function match(){
    if(loginName.value == localStorage.getItem("name") && loginPass.value == localStorage.getItem("password")){
        window.location  = '/src/pages/home.html'
        localStorage.setItem("login","1")
    }else{
        error.innerHTML = "!! Username or Password invalid";
    }
}


// When loged In go to Home page directly 
function signed(){
    if(localStorage.getItem("login") == "0"){
        window.location = '/src/pages/login.html'
    }
    if(localStorage.getItem("login") == "1"){
        window.location = '/src/pages/home.html'
    }
}
// Loading page animation
function loadinga(){
    loadingaz.style.display = "none";
}


var countDownDate = new Date("Jul 31, 2023 9:00:00").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000*60*60*24));
    var hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
    var minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
    document.getElementById("date").innerHTML = days + 'd ' + hours + "h "+ minutes + 'm';
},1000);