import { Colors } from "./colors";
import { Typography } from "./typography";
import { BorderRadius } from "./borderRadius";
import { Spacing } from "./spacing";
import { Shadows } from "./shadows";
import { ZIndex } from "./zIndex";

export interface Theme {
    colors: Colors;
    typography: Typography;
    borderRadius: BorderRadius;
    spacing: Spacing;
    shadows: Shadows;
    zIndex: ZIndex;
}