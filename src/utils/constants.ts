export enum CocktailCategory {
  margarita = 'margarita',
  mojito = 'mojito',
  a1 = 'a1',
  kir = 'kir',
}

export const SIDEBAR_OPTIONS = [
  { to: '/', label: 'Margarita' },
  { to: `cocktails/${CocktailCategory.mojito}`, label: 'Mojito' },
  { to: `cocktails/${CocktailCategory.a1}`, label: 'a1' },
  { to: `cocktails/${CocktailCategory.kir}`, label: 'kir' },
];
