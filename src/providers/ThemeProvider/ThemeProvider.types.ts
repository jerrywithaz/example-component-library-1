export type ThemeVariant = Record<string, string>;

/**
 * A Theme Token is a function that will be resolved to the current variant
 * value whenever the theme is created at runtime.
 */
export type ThemeToken<T = string> = (variants: ThemeVariant) => T;

export type ThemeProviderProps = {
    /**
     * Theme variants are used to define the variations of your theme such as `dark` or `light`.
     * They are defined as key value pairs with the current variant value. So, if the current 
     * `mode` of your application is `dark` then your theme variants would be `{ mode: "dark" }`.
     */
    variants?: ThemeVariant;
};

/** Infers the return type of a function `T`. */
export type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

export type ConvertToThemeObject<O extends object> = {
  [K in keyof O]: O[K] extends Function ? ReturnType<O[K]> : O[K] extends object ? ConvertToThemeObject<O[K]> : O[K]
};