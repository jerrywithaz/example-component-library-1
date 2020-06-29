import { ThemeVariant } from "./ThemeProvider.types";
import deepMapObject from './../../utils/deepMapObject';
import { DefaultTheme } from "styled-components";

export function theme<T = string>(name: string, options: Record<string, T>) {
    return (variants: ThemeVariant): T => {
        const variant = variants[name];
        return options[variant];
    };
}

export function resolveTheme(theme: object, variants?: Record<string, any>): DefaultTheme {
    return deepMapObject<DefaultTheme>(theme, (value) => {
        if (typeof value === "function" && variants) {
            return value(variants);
        }
        return value;
    });
}