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
// NAVBAR COMPONENT START
var navbar = `
<img src="/assets/logos/whitelogo.png" class="navbar-logo">
<ul>
    <a href='/pages/home/home.html'><li class="current-page">Home</li>
    <a href='/pages/skills/skills.html'><li>Skills</li>
    <a href='/pages/links/'><li>Links</li>
    <a href='/pages/aboutme/about.html'><li>About me</li>
</ul>`;
document.getElementById('navbar').innerHTML = navbar;
