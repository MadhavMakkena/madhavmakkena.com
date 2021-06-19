// TODO: random pet order
// TODO: resize images, only download when they appear
// TODO: 3x2 randomized side-by-side image squares
// TODO: responsive design
// TODO: react
// TODO: SEO

let active = 0;
let numPets = 0;
let numContainers = 0;

const bgColours = [
  'rgba(67, 100, 157, 0.9)',
  'rgba(146 , 191, 139, 0.9)',
  'rgba(234, 197, 80, 0.9)',
  'rgba(228, 114, 96, 0.9)',
  'rgba(213, 113, 195, 0.9)',
  'rgba(71, 137, 177, 0.9)'
];

function getRandom(min, max) {
  return Math.floor((Math.random() * (max - min) + min));
}

window.addEventListener('load', () => {
  document.querySelector('body').style = `background-color: ${bgColours[getRandom(0, bgColours.length - 1)]}`;
});

function makePetActive(number, id) {
  const oldActive = document.querySelector(`#photo-${id} .active`);
  oldActive.classList.remove('active');
  setTimeout(() => {
    const elem = document.getElementById(`pet-${number}-${id}`);
    elem.classList.add('active');
  }, getRandom(0.5, 1) * 1000);
}

function cyclePets(id) {
  makePetActive(getRandom(0, numPets - 1), id);
}

fetch('/photos.txt')
  .then(response => response.text())
  .then(pets => {
    const petsList = pets.split('\n');
    petsList.pop();
    numPets = petsList.length;  
    const containers = document.getElementsByClassName('photos-container');
    numContainers = containers.length;
    petsList.forEach((pet, index) => {
      for (let i = 0; i < numContainers; i++) {
        const img = document.createElement('img');
        img.src = `/photos/${pet}`;
        img.id = `pet-${index}-${i}`;
        if (index === 0) img.className = 'active';
        containers[i].appendChild(img);
      }
    });
    
    for (let i = 0; i < numContainers; i++) {
      cyclePets(i);
      setInterval(() => cyclePets(i), getRandom(2000,10000));
    }
  });
