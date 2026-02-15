/* PAGE LOAD + LOADER */
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
    const loader = document.getElementById("loader");
    if(loader){
        loader.style.display = "none";
    }
});

/* SMOOTH PAGE TRANSITION */
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("a").forEach(link => {
        if(link.href && link.href.includes(".html")){
            link.addEventListener("click", function(e){
                e.preventDefault();
                document.body.classList.remove("loaded");
                setTimeout(()=>{
                    window.location = this.href;
                },400);
            });
        }
    });
});

/* FLOATING HEARTS */
function createHeart(){
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "🩷";
    heart.style.left = Math.random()*100+"vw";
    heart.style.animationDuration = (4+Math.random()*4)+"s";
    document.body.appendChild(heart);
    setTimeout(()=>heart.remove(),8000);
}
setInterval(createHeart,600);

/* PASSWORD */
function checkPassword(){
    const pass = document.getElementById("password").value;
    if(pass === "mommy"){
        window.location = "home.html";
    }else{
        document.getElementById("error").style.display="block";
    }
}

/* AUTOPLAY SONG AFTER TAP */
function playMusic(){
    const iframe = document.getElementById("music");
    if(iframe && !iframe.src.includes("autoplay")){
        iframe.src += "&autoplay=1";
    }
}