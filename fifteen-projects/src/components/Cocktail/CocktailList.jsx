import React from 'react';
import { useGlobalContext } from '../../context';
import Header from '../Header';
import Item from './Item';
import Loading from './Loading';

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();
  console.log(cocktails);
  if (loading) {
    return <Loading />;
  }

  if (cocktails.length < 1) {
    return (
      <h2 className="section-title">
        No cocktails matched your search criteria
      </h2>
    );
  }

  return (
    <section className="section">
      <Header title="Cocktails" />
      <div className="cocktails-center">
        {cocktails.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default CocktailList;
