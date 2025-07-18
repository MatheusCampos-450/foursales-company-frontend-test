import styled from 'styled-components';
import { Paragrapy1, TitleH1, TitleH2 } from '../../atoms/Typography';
import Button from '../../atoms/Button';

export const UserDetailsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  padding: 2.4rem;
`;

export const UserDetailsTitle = styled(TitleH2)`
  width: 100%;

  margin: 0 0 1.6rem 0;
  color: ${({ theme }) => theme.colors.black};
`;

export const UserDetailsHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 0 0 2.4rem;
`;

export const UserDetailsHeaderTitle = styled(TitleH1)`
  line-height: 3.2rem;

  color: ${({ theme }) => theme.colors.black};
`;

export const UserDetailsHeaderParagrapy = styled(Paragrapy1)`
  color: ${({ theme }) => theme.colors.gray60};
`;

export const UserDetailsButton = styled(Button)`
  width: 100%;
  height: 4.8rem;

  font-size: 1.6rem;
`;
