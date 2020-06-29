import 'styled-components'
import { Theme } from '../theme';

type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

type ConvertToThemeObject<V, O extends object> = {
  [K in keyof O]: O[K] extends Function ? ReturnType<O[K]> : O[K] extends object ? ConvertToThemeObject<V, O[K]> : V
}

declare module 'styled-components' {
  export interface DefaultTheme extends ConvertToThemeObject<string, Theme> {}
}