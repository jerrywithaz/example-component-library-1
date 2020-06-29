import { FunctionComponent } from "react";
import { ColorKey } from "../../theme/colors";

export type HTMLButtonElementProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export type ButtonProps = {
    /** Custom color to be used for text */
    color?: Exclude<ColorKey, "black" | "white" | "gray" | "secondary" | "warning">;
    ref?: React.Ref<HTMLButtonElement>;
    variant?: "default" | "filled" | "text"
} & Omit<HTMLButtonElementProps, "ref">;

export type StyledButtonProps = ButtonProps & {
    color: Exclude<ButtonProps["color"], undefined>;
    variant: Exclude<ButtonProps["variant"], undefined>;
};

export type ButtonComponent = FunctionComponent<ButtonProps>;