let hamburgerIcon = document.getElementsByClassName('hamburger-icon')[0];
hamburgerIcon.addEventListener('click', () => {
    let hamburgerMenu = document.getElementsByClassName('hamburger-menu')[0];
    if (hamburgerMenu.classList.contains('open')) {
        hamburgerMenu.classList.remove('open');
    } else {
        hamburgerMenu.classList.add('open');
    }
})

let optionTitle = document.getElementsByClassName('option-title');
for (let el of optionTitle) {
    console.log(el);
    el.addEventListener('click', () => {
        let parent = el.parentElement;
        if (parent.classList.contains('active')) {
            parent.classList.remove('active');
        } else {
            parent.classList.add('active');
        }
    })
}