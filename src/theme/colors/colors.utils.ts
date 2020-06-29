import { TRANSPARENCIES } from "./colors.constants";
import { Transparency } from "./colors.types";

export function createTransparencies(r: number, g: number, b: number): Record<Transparency, string> {
    return Object.keys(TRANSPARENCIES).reduce((transparencies, transparency) => {
        return {
            ...transparencies,
            [transparency]: `rgba(${r}, ${g}, ${b}, ${parseInt(transparency)/100})`
        };
    }, {} as Record<Transparency, string>);
};

export function createRGBAFactory(r: number, g: number, b: number) {
    return (a?: string) => {
        if (a) return `rgba(${r}, ${g}, ${b} , ${a})`;
        return `rgba(${r}, ${g}, ${b})`;
    }
}