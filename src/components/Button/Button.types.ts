import { FunctionComponent } from "react";
import { ColorKey } from "../../theme/colors";

export type ButtonProps = {
    /** Custom color to be used for text, as a design token entered in camelCase or kebab-case. Example: "color-primary". */
    color?: Exclude<ColorKey, "black" | "white" | "gray" | "secondary">;
    ref?: React.Ref<HTMLButtonElement>;
    variant?: "outlined" | "filled" | "text"
} & Omit<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref">;

export type StyledButtonProps = ButtonProps & {
    color: Exclude<ButtonProps["color"], undefined>;
    variant: Exclude<ButtonProps["variant"], undefined>;
};

export type ButtonComponent = FunctionComponent<ButtonProps>;