const bg = document.querySelector(".bg")
const text = document.querySelector(".loading-text");

let load = 0
let int =setInterval(blurring, 30)

function blurring() {
    load++
    if(load >99) clearInterval(int)

    text.innerText = `${load}%`
    text.style.opacity = map(load, 0, 100, 1, 0)
    bg.style.filter = `blur(${map(load, 0, 100, 30, 0)}px)`
}

function map(n, i_min, i_max, f_min, f_max) {
    return((n - i_min) * (f_max - f_min) / (i_max - i_min) + f_min)
}