const imgs = document.querySelectorAll('.track img');
let idx = 0;

function cambiarImagen() {
    
    imgs[idx].classList.remove('active');
    
    
    idx = (idx + 1) % imgs.length;
    
    
    imgs[idx].classList.add('active');
}

setInterval(cambiarImagen, 3000);


