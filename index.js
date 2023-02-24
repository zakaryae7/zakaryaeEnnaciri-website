// INDEX NAME AND PAGE STARTING
function clicked(){
    var name = document.getElementById('name').value;
    var repo = document.getElementById('bla');
    var welcome = 'Welcome,';
    var display = `<span id="haie"></span>
    <p class='index-fun'>Please have fun!</p>
    <a href='/pages/home/home.html'><button class='index-start'>Less goo</button></a>`;
    repo.innerHTML = display;
    document.getElementById('haie').innerHTML = welcome + ' ' + name;
}
// Index animation Time Out fixed
setTimeout(()=>{
    var indexWelcome = document.getElementById('index-welcome');
    indexWelcome.style.visibility='visible';
},2100);

// HOME POP UP STARTING
function jusy(){
    document.getElementById('pop-up').style.display='none';
}
const pop = document.getElementById('pop-up');
setTimeout(()=>{
    pop.style.display = 'block';
},4000);