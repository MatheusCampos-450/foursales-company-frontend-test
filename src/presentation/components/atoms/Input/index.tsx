import React, { useRef } from 'react';

import { type InputProps } from './types';

import { Input as InputStyled, InputContainer } from './styles';

function Input({ className, ...inputProps }: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  return (
    <InputContainer className={className} onClick={handleFocus}>
      <InputStyled ref={inputRef} {...inputProps} />
    </InputContainer>
  );
}

export default Input;
