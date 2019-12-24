import 'styled-components';
import { componentTheme } from './index';

declare module 'styled-components' {
  export type DefaultTheme = Readonly<typeof componentTheme>;
}
