import {createSlice} from "@reduxjs/toolkit";
import {getCocktailsByCategoryAsync} from "../thunks/cocktails/cocktails";
import {RootState} from "../store";
import {ICocktail} from "../../services";

export interface CocktailsState {
  cocktails: {
    [cocktailCategory:string]: ICocktail[];
  };
  isLoading: boolean;
}

const initialState: CocktailsState = {
  cocktails: {},
  isLoading: false,
}

export const cocktailsSlice = createSlice({
  name: 'cocktails',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getCocktailsByCategoryAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCocktailsByCategoryAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        if (!state.cocktails[action.payload.category]) {
          state.cocktails[action.payload.category] = action.payload.drinks;
        }
      })
      .addCase(getCocktailsByCategoryAsync.rejected, (state) => {
        state.isLoading = false;
      })
  },
})

export const cocktailsSelector = {
  getCocktails: (state: RootState) => state.cocktails.cocktails,
  isLoading: (state: RootState) => state.cocktails.isLoading,
};

export default cocktailsSlice.reducer
