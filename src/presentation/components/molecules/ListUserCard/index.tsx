import React from 'react';

import { useAppDispatch } from '@/presentation/store/hooks';
import { getUserDetails } from '@/presentation/store/users/userSlice';

import { type ListUserCardProps } from './types';

import {
  CardContainer,
  CardTextContainer,
  CardParagraph,
  CardTitle,
  CardButton,
} from './styles';

function ListUserCard({
  userProps,
  className,
  ...divProps
}: ListUserCardProps) {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(getUserDetails(userProps));
  };

  return (
    <CardContainer className={className} {...divProps}>
      <CardTextContainer>
        <CardTitle>{userProps.name}</CardTitle>

        <CardParagraph>{userProps.phone}</CardParagraph>

        <CardParagraph>{userProps.email}</CardParagraph>
      </CardTextContainer>

      <CardButton type="button" onClick={handleClick}>
        Ver detalhes
      </CardButton>
    </CardContainer>
  );
}

export default ListUserCard;
