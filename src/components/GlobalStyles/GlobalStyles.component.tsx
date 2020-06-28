import { createGlobalStyle } from 'styled-components';
import './../../fonts/roboto/index.css';

const GlobalStyles = createGlobalStyle`
    ${({ theme }) => `
        html,
        body {
            margin: 0px;
            font-family: ${theme.typography.fontFamily.text};
            font-size: ${theme.typography.fontSize.medium.rem};
            line-height: ${theme.typography.lineHeight.medium};
            font-weight: ${theme.typography.fontWeight.normal};
            color: ${theme.colors.secondary.base};
            background: ${theme.colors.white.base};
        }
    `}
    
`;

export default GlobalStyles;