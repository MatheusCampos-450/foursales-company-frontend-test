import type { ButtonHTMLAttributes } from 'react';

export type ButtonStyledProps = {
  isActive?: boolean;
};

export type ButtonProps = {} & ButtonStyledProps &
  ButtonHTMLAttributes<HTMLButtonElement>;
