import styled from 'styled-components';
import { Paragrapy1, TitleH5 } from '../../atoms/Typography';

export const UserDetailsSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  width: 100%;
  padding: 0 0 1.4rem;
  margin: 0 0 1.6rem;

  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.gray05};
`;

export const UserDetailsTitle = styled(TitleH5)`
  width: 100%;

  margin: 0 0 1.6rem 0;
  color: ${({ theme }) => theme.colors.gray80};
`;

export const UserDetailsParagraph = styled(Paragrapy1)`
  color: ${({ theme }) => theme.colors.blue};
`;
