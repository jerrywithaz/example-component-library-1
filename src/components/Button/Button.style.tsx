import styled, { css } from 'styled-components';
import { StyledButtonProps } from './Button.types';

export const Button = styled.button<StyledButtonProps>`
    ${({ theme, color, variant }) => css`

        outline: none;
        border-radius: ${theme.shapes["3px"]};
        font-weight: ${theme.typography.fontWeight.semiBold};
        padding: 14px 27px 15px;
        
        ${variant === "filled" && css`
            border: 0px;
            color: ${theme.colors.white.base};
            background: ${theme.colors[color].base};
        `}

        ${variant === "outlined" && css`
            border: 0px;
            color: ${theme.colors.white.base};
        `}

        ${variant === "text" && css`
            border: 0px;
            color: ${theme.colors[color].base};
        `}

    `}
`;