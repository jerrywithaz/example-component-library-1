export type ThemeVariant = Record<string, string>;

export type ThemeSet = (variants: ThemeVariant) => string;

export type ThemeProviderProps = {
    variants?: ThemeVariant;
};