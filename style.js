let click = document.getElementById("togle");
let menu = document.getElementById("menu")

click.addEventListener("click" , function(){
    if(menu.style.display === "none"){
        menu.style.display = "block"
    }else{
        menu.style.display = "none"
    }
}
)