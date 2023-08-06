
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addSport } from '../favoriteSports/favoriteSportsSlice';
import { loadData, selectFilteredAllSports } from './allSportsSlice';
import FavoriteButton from "../../components/FavoriteButton";
import Sport from "../../components/Sport";
const favoriteIconURL = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/favorite.svg';

export const AllSports = () => {
  const allSports = useSelector(selectFilteredAllSports);

  const dispatch = useDispatch()
  

  const onFirstRender = () => {
    dispatch(loadData());
  }
  useEffect(onFirstRender, []);
  
  const onAddSportHandler = (sport) => {
    dispatch(addSport(sport));
  };

}