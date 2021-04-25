// TODO: random pet order
// TODO: resize images, only download when they appear
// TODO: 3x2 randomized side-by-side image squares
// TODO: responsive design
// TODO: react
// TODO: SEO

let active = 0;
let numPets = 0;

function getRandom(min, max) {
  return Math.floor((Math.random() * (max - min) + min));
}

(function() {
  function makePetActive(number) {
    const oldActive = document.getElementsByClassName('active')[0];
    oldActive.classList.remove('active');
    setTimeout(() => {
      const elem = document.getElementById(`pet-${number}`);
      elem.classList.add('active');
    }, getRandom(0.5, 1) * 1000);
  }

  function cyclePets() {
    makePetActive(getRandom(0, numPets - 1));
    setTimeout(cyclePets, getRandom(3,6) * 1000)
  }

  fetch('/photos.txt')
    .then(response => response.text())
    .then(pets => {
      const petsList = pets.split('\n');
      petsList.pop();
      numPets = petsList.length;  
      const container = document.getElementsByClassName('photos-container')[0];
      petsList.forEach((pet, index) => {
        const img = document.createElement('img');
        img.src = `/photos/${pet}`;
        img.id = `pet-${index}`;
        if (index === 0) img.className = 'active';
        container.appendChild(img);
      });
      
      setTimeout(cyclePets, getRandom(3,6) * 1000);
    });
})();
