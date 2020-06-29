import styled, { css } from 'styled-components';
import { StyledButtonProps } from './Button.types';

export const Button = styled.button<StyledButtonProps>`
    ${({ theme, color, variant }) => css`

        outline: none;
        border-radius: ${theme.borderRadius.pill};
        font-weight: ${theme.typography.fontWeight.semiBold};
        padding: 14px 27px 15px;
        &:hover {
            cursor: pointer;
        }

        ${variant === "default" && css`
            border: 0px;
            color: ${theme.colors[color].base};
            background: ${theme.colors.white.base};
            border: 2px solid ${theme.colors.gray.light};
            &:hover {
                border-color: ${theme.colors[color].base};
            }
        `}

        ${variant === "filled" && css`
            border: 0px;
            color: ${theme.colors.white.base};
            background: ${theme.colors[color].base};
            ${color === "primary" && css`
                &:hover {
                    background: ${theme.colors[color].dark};
                }
            `}
        `}

        ${variant === "text" && css`
            border: 0px;
            color: ${theme.colors[color].base};
            background: ${theme.colors.white.base};
        `}

    `}
`;