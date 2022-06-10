/* global data */
var $car = document.querySelector('.car');
var entryId;

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
  $car.style.left = 0;
  $car.style.top = 0;
  data.x = 0;
  data.y = 0;
  $car.className = 'car ' + data.direction;
  clearInterval(entryId);
}

function startCar(event) {
  if (event.key === ' ' && data.start === false) {
    entryId = setInterval(moveCar, 16);
    data.start = true;
  } else if (event.key === ' ' && data.start === true) {
    clearInterval(entryId);
    data.start = false;
  }
}

function moveCar(event) {
  if (data.direction === 'east') {
    data.x += 10;
  } else if (data.direction === 'south') {
    data.y += 10;
  } else if (data.direction === 'west') {
    data.x -= 10;
  } else if (data.direction === 'north') {
    data.y -= 10;
  }
  $car.style.left = data.x + 'px';
  $car.style.top = data.y + 'px';
}

document.addEventListener('keydown', changeDirection);
document.addEventListener('DOMContentLoaded', DOMContentLoaded);
document.addEventListener('keydown', startCar);
