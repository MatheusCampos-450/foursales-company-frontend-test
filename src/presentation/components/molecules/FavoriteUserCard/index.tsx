import React from 'react';

import { useAppDispatch } from '@/presentation/store/hooks';
import { getUserDetails } from '@/presentation/store/users/userSlice';
import { removeFavorite } from '@/presentation/store/favorites/favoriteSlice';

import type { FavoriteUserCardProps } from './types';

import HeartIcon from '@components/atoms/HeartIcon';

import {
  FavoriteUserCardButton,
  FavoriteUserCardContainer,
  FavoriteUserCardParagrapy,
  FavoriteUserCardTextContainer,
  FavoriteUserCardTitle,
} from './styles';

function FavoriteUserCard({ userProps }: FavoriteUserCardProps) {
  const dispatch = useAppDispatch();

  const handleSelectUser = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    e.preventDefault();
    e.stopPropagation();

    dispatch(getUserDetails(userProps));
  };

  const handleRemoveFavorite = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    e.stopPropagation();

    dispatch(removeFavorite(userProps.id));
  };

  return (
    <FavoriteUserCardContainer onClick={handleSelectUser}>
      <FavoriteUserCardTextContainer>
        <FavoriteUserCardTitle>{userProps.name}</FavoriteUserCardTitle>

        <FavoriteUserCardParagrapy>
          {userProps.username}
        </FavoriteUserCardParagrapy>
      </FavoriteUserCardTextContainer>

      <FavoriteUserCardButton type="button" onClick={handleRemoveFavorite}>
        <HeartIcon />
      </FavoriteUserCardButton>
    </FavoriteUserCardContainer>
  );
}

export default FavoriteUserCard;
