import API from '../../api/api';
import {ICocktailsResponse} from "./cocktails.interface";

const endpoints = Object.freeze({
  getCocktails: (categoryCode: string) => `search.php?s=${categoryCode}`,
});

export default {
  getCocktailsByCategory(categoryCode: string): Promise<ICocktailsResponse> {
    return API.get(endpoints.getCocktails(categoryCode)).then(response => response.data);
  },
};
