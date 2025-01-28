import 'styled-components';
import { theme } from './theme';

type Theme = typeof theme & {
  shadows: {
    [key: string]: string;
  };
};

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
