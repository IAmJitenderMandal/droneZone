
let burgerIcon = document.querySelector('header .logo-nav i');
console.log(burgerIcon);

burgerIcon.addEventListener("click",() => {
    let menu = document.querySelector('nav');
    menu.classList.toggle('mobile-menu');
    console.log(menu)
})



let nav = document.querySelector('header div.logo-nav');

let offsetEl = document.querySelector('.ask-price');
console.log(offsetEl.offsetTop);

function scroling() {
    if (window.scrollY >= offsetEl.offsetTop) {
        nav.classList.add("offset-view");
    } else {
        nav.classList.remove("offset-view");
        nav.classList.add("logo-nav");
    }
}

window.addEventListener('scroll', scroling);



//mobile navigation
var menu = document.querySelector('header ul');
console.log(menu)
var bar = document.querySelector('.fa-bars');

console.log(bar)


bar.addEventListener("click", function (e) {
    menu.classList.toggle('mobile-nav');
})













