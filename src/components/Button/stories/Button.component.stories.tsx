import React from 'react';
import Button from './../';
import { select, text } from '@storybook/addon-knobs';

export default {
    title: 'Component Library / Buttons | Button',
    component: Button
};

const createVariantKnob = () => select("variant", ["text", "default", "filled"], "filled") as any;

export const Primary = () => (<Button variant={createVariantKnob()}  color="primary">{text("text", "This is a Primary Button")}</Button>);
export const Danger = () => (<Button variant={createVariantKnob()}  color="danger">{text("text", "This is a Danger Button")}</Button>);
export const Success = () => (<Button variant={createVariantKnob()}  color="success">{text("text", "This is a Success Button")}</Button>);

