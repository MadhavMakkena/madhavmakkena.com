(() => {
  // src/index.js
  var active = 0;
  var pets = [
    "Charlotte",
    "Leo",
    "Lucky",
    "Peeper"
  ];
  function getRandomTime(min, max) {
    return (Math.random() * (max - min) + min) * 1e3;
  }
  (function() {
    function makePetActive(number) {
      const oldActive = document.getElementsByClassName("active")[0];
      oldActive.classList.remove("active");
      setTimeout(() => {
        const elem = document.getElementById(pets[number]);
        elem.classList.add("active");
      }, getRandomTime(0.5, 1));
    }
    function cyclePets() {
      if (active === 3)
        active = 0;
      else
        active++;
      makePetActive(active);
      setTimeout(cyclePets, getRandomTime(1, 5));
    }
    setTimeout(cyclePets, getRandomTime(1, 5));
  })();
})();
