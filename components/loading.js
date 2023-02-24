var loading = `<img src="/assets/logos/Untitled-1.png" id="loading-compo">`;
var loadingCompo = document.getElementById('loading');
    loadingCompo.innerHTML = loading;

setTimeout(()=>{
    var loadingCompo = document.getElementById('loading');
    loadingCompo.style.visibility='hidden';
},1500);