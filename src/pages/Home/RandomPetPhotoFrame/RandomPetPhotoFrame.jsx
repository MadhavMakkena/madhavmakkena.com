import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './styles.css';

const rawPaths = {};
function importAll(r) {
  r.keys().forEach((key) => (rawPaths[key] = r(key)));
}
importAll(require.context('./photos', false, /\.(JPE?G|jpe?g)$/));
const images = Object.entries(rawPaths).map(module => module[1].default);

const getRandom = (min, max) => {
  return Math.floor((Math.random() * (max - min) + min));
}

let timeout;

export const RandomPetPhotoFrame = props => {
  const [imageIndex, setImageIndex] = React.useState(getRandom(0, images.length - 1))

  const randomizeImage = React.useCallback(() => {
    let newImageIndex = getRandom(0, images.length - 1);
    while (newImageIndex === imageIndex) {
      newImageIndex = getRandom(0, images.length - 1);
    }
    setImageIndex(newImageIndex);
    timeout = setTimeout(randomizeImage, getRandom(2000, 10000))
  }, [imageIndex]);

  React.useEffect(() => {
    timeout = setTimeout(randomizeImage, getRandom(2000, 10000))
    return () => clearTimeout(timeout);
  }, [randomizeImage]);

  return (
    <div className={classnames('photos-container', { 'large': props.large })}>
      <img 
        src={images[imageIndex]} 
        alt="pet"
      />
    </div>
  );
}

RandomPetPhotoFrame.propTypes = {
  large: PropTypes.bool
};

export default RandomPetPhotoFrame;