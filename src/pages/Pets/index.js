import React from 'react';
import './styles.css';

const rawPaths = {};
function importAll(r) {
  r.keys().forEach((key) => (rawPaths[key] = r(key)));
}
importAll(require.context('./photos', false, /\.(JPG|jpe?g)$/));
const images = Object.entries(rawPaths).map(module => module[1].default);

const bgColours = [
  'rgba(67, 100, 157, 0.9)',
  'rgba(146 , 191, 139, 0.9)',
  'rgba(234, 197, 80, 0.9)',
  'rgba(228, 114, 96, 0.9)',
  'rgba(213, 113, 195, 0.9)',
  'rgba(71, 137, 177, 0.9)'
];

const getRandom = (min, max) => {
  return Math.floor((Math.random() * (max - min) + min));
}

let timeout;

export const RandomPetPhotoFrame = props => {
  const [imageIndex, setImageIndex] = React.useState(getRandom(0, images.length - 1))

  const randomizeImage = React.useCallback(() => {
    setImageIndex(getRandom(0, images.length - 1));
    timeout = setTimeout(randomizeImage, getRandom(2000, 10000))
  }, []);

  React.useEffect(() => {
    timeout = setTimeout(randomizeImage, getRandom(2000, 10000))
    return () => clearTimeout(timeout);
  }, [randomizeImage]);

  return (
    <div className="photos-container">
      <img 
        src={images[imageIndex]} 
        alt="pet"
      />
    </div>
  );
}

const Pets = () => {
  const [bgColour] = React.useState(bgColours[getRandom(0, bgColours.length - 1)]);

  return (
    <div 
      id="pets" 
      style={{ background: bgColour }}
    >
      <div id="grid">
        <RandomPetPhotoFrame />
        <RandomPetPhotoFrame />
        <RandomPetPhotoFrame />
        <RandomPetPhotoFrame />
        <RandomPetPhotoFrame />
        <RandomPetPhotoFrame />
      </div>
    </div>
  )
}

export default React.memo(Pets);