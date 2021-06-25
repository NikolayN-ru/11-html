(function () {
    const header = document.querySelector('.header')
    console.log(header)
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header-bc')
        } else {
            header.classList.remove('header-bc')
        }
    }
}())

const btn = document.querySelector('.mobile-menu')
const flag = document.querySelector('.mobile-first')
console.log(btn)
btn.onclick = () => {
    flag.classList.toggle('mobile-first-active')
}
