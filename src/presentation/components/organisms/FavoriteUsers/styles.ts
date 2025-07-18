import styled from 'styled-components';
import { Paragrapy1, TitleH2 } from '../../atoms/Typography';

export const FavoriteUsersContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  width: 100%;
  padding: 2.4rem;
`;

export const FavoriteUsersTitle = styled(TitleH2)`
  color: ${({ theme }) => theme.colors.black};

  margin: 0 0 2.4rem;
`;

export const FavoriteUsersParagrapy = styled(Paragrapy1)`
  color: ${({ theme }) => theme.colors.blue};

  margin: 1.6rem 0 0;
`;
