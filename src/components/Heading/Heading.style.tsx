import styled, { css } from 'styled-components';
import { StyledHeadingProps } from './Heading.types';

export const Heading = styled.p<StyledHeadingProps>`
    ${({ theme, level }) => css`

        font-weight: ${theme.typography.fontWeight.extraBold};
        color: ${theme.colors.secondary.base};

        ${level === "h1" && `
            font-size: ${theme.typography.fontSize.xxxxLarge.rem};
        `}
        ${level === "h2" && `
            font-size: ${theme.typography.fontSize.xxxLarge.rem};
        `}
        ${level === "h3" && `
            font-size: ${theme.typography.fontSize.xxLarge.rem};
        `}
        ${level === "h4" && `
            font-size: ${theme.typography.fontSize.xLarge.rem};
        `}
        ${level === "h5" && `
            font-size: ${theme.typography.fontSize.large.rem};
        `}
        ${level === "h6" && `
            font-size: ${theme.typography.fontSize.medium.rem};
        `}
    `}
`;