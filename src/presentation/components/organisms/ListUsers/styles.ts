import styled from 'styled-components';
import { TitleH2 } from '@components/atoms/Typography';
import Input from '@components/atoms/Input';

export const ListUsersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  width: 100%;
  padding: 2.4rem;
`;

export const TitleListUsers = styled(TitleH2)`
  width: 100%;

  margin: 0 0 1.6rem 0;
  color: ${({ theme }) => theme.colors.black};
`;

export const InputListUsers = styled(Input)`
  margin: 0 0 2.4rem 0;
`;
