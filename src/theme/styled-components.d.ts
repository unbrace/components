import 'styled-components';
import { componentTheme } from './index';

type CustomTheme = typeof componentTheme;
declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends CustomTheme {}
}
