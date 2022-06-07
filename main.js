const menu = document.querySelector('.menu')
const ul = document.querySelector('ul')
menu.addEventListener('click', () => {
    if( ul.style.height < '25rem' ) {
        ul.style.padding = '2rem'
        ul.style.height = '25rem'
    }else {
        ul.style.padding = '0rem'
        ul.style.height = '0rem'
    }
})