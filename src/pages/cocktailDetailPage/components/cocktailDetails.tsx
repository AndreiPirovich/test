import React, {FC, useMemo} from 'react';
import {getCocktailComposition} from '../helpers';
import {ICocktail} from "../../../services";
import {LazyImage} from "../../../components";

type CocktailDetailsProps = {
  cocktail: ICocktail;
};

export const CocktailDetails: FC<CocktailDetailsProps> = React.memo(({ cocktail }) => {
  const { strDrink, strCategory, strAlcoholic, strGlass, strInstructions, strDrinkThumb, strImageSource } = cocktail;
  const drinkComposition = useMemo(() => getCocktailComposition(cocktail), [cocktail]);

  return (
    <div className="cocktail">
      <div className="row">
        <div className="column">
          <h1>{strDrink}</h1>
          <h5>{strCategory}</h5>
          <h5>{strAlcoholic}</h5>
          <h5>{strGlass}</h5>
          <div className="cocktail__instruction">
            <p className="bold">Instructions:</p>
            <p>{strInstructions}</p>
          </div>
          <div className="cocktail__ingredients">
            <p className="bold">List of ingredients:</p>
            <div>
              {drinkComposition.map(({ measure, ingredient }, index) =>
                <div key={index}>{`- ${measure} ${ingredient}`}</div>
              )}
            </div>
          </div>
        </div>
        <div className="column">
          <div className="cocktail__img-wrapper">
            <a href={strImageSource} target="_blank" rel="noreferrer">
              <LazyImage src={strDrinkThumb} alt={strDrink} className="cocktail__img" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});
