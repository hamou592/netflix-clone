if(window.innerWidth < 550){
    document.querySelector("nav .logo img").src ="photos/logo-2.png";
    document.querySelector("nav .logo img").style.width="50%";
}
else{
    document.querySelector("nav .logo img").src ="photos/logo.png";
    document.querySelector("nav .logo img").style.width="100%";
}
window.addEventListener("resize",() => {
    if(window.innerWidth < 550){
        document.querySelector("nav .logo img").src ="photos/logo-2.png";
        document.querySelector("nav .logo img").style.width="50%";
    }
    else{
        document.querySelector("nav .logo img").src ="photos/logo.png";
        document.querySelector("nav .logo img").style.width="100%";
    }
})
