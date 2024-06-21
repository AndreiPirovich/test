import React, {FC, useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {shallowEqual, useSelector} from "react-redux";
import {useAppDispatch} from "../../hooks/appDispatch";
import {cocktailsSelector} from "../../redux/slices/cocktails";
import {getCocktailsByCategoryAsync} from "../../redux/thunks/cocktails/cocktails";
import {CocktailDetails} from "./components/cocktailDetails";
import {CocktailCategory} from "../../utils/constants";
import {Spinner} from "../../components";
import './index.scss';

type cocktailsListPageProps = {};

export const CocktailsListPage: FC<cocktailsListPageProps> = () => {
  const dispatch = useAppDispatch();
  const { id = CocktailCategory.margarita } = useParams<"id">();
  const cocktails = useSelector(cocktailsSelector.getCocktails, shallowEqual);
  const isLoading = useSelector(cocktailsSelector.isLoading, shallowEqual);
  const navigate = useNavigate();

  useEffect(() => {
    if (Object.values(CocktailCategory).includes(id as CocktailCategory)) {
      if (!cocktails[id]) {
        dispatch(getCocktailsByCategoryAsync(id));
      }
    } else {
      navigate('/not-found');
    }

  }, [cocktails, dispatch, id, navigate]);

  return (
    <div className="cocktails">
      {isLoading ? <Spinner /> : <>
        {cocktails[id]?.map((item: any) => (
          <CocktailDetails cocktail={item} key={item.idDrink} />
        ))}</>}
    </div>
  );
};
