import React from 'react';
import FavoriteButton from '../../components/FavoriteButton';
import Sport from '../../components/Sport';
const unfavoriteIconUrl = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/unfavorite.svg'
import { removeSport } from './favoriteSportsSlice.js'

export const FavoriteSports = (props) =>{
    // Extracting dispatch and favoriteSports from props.
  const { favoriteSports, dispatch } = props;
  
  
  const onRemoveSportHandler = (sport) => {
    // Dispatching a removeSport() action.
    dispatch(removeSport(sport))

  };