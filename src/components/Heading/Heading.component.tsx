import React, { FunctionComponent } from 'react';
import * as Styled from './Heading.style';
import { HeadingProps } from './Heading.types';

const Heading: FunctionComponent<HeadingProps> = ({ children, level }) => {
    return (
        <Styled.Heading level={level} as={level}>
            {children}
        </Styled.Heading>
    );
};

export default Heading;