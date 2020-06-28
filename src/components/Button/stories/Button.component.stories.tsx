import React from 'react';
import Button from './../';

export default {
    title: 'Component Library / Buttons | Button',
    component: Button
};

export const Primary = () => (<Button color="primary" variant="filled" type="button">This is a Primary Button</Button>);
export const Danger = () => (<Button type="button" color="danger">This is a Danger Button</Button>);
export const Warning = () => (<Button type="button" color="warning">This is a Warning Button</Button>);
export const Success = () => (<Button type="button" color="success">This is a Success Button</Button>);

