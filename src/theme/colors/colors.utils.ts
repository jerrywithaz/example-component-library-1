export function createRGBAFactory(r: number, g: number, b: number) {
    return (a?: string) => {
        if (a) return `rgba(${r}, ${g}, ${b} , ${a})`;
        return `rgba(${r}, ${g}, ${b})`;
    }
}