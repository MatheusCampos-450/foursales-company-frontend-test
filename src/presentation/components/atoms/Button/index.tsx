import React from 'react';

import { type ButtonProps } from './types';

import { Button as ButtonStyled } from './styles';

function Button({ className, children, ...buttonProps }: ButtonProps) {
  return (
    <ButtonStyled className={className} {...buttonProps}>
      {children}
    </ButtonStyled>
  );
}

export default Button;
