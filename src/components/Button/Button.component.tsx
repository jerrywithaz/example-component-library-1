import React from 'react';
import { ButtonComponent } from './Button.types';
import * as Styled from './Button.style';

/**
 * Buttons are used for interface actions. They default to appearance that has dark text with gray border. Primary style should be used only once per view for main call-to-action.
 */
export const Button: ButtonComponent = ({
    color = "primary",
    variant = "filled",
    ...buttonProps
}) => {
    return (
        <Styled.Button color={color} variant={variant} {...buttonProps}/>
    );
}

export default Button;