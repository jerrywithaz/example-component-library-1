import { ThemeVariant, ThemeToken } from "./ThemeProvider.types";
import deepMapObject from './../../utils/deepMapObject';
import { DefaultTheme } from "styled-components";

/**
 * Defines a variable design token that can change depending on theme variation.
 * Returns a factory function that will be executed
 * when the theme is created a runtime. The returned function
 * will resolve to the current variant value of a particular variant.
 * @param name The name of the variant such as `mode`
 * @param values The available variant values such as `{ light: "#ffffff", dark: "#000000" }`.
 */
export function token<T = string>(name: string, values: Record<string, T>): ThemeToken<T> {
    return (variants: ThemeVariant): T => {
        const variant = variants[name];
        return values[variant];
    };
}

/**
 * Resolves all of the `ThemeToken` functions and creates the usable theme object
 * that will be passed into the styled-components provider.
 * @param theme The theme to resolve.
 * @param variants The theme variants such as `{ mode: "light" }` or `{ mode: "dark" }`
 */
export function resolveTheme(theme: object, variants?: Record<string, any>): DefaultTheme {
    return deepMapObject<DefaultTheme>(theme, (value) => {
        if (typeof value === "function" && variants) {
            return value(variants);
        }
        return value;
    });
}