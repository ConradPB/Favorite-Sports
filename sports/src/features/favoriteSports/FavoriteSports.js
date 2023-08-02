import React from 'react';
import FavoriteButton from '../../components/FavoriteButton';
import Sport from '../../components/Sport';
import { removeSport } from '../favoriteSports/favoriteSportsSlice'
const unfavoriteIconUrl = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/unfavorite.svg'

export const FavoriteSports = (props) =>{
    // Extracting dispatch and favoriteSports from props.
  const { favoriteSports, dispatch } = props;
  
  
  const onRemoveSportHandler = (sport) => {
    // Dispatching a removeSport() action.
    dispatch(removeSport(sport))

  };

  return (
    <div id='favorite-sports' className='sports-container'>
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