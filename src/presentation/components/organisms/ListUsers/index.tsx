import React, { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '@/presentation/store/hooks';
import { fetchUsersRequest } from '@/presentation/store/users/userSlice';

import ListUserCard from '@components/molecules/ListUserCard';

import { ListUsersContainer, TitleListUsers, InputListUsers } from './styles';
import Loader from '../../atoms/Loader';

function ListUsers() {
  const [inputUserState, setInputUserState] = useState<string>('');

  const dispatch = useAppDispatch();

  const { data, loading, error } = useAppSelector((state) => state.users);

  const handleChangeInputUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value.trim();

    setInputUserState(value);
  };

  const usersFiltered = data.filter((user) =>
    user.name.toLowerCase().includes(inputUserState.toLowerCase()),
  );

  useEffect(() => {
    dispatch(fetchUsersRequest());
  }, [dispatch]);

  return (
    <ListUsersContainer>
      <TitleListUsers>Usuários</TitleListUsers>

      <InputListUsers
        onChange={handleChangeInputUser}
        value={inputUserState}
        placeholder="Pesquisar usuários"
      />

      {loading ? (
        <Loader />
      ) : typeof error === 'string' ? (
        <>{error}</>
      ) : (
        usersFiltered.map((user) => (
          <ListUserCard key={user.name} userProps={user} />
        ))
      )}
    </ListUsersContainer>
  );
}

export default ListUsers;
