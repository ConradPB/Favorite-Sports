import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { removeSport, selectFilteredFavoriteSports } from './favoriteSportsSlice.js';
import FavoriteButton from "../../components/FavoriteButton.jsn";
import Sport from "../../components/Sport.js";
const unfavoriteIconUrl = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/unfavorite.svg';

export const FavoriteRecipes = () =>{
  const favoriteSports = useSelector(selectFilteredFavoriteSports);
  const dispatch = useDispatch();

  const onRemoveSportHandler = (sport) => {
    // Dispatch the action below.
    dispatch(removeSport(sport))
  };
}