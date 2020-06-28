import React, { FunctionComponent } from 'react';
import { ThemeProvider as StyledComponentsThemeProvider, DefaultTheme } from 'styled-components';
import theme from '../../theme';
import GlobalStyles from '../../components/GlobalStyles';
import { ThemeProviderProps } from './ThemeProvider.types';
import deepMapObject from './../../utils/deepMapObject';


const ThemeProvider: FunctionComponent<ThemeProviderProps> = ({ children, variants }) => {

    const Theme: DefaultTheme = deepMapObject(theme, (value) => {
        if (typeof value === "function" && variants) {
            return value(variants);
        } 
        return value;
    });

    return (
        <StyledComponentsThemeProvider theme={Theme}>
            <StyledComponentsThemeProvider theme={Theme}>
                <GlobalStyles />
                {children}
            </StyledComponentsThemeProvider>
        </StyledComponentsThemeProvider>
    );

}

export default ThemeProvider;