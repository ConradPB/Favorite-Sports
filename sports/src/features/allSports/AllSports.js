
import React, { useEffect } from 'react';
// Implement the import statements below.
import { useSelector } from '@reduxjs/toolkit';
import { loadData, selectFilteredAllSports } from './allSportsSlice';
import { addSport } from '../favoriteSports/favoriteSportsSlice';
import FavoriteButton from "../../components/FavoriteButton";
import Recipe from "../../components/Sport";
const favoriteIconURL = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/favorite.svg';

export const AllSports = () => {
  
  const allSports = useSelector(selectFilteredAllSports)
  
  const onFirstRender = () => {
  
  }
  useEffect(onFirstRender, []);

  const onAddSportHandler = (sport) => {
   
  };

}