import React from 'react';

import FavoriteUserCard from '../../molecules/FavoriteUserCard';
import { useAppSelector } from '@/presentation/store/hooks';

import {
  FavoriteUsersContainer,
  FavoriteUsersParagrapy,
  FavoriteUsersTitle,
} from './styles';

function FavoriteUsers() {
  const { data } = useAppSelector((state) => state.users);
  const { userIds } = useAppSelector((state) => state.favorites);

  const users = data.filter((user) => userIds.includes(user.id));

  return (
    <FavoriteUsersContainer>
      <FavoriteUsersTitle>Usuários Favoritos</FavoriteUsersTitle>

      {users.length === 0 ? (
        <FavoriteUsersParagrapy>
          Ainda não existe usuário favoritado. Favorite um usuário e ele
          aparecerá aqui!
        </FavoriteUsersParagrapy>
      ) : (
        users.map((user) => <FavoriteUserCard userProps={user} />)
      )}
    </FavoriteUsersContainer>
  );
}

export default FavoriteUsers;
