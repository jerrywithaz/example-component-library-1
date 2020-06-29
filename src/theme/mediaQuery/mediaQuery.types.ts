export type MediaQueryKeys = "xxSmall" | "xSmall" | "small" | "medium" | "large" | "xLarge" | "xxLarge" | "xxxLarge";

export type MediaQuery = {
    /** XX-Small media query is used to target the smallest devices between 0-360px. Remember that in most cases the XX-Small media query is rarely needed when building websites mobile first. */
    xxSmall: () => any,
    /** X-Small media query is used to target smaller devices between 0-575px. Remember that in most cases the X-Small media query is rarely needed when building websites mobile first. */
    xSmall: () => any,
    /** Small media query is used to target devices from 576px and up. When working mobile first, this is your first breakpoint when the viewport width grows. */
    small: () => any,
    /** Medium media query is used to target portrait tablets from 768px and up. */
    medium: () => any,
    /** Large media query is used to target landscape tablets from 992px and up. */
    large: () => any,
    /** X-Large media query is used to target desktop devices from 1025px and up. */
    xLarge: () => any,
    /** XX-Large media query is used to target large desktop devices from 1220px and up. */
    xxLarge: () => any,
    /** XXX-Large media query is used to target very large desktop devices from 1700px and up. */
    xxxLarge: () => any,
};