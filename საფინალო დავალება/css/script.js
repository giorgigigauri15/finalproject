let mobileMenu = document.querySelector(".navigation");
let  burger = document.querySelector(".fa-bars")
let xmark = document.querySelector(".fa-xmark")

burger.addEventListener("click",() => {
    mobileMenu.classList.add("burger_menu")
    burger.style.display = "none";
    xmark.style.display = "block";
    }
)

xmark.addEventListener("click", () =>{
    mobileMenu.classList.remove("burger_menu")
    burger.style.display = "block";
    xmark.style.display = "none";
}

)