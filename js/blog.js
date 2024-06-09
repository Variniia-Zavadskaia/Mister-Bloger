'use strict'

var elBackdrop = document.querySelector('.backdrop')
var elModal = document.querySelector('.card-modal')

function showDialog() {
    elBackdrop.style.opacity = 1
    elBackdrop.style.zIndex = 1
    elModal.style.opacity = 1
    // elModal.style.zIndex = 2
    elModal.show()
}

function closeDialog() {
    elBackdrop.style.opacity = 0
    // elBackdrop.style.top = null
    elBackdrop.style.zIndex = -1
    
    elModal.style.opacity = 0
    // elModal.style.zIndex = -1
    elModal.close();
}


function toggleMenu() {
    document.body.classList.toggle('menu-open')
}