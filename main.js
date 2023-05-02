import './style.css';
import { Dog } from './dog';
import confetti from 'canvas-confetti';

console.log('hello vite!')

const ariel = new Dog('ariel', 'border-collie', 18, 'male', ['black', 'white'], 'carrot', 'veg');

console.log(ariel);


ariel.sayHallo()

function fire(){
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
}

const fireBtn = document.getElementById('fire-btn');

fireBtn.addEventListener('click', fire);