import React, { FunctionComponent } from 'react';
import { ButtonComponent, ButtonProps } from './Button.types';
import * as Styled from './Button.style';

/**
 * Buttons are used for interface actions. They default to appearance that has dark text with gray border. Primary style should be used only once per view for main call-to-action.
 */
export const Button: ButtonComponent = ({
    color = "primary",
    variant = "default",
    ...buttonProps
}) => {
    return (
        <Styled.Button color={color} variant={variant} {...buttonProps}/>
    );
}

export const PrimaryButton: FunctionComponent<Omit<ButtonProps, "color">> = (props) => {
    return <Button color="primary" {...props}/>;
}

export const DangerButton: FunctionComponent<Omit<ButtonProps, "color">> = (props) => {
    return <Button color="danger" {...props}/>;
}

export const SuccessButton: FunctionComponent<Omit<ButtonProps, "color">> = (props) => {
    return <Button color="success" {...props}/>;
}

export default Button;