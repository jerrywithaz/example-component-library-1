import 'styled-components'
import { Theme } from '../theme';

type Convert<V, O extends object> = {
  [K in keyof O]: O[K] extends object ? Convert<V, O[K]> : V
}

declare module 'styled-components' {
  export interface DefaultTheme extends Convert<string, Theme> {}
}