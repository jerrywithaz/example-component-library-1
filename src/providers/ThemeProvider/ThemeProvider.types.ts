export type ThemeVariant = Record<string, string>;

export type ThemeSet<T = string> = (variants: ThemeVariant) => T;

export type ThemeProviderProps = {
    variants?: ThemeVariant;
};