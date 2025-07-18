import React, { Component } from 'react';
import type { UserDetailsSectionProps } from './types';
import {
  UserDetailsParagraph,
  UserDetailsSectionContainer,
  UserDetailsTitle,
} from './styles';

export class UserDetailsSection extends Component<UserDetailsSectionProps> {
  render() {
    const { name, value } = this.props;

    return (
      <UserDetailsSectionContainer>
        <UserDetailsTitle>{name}</UserDetailsTitle>

        <UserDetailsParagraph>{value}</UserDetailsParagraph>
      </UserDetailsSectionContainer>
    );
  }
}

export default UserDetailsSection;
