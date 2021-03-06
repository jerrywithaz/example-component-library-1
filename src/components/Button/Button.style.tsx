import styled, { css } from 'styled-components';
import { StyledButtonProps } from './Button.types';

export const Button = styled.button<StyledButtonProps>`
    ${({ theme, color, variant }) => css`

        outline: none;
        border: ${theme.sizes.button.border} solid transparent;
        border-radius: ${theme.borderRadius.pill};
        font-weight: ${theme.typography.fontWeight.semiBold};
        padding: 14px 27px 15px;
        min-width: ${theme.sizes.button.minWidth};

        &:hover {
            cursor: pointer;
        }

        ${variant === "default" && css`
            color: ${theme.colors[color].base};
            background: ${theme.colors.white.base};
            border: ${theme.sizes.button.border} solid ${theme.colors.gray.light};
            transition: border-color ${theme.transitions.quickly};
            &:hover {
                border-color: ${theme.colors[color].base};
            }
        `}

        ${variant === "filled" && css`
            color: ${theme.colors.white.base};
            background-color: ${theme.colors[color].base};
            transition: background-color ${theme.transitions.quickly};
            ${color === "primary" && css`
                &:hover {
                    background-color: ${theme.colors[color].dark.hex};
                }
            `}
        `}

        ${variant === "text" && css`
            color: ${theme.colors[color].base};
            background: ${theme.colors.white.base};
        `}
        
    `}
`;