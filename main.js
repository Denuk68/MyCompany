let menu = document.querySelector('#menu');
let x = document.querySelector('.topnav');
menu.addEventListener('click', function Adaptive() {
    if (x.className === 'topnav') {
        x.className += ' responsive'
    }
    else {
        x.className = 'topnav'
    }
})
