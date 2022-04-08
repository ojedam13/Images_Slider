//poner todas las imagenes en un array

const imagenes = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6"
];

const botones = document.querySelectorAll('.btn');
const imgContainer = document.querySelector('.imagenContainer');
let contador = 0;

botones.forEach( (boton) => {
    boton.addEventListener('click', e => {
        if (boton.classList.contains('btn-left')) {
            contador--;
            if (contador < 0) {
                contador = imagenes.length - 1;
            }
            imgContainer.style.backgroundImage = `url('./img/${imagenes[contador]}.jpg')`;
        }

        if (boton.classList.contains('btn-right')) {
            contador++;
            if (contador > imagenes.length - 1) {
                contador = 0;
            }
            imgContainer.style.backgroundImage = `url('./img/${imagenes[contador]}.jpg')`;
        }
    });
});
