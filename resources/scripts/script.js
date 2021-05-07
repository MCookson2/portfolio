let darkMode = false;

const darkModeButton = document.getElementById('darkMode')

darkModeButton.addEventListener('click', function(){
    if (darkMode === false) {
        darkMode = true;
        document.body.classList.add('darkMode');
    }
    else if (darkMode === true) {
        darkMode = false;
        document.body.classList.remove('darkMode');
    }
})