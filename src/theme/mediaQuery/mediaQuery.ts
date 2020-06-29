import { MediaQueryKeys, MediaQuery } from "./mediaQuery.types";
import { generateMedia } from 'styled-media-query';

const mediaQueries = generateMedia<Record<MediaQueryKeys, string>>({
    xxSmall: "22.5em",
    xSmall: "35.9375em",
    small: "36em",
    medium: "48em",
    large: "62em",
    xLarge: "64.0625em",
    xxLarge: "76.25em",
    xxxLarge: "106.25em",
});

const mediaQuery: MediaQuery = {
    xxSmall: () => mediaQueries.lessThan("xxSmall"),
    xSmall: () => mediaQueries.lessThan("xSmall"),
    small: () => mediaQueries.lessThan("small"),
    medium: () => mediaQueries.lessThan("medium"),
    large: () => mediaQueries.lessThan("large"),
    xLarge: () => mediaQueries.lessThan("xLarge"),
    xxLarge: () => mediaQueries.lessThan("xxLarge"),
    xxxLarge: () => mediaQueries.lessThan("xxxLarge"),
};

export default mediaQuery;