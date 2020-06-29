import React, { FunctionComponent, useState, useEffect } from 'react';
import { ThemeProvider as StyledComponentsThemeProvider, DefaultTheme } from 'styled-components';
import theme from '../../theme';
import GlobalStyles from '../../components/GlobalStyles';
import { ThemeProviderProps } from './ThemeProvider.types';
import { resolveTheme } from './ThemeProvider.utils';

const ThemeProvider: FunctionComponent<ThemeProviderProps> = ({ children, variants }) => {

    const [ resolvedTheme, setResolvedTheme ] = useState<DefaultTheme>(resolveTheme(theme, variants));

    useEffect(() => {
        setResolvedTheme(resolveTheme(theme, variants));
    }, [ variants ]);

    return (
        <StyledComponentsThemeProvider theme={resolvedTheme}>
            <GlobalStyles />
            {children}
        </StyledComponentsThemeProvider>
    );

}

export default ThemeProvider;