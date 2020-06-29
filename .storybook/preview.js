import React from 'react';
import { addDecorator } from '@storybook/react';
import { select } from "@storybook/addon-knobs";
import { ThemeProvider } from 'styled-theme-tokens';
import theme from './../src/theme';
import { withA11y } from '@storybook/addon-a11y';

const ThemeDecorator = (storyFn) => {

    const content = storyFn();
    return (
        <ThemeProvider theme={theme} variants={{ mode: select("theme", { blue: "blue", red: "red"}, "blue") }}>
            <div style={{ padding: 12, display: "flex", alignItems: "center", justifyContent: "center" }}>
                {content}
            </div>
        </ThemeProvider>
    );
};

addDecorator(withA11y);
addDecorator(ThemeDecorator);