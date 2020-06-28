import { Typography } from './typography.types';

const typography: Typography = {
    fontFamily: {
        heading: `'localtapiola-sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`,
        text: `'localtapiola-sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`
    },
    fontWeight: {
        normal: 400,
        semiBold: 600,
        extraBold: 800
    },
    fontSize: {
        xSmall: {
            rem: "0.75rem",
            px: "12px"
        },
        small: {
            rem: "0.875rem",
            px: "14px"
        },
        medium: {
            rem: "1rem",
            px: "16px"
        },
        large: {
            rem: "1.25rem",
            px: "20px"
        },
        xLarge: {
            rem: "1.25rem",
            px: "24px"
        },
        xxLarge: {
            rem: "2.25rem",
            px: "36px"
        },
        xxxLarge: {
            rem: "3rem",
            px: "48px"
        },
        xxxxLarge: {
            rem: "4.5rem",
            px: "72px"
        },
    },
    lineHeight: {
        xSmall: "1.1",
        small: "1.25",
        medium: "1.5"
    }
};

export default typography;