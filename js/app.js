const menuIcon = document.querySelector('#menuIcon'),
    menu = document.querySelector('#menu');

menuIcon.addEventListener('click', (e) => {

    // switch styles menu
    menu.classList.toggle('active');
    document.body.classList.toggle('opacity');
    // switch icon style
const currentSource = e.target.getAttribute('src');

if( currentSource == 'img/iconov1.png') {
    e.target.setAttribute('src', 'img/iconov2.png');

}else {
        e.target.setAttribute('src', 'img/iconov1.png');
    }

});