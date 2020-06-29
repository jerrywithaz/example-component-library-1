import React, { FunctionComponent } from 'react';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import theme from '../../theme';
import GlobalStyles from '../../components/GlobalStyles';
import { ThemeProviderProps } from './ThemeProvider.types';
import { resolveTheme } from './ThemeProvider.utils';

const ThemeProvider: FunctionComponent<ThemeProviderProps> = ({ children, variants }) => {

    const resolvedTheme = resolveTheme(theme, variants);

    return (
        <StyledComponentsThemeProvider theme={resolvedTheme}>
            <GlobalStyles />
            {children}
        </StyledComponentsThemeProvider>
    );

}

export default ThemeProvider;