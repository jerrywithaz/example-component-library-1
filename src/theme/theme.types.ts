import { Colors } from "./colors";
import { Typography } from "./typography";
import { Shapes } from "./shapes";
import { Spacing } from "./spacing";

export interface Theme {
    colors: Colors;
    typography: Typography;
    shapes: Shapes;
    spacing: Spacing
}