import styled from 'styled-components';

import Button from '@components/atoms/Button';
import { Paragrapy2, TitleH3 } from '@components/atoms/Typography';

export const CardContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;

  width: 100%;
  height: 9.8rem;
  padding: 1.6rem;
  margin: 0 0 2rem;

  border-radius: 0.8rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.gray05};

  box-shadow: 0 0.1rem 0.2rem 0 ${({ theme }) => `${theme.colors.black}01`};

  &:last-child {
    margin: 0;
  }
`;

export const CardTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;

  width: 100%;
  padding: 0 0.8rem 0 0;
`;

export const CardTitle = styled(TitleH3)`
  color: ${({ theme }) => theme.colors.black};
  margin: 0 0 0.4rem 0;

  width: 100%;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CardParagraph = styled(Paragrapy2)`
  line-height: 2rem;
  color: ${({ theme }) => theme.colors.gray50};

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CardButton = styled(Button)`
  font-size: 1.6rem;
  padding: 0.8rem 1.6rem;

  min-width: 12.5rem;
`;
