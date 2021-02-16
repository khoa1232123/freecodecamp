import React from 'react';
import { useGlobalContext } from '../../context';

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef('');

  const searchCocktail = () => {
    console.log(searchValue);
    setSearchTerm(searchValue.current.value);
  };

  return (
    <section className="section search">
      <form className="search-form">
        <div className="form-control" style={{ height: 'auto', border: 0 }}>
          <label htmlFor="name">Search your favorite cocktail</label>
          <input
            type="text"
            id="name"
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
