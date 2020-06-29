export type ThemeVariant = Record<string, string>;

export type ThemeSet<T = string> = (variants: ThemeVariant) => T;

export type ThemeProviderProps = {
    variants?: ThemeVariant;
};

export type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

export type ConvertToThemeObject<O extends object> = {
  [K in keyof O]: O[K] extends Function ? ReturnType<O[K]> : O[K] extends object ? ConvertToThemeObject<O[K]> : O[K]
};