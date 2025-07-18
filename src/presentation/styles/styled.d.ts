import 'styled-components';

import { type ThemeColorsProps } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ThemeColorsProps;
  }
}
