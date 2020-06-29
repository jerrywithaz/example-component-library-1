import React from 'react';
import { addDecorator } from '@storybook/react';
import { select } from "@storybook/addon-knobs";
import ThemeProvider from '../src/providers/ThemeProvider';
import { withA11y } from '@storybook/addon-a11y';

const ThemeDecorator = (storyFn) => {

    const content = storyFn();
    return (
        <ThemeProvider variants={{ mode: select("theme", { blue: "blue", red: "red"}, "blue") }}>
            <div style={{ padding: 12, display: "flex", alignItems: "center", justifyContent: "center" }}>
                {content}
            </div>
        </ThemeProvider>
    );
};

addDecorator(withA11y);
addDecorator(ThemeDecorator);