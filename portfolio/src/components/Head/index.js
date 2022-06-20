import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import Navigation from '../Navigation';


function Head(props) {
    const {
      categories = [],
      setCurrentCategory,
      contactSelected,
      currentCategory,
      setContactSelected,
    } = props;
  
    useEffect(() => {
      document.title = capitalizeFirstLetter(currentCategory.name);
    }, [currentCategory]);
  
    return (
      <header className="flex-row px-1">
        <h2>
          <a data-testid="link" href="/">
            Kaylee Jin
          </a>
        </h2>
        <Navigation
            categories={categories}
            setCurrentCategory={setCurrentCategory}
            currentCategory={currentCategory}
            contactSelected={contactSelected}
            setContactSelected={setContactSelected}
        ></Navigation>
      </header>
    );
  }
  
  export default Head;
  