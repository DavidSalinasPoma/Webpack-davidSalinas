

import './styles/main.scss';

import imagen from './assets/img/hero.jpg';


function sumar(a, b) {
    return a + b;
}

const suma = sumar(2, 5);

console.log(suma);

const arr = [1, 2, 3],
    codeESNext = () => console.log(...arr);

codeESNext();

const sum = document.getElementById('app');
sum.innerHTML = suma;

// Insertando Imagem
const img = document.getElementById('imagen');
console.log(img);
// img.src = imagen;