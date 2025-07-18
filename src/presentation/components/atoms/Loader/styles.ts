import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

export const SpinnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 2rem;
`;

export const Spinner = styled.div`
  width: 4.8rem;
  height: 4.8rem;
  border: 0.6rem solid #ccc;
  border-top: 0.6rem ${({ theme }) => theme.colors.blue}; // cor do destaque
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

export const LoadingText = styled.span`
  margin-top: 1rem;
  font-weight: 600;
  font-size: 1.6rem;
  color: #555;
`;
