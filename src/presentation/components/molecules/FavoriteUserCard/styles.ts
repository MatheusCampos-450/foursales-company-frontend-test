import styled from 'styled-components';
import { Paragrapy2, TitleH4 } from '../../atoms/Typography';

export const FavoriteUserCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 1.6rem;
  margin: 0 0 2rem;

  border-radius: 0.8rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.gray05};

  box-shadow: 0 0.1rem 0.2rem 0 ${({ theme }) => `${theme.colors.black}01`};

  &:last-child {
    margin: 0;
  }
`;

export const FavoriteUserCardTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const FavoriteUserCardTitle = styled(TitleH4)`
  color: ${({ theme }) => theme.colors.black};

  line-height: 2.4rem;
`;

export const FavoriteUserCardParagrapy = styled(Paragrapy2)`
  color: ${({ theme }) => theme.colors.gray60};
`;

export const FavoriteUserCardButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: min-content;
  height: min-content;

  cursor: pointer;

  background: none;
  border: none;
  margin: 0;
  padding: 0;
`;
