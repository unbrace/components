import "styled-components";
import { componentTheme } from "./index";

declare module "styled-components" {
  export interface DefaultTheme extends Readonly<typeof componentTheme> {}
}
