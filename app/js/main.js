console.log('main.js is loaded...')

// DropDown Menu Animation
const menu = document.querySelectorAll('div.best-section__dropdown-single')

menu.forEach((el) => {
    el.addEventListener('click', () => {
        if (el.classList.contains('hidden-list')) {
            el.classList.remove('hidden-list')
        } else {
            el.classList.add('hidden-list')
        }
    })
})