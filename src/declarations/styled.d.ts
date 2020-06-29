import 'styled-components'
import { Theme } from '../theme';
import { ConvertToThemeObject } from './../providers/ThemeProvider';

declare module 'styled-components' {
  export interface DefaultTheme extends ConvertToThemeObject<Theme> {}
}