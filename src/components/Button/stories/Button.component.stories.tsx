import React from 'react';
import Button from './../';
import { select, text } from '@storybook/addon-knobs';
import { PrimaryButton, DangerButton, SuccessButton } from '../';

export default {
    title: 'Component Library / Buttons | Button',
    component: Button
};

const createVariantKnob = () => select("variant", ["text", "default", "filled"], "filled") as any;

export const Primary = () => (<PrimaryButton variant={createVariantKnob()}>{text("text", "This is a Primary Button")}</PrimaryButton>);
export const Danger = () => (<DangerButton variant={createVariantKnob()}>{text("text", "This is a Danger Button")}</DangerButton>);
export const Success = () => (<SuccessButton variant={createVariantKnob()}>{text("text", "This is a Success Button")}</SuccessButton>);

