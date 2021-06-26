import React from 'react';
import { Link } from 'react-router-dom';
import { RandomPetPhotoFrame } from '../Pets';
import './styles.css';

const Home = () => {
  const [hamburger, setHamburger] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setHamburger(false);
    }, 3000)
  }, [])

  const showHamburger = () => {
    setHamburger(true);
  }

  const hideHamburger = () => {
    setTimeout(() => setHamburger(false), 1000);
  }

  return (
    <div id="home">
      <div id="grid">
        <div 
          id="menu"
          onMouseEnter={showHamburger}
          onMouseLeave={hideHamburger}
          onTouchStart={showHamburger}
          onTouchEnd={hideHamburger}
        >
          <img 
            alt="menu" 
            id="doublem" 
            className={hamburger ? "invisible": ""}
            src="static/media/MM.svg" 
            width="90px" 
            height="auto" 
          />
          <img 
            alt="menu" 
            id="hamburger" 
            className={hamburger ? "" : "invisible"}
            src="static/media/Menu.svg" 
            width="90px" 
            height="auto"
          />
        </div>
        <Link to="/pets" className="link">
          <RandomPetPhotoFrame />
        </Link>
      </div>
      <div id="credit">
        <p>Designed by Madhav Makkena and <a href="https://caven.codes">Geoff Caven</a></p>
      </div>
    </div>
  );
}

export default Home;