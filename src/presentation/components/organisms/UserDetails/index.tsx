import React, { Component } from 'react';
import { connect } from 'react-redux';

import { type RootState } from '@/presentation/store';
import {
  addFavorite,
  removeFavorite,
} from '@/presentation/store/favorites/favoriteSlice';

import UserDetailsSection from '@components/molecules/UserDetailsSection';

import {
  UserDetailsButton,
  UserDetailsContainer,
  UserDetailsHeader,
  UserDetailsHeaderParagrapy,
  UserDetailsHeaderTitle,
  UserDetailsTitle,
} from './styles';
import UserIcon from '../../atoms/UserIcon';

type DispatchProps = {
  addFavorite: typeof addFavorite;
  removeFavorite: typeof removeFavorite;
};

class UserDetail extends Component<RootState & DispatchProps> {
  handleToggleFavorite = () => {
    const { users, favorites, addFavorite, removeFavorite } = this.props;

    const user = users.userDetails;
    if (!user) return;

    const isFavorite = favorites.userIds.includes(user?.id);

    if (!isFavorite) {
      return addFavorite(user.id);
    }

    return removeFavorite(user.id);
  };

  render() {
    const { users, favorites } = this.props;

    const user = users.userDetails;

    if (!user)
      return (
        <UserDetailsContainer>
          <UserDetailsTitle>Detalhes do Usuário</UserDetailsTitle>

          <UserDetailsHeader>
            <UserIcon />

            <UserDetailsHeaderParagrapy>
              Nenhum usuário foi selecionado
            </UserDetailsHeaderParagrapy>
          </UserDetailsHeader>
        </UserDetailsContainer>
      );

    const isFavorite = favorites.userIds.includes(user?.id);

    return (
      <UserDetailsContainer>
        <UserDetailsTitle>Detalhes do Usuário</UserDetailsTitle>

        <UserDetailsHeader>
          <UserDetailsHeaderTitle>{user.name}</UserDetailsHeaderTitle>

          <UserDetailsHeaderParagrapy>
            {user.username}
          </UserDetailsHeaderParagrapy>
        </UserDetailsHeader>

        <UserDetailsSection name="Email" value={user.email} />
        <UserDetailsSection name="Telefone" value={user.phone} />
        <UserDetailsSection name="Website" value={user.website} />
        <UserDetailsSection
          name="Endereço"
          value={`${user.address.street} ${user.address.street} ${user.address.city} - ${user.address.zipcode}`}
        />
        <UserDetailsSection name="Companhia" value={user.company.name} />

        <UserDetailsButton
          isActive={isFavorite}
          onClick={this.handleToggleFavorite}
        >
          {isFavorite ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos'}
        </UserDetailsButton>
      </UserDetailsContainer>
    );
  }
}

const mapStateToProps = (state: RootState): RootState => ({
  users: state.users,
  favorites: state.favorites,
});

const mapDispatchToProps: DispatchProps = {
  addFavorite,
  removeFavorite,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDetail);
