import { ThemeSet } from 'providers/ThemeProvider';

export type Shade = 100 | 200 | 300 | 400 | 500 | 600 | 700;

export type Transparency = 8 | 16 | 24 | 32 | 48 | 64 | 80 | 90;

export type ColorKey = "primary" | "secondary" | "white" | "danger" | "warning" | "success" | "gray"; // | "black" ;

export type Colors = {
    primary: {
        /** Dark version of primary color that is accessible with white. Most commonly used to indicate hover and active states of an item with primary blue background. */
        dark: ThemeSet;
        /** Primary digital color that is accessible with white. Used as primary button background color, selected state background color, and as link text color. */
        base: ThemeSet;
        /** Light color that is 20% tint of the primary red. Accessible when secondary color is used as the text color. */
        light: ThemeSet;
        /** Light color that is 10% tint of the primary color. Accessible when secondary color is used as the text color. */
        lighter: ThemeSet;
        /** Light color that is 5% tint of the primary color. Accessible when secondary color is used as the text color. Commonly used to indicate a hover state of item with white background. */
        lightest: ThemeSet;
    },
    secondary: {
        /** Secondary color that is accessible with light, lighter and lightest primary color. Used as the body text color. */
        base: ThemeSet;
    },
    danger: {
        /** Danger red that is accessible with white. Only used in special cases like form validation and messaging. */
        base: ThemeSet;
    },
    warning: {
        /** Warning orange (non-accessible) is only used in special cases like form validation and messaging. */
        base: ThemeSet;
    },
    success: {
        /** Success green that is accessible with white. Only used in special cases like form validation and messaging. */
        base: ThemeSet;
    },
    white: {
        /** White is used as the primary page background color and primary container background color. */
        base: ThemeSet;
    },
    gray: {
        /** Dark gray that is accessible with white. Most commonly used as selected tab button background color. */
        darker: ThemeSet;
        /** Dark gray that is accessible with white. Most commonly used to indicate inactive interface state. This color should also be used for borders that need to pass WCAG Level AA non-text contrast requirements. */
        dark: ThemeSet;
        /** Gray that is accessible with secondary color. For consistency, we use this common grayscale palette throughout the interface. */
        base: ThemeSet;
        /** Light gray that is accessible with secondary black. For consistency, we use this common grayscale palette throughout the interface. */
        light: ThemeSet;
        /** Light gray that is accessible with secondary black. For consistency, we use this common grayscale palette throughout the interface. */
        lighter: ThemeSet;
        /** White is used as the primary page background color and primary container background color. */
        lightest: ThemeSet;
    },
};