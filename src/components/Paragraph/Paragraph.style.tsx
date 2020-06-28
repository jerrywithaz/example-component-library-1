import styled, { css } from 'styled-components';
import { StyledParagraphProps } from './Paragraph.types';

export const Paragraph = styled.p<StyledParagraphProps>`
    ${({ theme, variation }) => css`
        font-weight: ${theme.typography.fontWeight.normal};
    `}
`;