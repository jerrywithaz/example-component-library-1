import { ThemeVariant } from "./ThemeProvider.types";

export function theme(name: string, options: Record<string, string>) {
    return (variants: ThemeVariant): string => {
        const variant = variants[name];
        return options[variant];
    };
}