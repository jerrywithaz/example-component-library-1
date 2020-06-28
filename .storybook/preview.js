import React from 'react';
import { addDecorator } from '@storybook/react';
import { select } from "@storybook/addon-knobs";
import ThemeProvider from '../src/providers/ThemeProvider';

const ThemeDecorator = (storyFn) => {

    const content = storyFn();
    return (
        <ThemeProvider variants={{ theme: select("Theme", { blue: "blue", red: "red"}, "blue") }}>
            {content}
        </ThemeProvider>
    );
};

addDecorator(ThemeDecorator);