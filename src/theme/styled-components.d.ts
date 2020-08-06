import 'styled-components';
import { ComponentTheme } from './index';

type CustomTheme = ComponentTheme;
declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends CustomTheme {}
}
