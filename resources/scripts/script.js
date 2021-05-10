let darkMode = false;

const darkModeButton = document.getElementById('darkMode');
const defaultBackground = document.querySelectorAll('.backgroundColour')
const selectGrid = document.querySelectorAll('.selectorClass');

darkModeButton.addEventListener('click', function(){
    if (darkMode === false) {
        darkMode = true;
        document.body.classList.add('darkMode')
        for (let i = 0; i < defaultBackground.length; i++) {
            defaultBackground[i].classList.remove('backgroundColour');
        }
        for (let i = 0; i < selectGrid.length; i++) {
            if (i === selectGrid.length - 1) {
                return
            } else {
                selectGrid[i].classList.add('darkMode')
            }
        }
    }
    else if (darkMode === true) {
        darkMode = false;
        document.body.classList.remove('darkMode');
        for (let i = 0; i < defaultBackground.length; i++) {
            defaultBackground[i].classList.add('backgroundColour');
        }
        for (let i = 0; i < selectGrid.length; i++) {
            if (i === selectGrid.length - 1) {
                return
            } else {
                selectGrid[i].classList.remove('darkMode');
            }
        }
    }
})

console.log(defaultBackground)