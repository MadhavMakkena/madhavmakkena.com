import React from 'react';
import RandomPetPhotoFrame from '../RandomPetPhotoFrame';
import './styles.css';

const PetsGrid = () => {
  return (
    <div id="pets" >
      <div id="pets-grid">
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

export default React.memo(PetsGrid);