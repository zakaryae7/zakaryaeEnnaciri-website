// NAVBAR COMPONENT START
var navbar = `
    <div class='navbar'>
    <img src="/assets/logos/whitelogo.png" class="navbar-logo">
    <ul>
        <a href='/pages/home/home.html'><li>Home</li>
        <a href='/pages/portfolio/portfolio.html'><li>Portfolio</li>
        <a href='/pages/links/links.html'><li>Links</li>
        <a href='/pages/aboutme/about.html'><li>About me</li>
    </ul>
    <a href='#' ><svg  viewBox="0 0 24 24" fill="none" class='menu-icon'><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 17H8M12 17H20M4 12H20M4 7H12M16 7H20" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></a>
</div> 
<div id='navbarresponse' style=' visibility: hidden;  color:white; position: absolute; background-color: black; top: 0;  width: 100%; height: 100%;>
<ul class='navbar-ul'>
        <a href='/pages/home/home.html'><li>Home</li>
        <a href='/pages/portfolio/portfolio.html'><li>Portfolio</li>
        <a href='/pages/links/links.html'><li>Links</li>
        <a href='/pages/aboutme/about.html'><li>About me</li>
    </ul>
</div>`;
document.getElementById('navbar').innerHTML = navbar;

function navbarResponse(){
    var navbarMenu = document.getElementById('navbarresponse')
    navbarMenu.style.visibility.visible;
}