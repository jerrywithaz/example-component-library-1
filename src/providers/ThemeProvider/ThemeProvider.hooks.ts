import { ThemeVariant } from "./ThemeProvider.types";

export function theme<T = string>(name: string, options: Record<string, any>) {
    return (variants: ThemeVariant): T => {
        const variant = variants[name];
        return options[variant];
    };
}