import React from 'react';
import Button from './../';
import { select } from '@storybook/addon-knobs';

export default {
    title: 'Component Library / Buttons | Button',
    component: Button
};

const createVariantKnob = () => select("variant", ["text", "default", "filled"], "filled") as any;

export const Primary = () => (<Button variant={createVariantKnob()}  color="primary">This is a Primary Button</Button>);
export const Danger = () => (<Button variant={createVariantKnob()}  color="danger">This is a Danger Button</Button>);
export const Success = () => (<Button variant={createVariantKnob()}  color="success">This is a Success Button</Button>);

