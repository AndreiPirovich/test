
export const getCocktailComposition = (cocktail: any): { measure: string, ingredient: string }[] => {
  const cocktailComposition = [];
  for (let i = 1; i < 16; i++) {
    if (!!cocktail[`strMeasure${i}`] || cocktail[`strIngredient${i}`]) {
      cocktailComposition.push({
        measure: cocktail[`strMeasure${i}`] || '',
        ingredient: cocktail[`strIngredient${i}`] || '',
      });
    }
  }

  return cocktailComposition;
}
