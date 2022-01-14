    // Modal
var modal = document.querySelector('.modal'),
closeBtn = document.querySelector('.modal-close'),
openBtns = document.querySelectorAll('.js-buy-btn');

for (var i = 0; i < openBtns.length; i++) {
    openBtns[i].onclick = function () {
        modal.classList.add('js-show-modal')
    }
}

closeBtn.onclick = function () {
    modal.classList.remove('js-show-modal')
}
// End Modal

// Scroll
document.getElementById("to-home").onclick = function () {
    document.getElementById("slider").scrollIntoView({behavior: "smooth"})
}

document.getElementById("to-band").onclick = function () {
    document.getElementById("about").scrollIntoView({behavior: "smooth"})
}

document.getElementById("to-tour").onclick = function () {
    document.getElementById("tour").scrollIntoView({behavior: "smooth"})
}

document.getElementById("to-contact").onclick = function () {
    document.getElementById("contact").scrollIntoView({behavior: "smooth"})
}
// End Scroll   

// Automatic
var slides = document.querySelectorAll('.slide')
var index = 0
function toggleSlide () {
    slides[index].classList.add('show')
    if (index == 0) {
        slides[2].classList.remove('show')
    } else {
        slides[index - 1].classList.remove('show')
    }
    index++
    if (index === 3) {
        index = 0
    }
    console.log(index)
}
toggleSlide()
// toggleSlide()
// toggleSlide()
// toggleSlide()
// toggleSlide()
setInterval(toggleSlide, 4000)


