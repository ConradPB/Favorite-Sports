import { addSport } from '../favoriteSports/favoriteSportsSlice';
import { loadData } from './allSportsSlice.js'

import React, { useEffect } from 'react';
import FavoriteButton from "../../components/FavoriteButton";
import Sport from "../../components/Sport";

const favoriteIconURL = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/favorite.svg'

export const AllSports = (props) => {
  
  const { allSports, dispatch } = props;

  const onFirstRender = () => {
    dispatch(loadData());
  }
  useEffect(onFirstRender, [])
  
  const onAddSportHandler = (sport) => {
    dispatch(addSport(sport));
  };

  return (
    <div className='sports-container'>
      {allSports.map((sport) => (
        <Sport sport={sport} key={sport.id}>
          <FavoriteButton
            onClickHandler={() => onAddSportHandler(sport)}
            icon={favoriteIconURL}
          >
            Add to Favorites
          </FavoriteButton>
        </Sport>
      ))}
    </div>
  );
};


