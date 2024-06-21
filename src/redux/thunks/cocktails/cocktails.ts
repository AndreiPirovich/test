import {createAsyncThunk} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import CocktailsApi from "../../../services/cocktails/cocktails.api";
import {GetCocktailsByCategoryPayload} from "./@types";

interface ValidationErrors {
  errorMessage: string
  field_errors: Record<string, string>
}

export const getCocktailsByCategoryAsync = createAsyncThunk<GetCocktailsByCategoryPayload, string, {rejectValue: ValidationErrors}>(
  'cocktails/getCocktailsByCategory',
  async (category, { rejectWithValue }) => {
    try {
      const response = await CocktailsApi.getCocktailsByCategory(category);
      return { category, drinks: response.drinks };
    } catch (err) {
      // @ts-ignore
      let error: AxiosError<ValidationErrors> = err;
      if (!error.response) {
        throw err
      }
      return rejectWithValue(error.response.data)
    }
  }
);
