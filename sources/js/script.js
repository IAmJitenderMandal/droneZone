let burgerIcon = document.querySelector('header .logo-nav i');
console.log(burgerIcon);

burgerIcon.addEventListener("click",() => {
    let menu = document.querySelector('nav');
    menu.classList.toggle('mobile-menu');
    console.log(menu)
})




