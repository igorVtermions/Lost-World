//nav
const nav = document.querySelector('.nav')
const openNav = document.querySelector('#opennav')
const closeNav = document.querySelector('#closenav')

function openNavBtn(){
    nav.style.display = 'flex'
}

openNav.addEventListener('click', openNavBtn)

function closenNavBtn(){
    nav.style.display = 'none'
}

closeNav.addEventListener('click', closenNavBtn)

//container

const modal = document.querySelector('.modal')
const openModal = document.querySelector('.btnregister')
const closeModal = document.querySelector('#closemodal')

function openModalBtn(){
    modal.style.display = 'flex'
}

openModal.addEventListener('click', openModalBtn)

function closeModalBtn(){
    modal.style.display = 'none'
}

closeModal.addEventListener('click', closeModalBtn)

