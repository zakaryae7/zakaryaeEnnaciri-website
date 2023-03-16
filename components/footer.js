var footer = ` <style>
.footer-main{
    display: flex;
    margin: 1rem 2rem;
    border-top: 1px solid rgb(255, 255, 255, 0.2);
    padding-top: 1rem;
    align-items: center;
}
.footer-logo{
    height: 35px;
    margin-right: 1rem;
    cursor: pointer;
    transition: 0.3s;
}
.footer-logo:hover{
    transform: translateY(-5px);
    filter: brightness(0);
}
.footer-socials{
    margin-left: auto;
    display: flex;
    align-items: center;
    gap: 1rem;
}
.footer-social{
    transition: 0.3s;
}
.footer-social:hover{
    transform: translateY(-5px);
}
</style>
<div class='footer-main'>
<img src="/assets/logos/whitelogo.png" class="footer-logo">
<p style="color: white; user-select: none;">©2023 All rights reserved.</p>
<div class='footer-socials'>
<a href='ttps://www.instagram.com/redzk1ng_/' class='footer-social'>
<img src='/assets/social icons/instagram.svg'></a>
<a href='https://www.linkedin.com/in/zakaryae-ennaciri-88379b259/' class='footer-social'>
<img src='/assets/social icons/linkedin.svg'>
</a>
<a href='https://github.com/zakaryae7' class='footer-social'>
<svg width="40px" height="40px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>github</title> <rect width="0" height="0" fill="none"></rect> <path d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z"></path> </g></svg>
</a></div>
</div>`;

document.getElementById('footer').innerHTML = footer;