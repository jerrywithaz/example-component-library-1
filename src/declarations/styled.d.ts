import 'styled-components'
import { Theme } from '../theme';
import { ConvertToThemeObject } from 'styled-theme-tokens';

declare module 'styled-components' {
  export interface DefaultTheme extends ConvertToThemeObject<Theme> {}
}