import styled, { css } from 'styled-components';

import type { ButtonStyledProps } from './types';

export const Button = styled.button<ButtonStyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 400;

  border: none;
  outline: none;
  border-radius: 0.8rem;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.black};

  cursor: pointer;

  transition: ease-in-out 200ms;

  &:hover {
    background: ${({ theme }) => theme.colors.blue};
  }

  ${({ isActive }) =>
    isActive &&
    css`
      font-weight: 500;
      color: ${({ theme }) => theme.colors.black};

      background: transparent;
      border: 0.2rem solid ${({ theme }) => theme.colors.black};

      &:hover {
        background: ${({ theme }) => theme.colors.gray05};
      }
    `}
`;
