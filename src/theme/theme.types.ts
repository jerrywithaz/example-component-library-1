import { Colors } from "./colors";
import { Typography } from "./typography";
import { BorderRadius } from "./borderRadius";
import { Spacing } from "./spacing";
import { Shadows } from "./shadows";
import { ZIndex } from "./zIndex";
import { Opacity } from "./opacity";
import { Sizes } from "./sizes";
import { Transitions } from "./transitions";
import { MediaQuery } from "./mediaQuery";

export interface Theme {
    colors: Colors;
    typography: Typography;
    borderRadius: BorderRadius;
    opacity: Opacity;
    mediaQuery: MediaQuery,
    sizes: Sizes;
    spacing: Spacing;
    shadows: Shadows;
    transitions: Transitions;
    zIndex: ZIndex;
}