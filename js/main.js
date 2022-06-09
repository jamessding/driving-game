/* global data */
var $car = document.querySelector('.car');

function changeDirection(event) {
  if (event.key === 'ArrowUp') {
    data.direction = 'north';
    $car.className = 'car north';
  } else if (event.key === 'ArrowRight') {
    data.direction = 'east';
    $car.className = 'car';
  } else if (event.key === 'ArrowDown') {
    data.direction = 'south';
    $car.className = 'car south';
  } else if (event.key === 'ArrowLeft') {
    data.direction = 'west';
    $car.className = 'car west';
  }
}

function DOMContentLoaded(event) {
  $car.className = 'car ' + data.direction;
}

document.addEventListener('keydown', changeDirection);
document.addEventListener('DOMContentLoaded', DOMContentLoaded);
