import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { removeSport, selectFilteredFavoriteSports } from './favoriteSportsSlice.js';
import FavoriteButton from '../../components/FavoriteButton.js';
import Sport from '../../components/Sport.js';
const unfavoriteIconUrl = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/unfavorite.svg';

export const FavoriteSports = () =>{
  const favoriteSports = useSelector(selectFilteredFavoriteSports);
  const dispatch = useDispatch();

  const onRemoveSportHandler = (sport) => {
    // Dispatch the action below.
    dispatch(removeSport(sport))
  };
  return (
    <div className='sports-container'>
      {favoriteSports.map(createSportComponent)}
    </div>
  );

  // Helper Function
  function createSportComponent(sport) {
    return (
      <Sport sport={sport} key={sport.id}>
        <FavoriteButton
          onClickHandler={() => onRemoveSportHandler(sport)}
          icon={unfavoriteIconUrl}
        >
          Remove Favorite
        </FavoriteButton>
      </Sport>
    )
  } 
};