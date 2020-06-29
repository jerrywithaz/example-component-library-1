import { Colors } from "./colors";
import { Typography } from "./typography";
import { BorderRadius } from "./borderRadius";
import { Spacing } from "./spacing";
import { Shadows } from "./shadows";
import { ZIndex } from "./zIndex";
import { Opacity } from "./opacity";
import { Sizes } from "./sizes";

export interface Theme {
    colors: Colors;
    typography: Typography;
    borderRadius: BorderRadius;
    opacity: Opacity;
    sizes: Sizes;
    spacing: Spacing;
    shadows: Shadows;
    zIndex: ZIndex;
}