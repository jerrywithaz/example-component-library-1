import typography from "./typography";
import borderRadius from "./borderRadius";
import colors from "./colors";
import spacing from "./spacing";
import shadows from "./shadows";
import zIndex from "./zIndex";
import { Theme } from "./theme.types";
import opacity from "./opacity";
import sizes from "./sizes";

const theme: Theme = {
    colors: colors,
    typography: typography,
    borderRadius: borderRadius,
    opacity: opacity,
    sizes: sizes,
    spacing: spacing,
    shadows: shadows,
    zIndex: zIndex
};

export default theme;