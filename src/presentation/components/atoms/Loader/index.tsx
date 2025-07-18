import { LoadingText, Spinner, SpinnerWrapper } from './styles';
import type { LoaderProps } from './types';

export default function Loader({ text = 'Carregando...' }: LoaderProps) {
  return (
    <SpinnerWrapper>
      <Spinner />
      <LoadingText>{text}</LoadingText>
    </SpinnerWrapper>
  );
}
