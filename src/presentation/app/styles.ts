import styled from 'styled-components';

export const AppContainerWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  width: 100%;
  max-width: 192rem;
`;
