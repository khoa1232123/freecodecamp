import React from 'react';
import { CocktailList, CTSearchForm } from '../../components';
import './styles.scss';

const CocktailPage = () => {
  return (
    <main>
      <CTSearchForm />
      <CocktailList />
    </main>
  );
};

export default CocktailPage;
