import {ICocktail} from "../../../services";

export type GetCocktailsByCategoryPayload = {
  category: string;
  drinks: ICocktail[];
};
