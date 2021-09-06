import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './styles.css';

const rawPaths = {};
function importAll(r) {
  r.keys().forEach((key) => (rawPaths[key] = r(key)));
}
importAll(require.context('./photos', false, /\.(JPG|jpe?g)$/));
const images = Object.entries(rawPaths).map(module => module[1].default);

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