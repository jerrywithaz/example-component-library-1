import React, { FunctionComponent } from 'react';
import * as Styled from './Paragraph.style';
import { ParagraphProps } from './Paragraph.types';

const Paragraph: FunctionComponent<ParagraphProps> = ({ children, variation = "default" }) => {
    return (
        <Styled.Paragraph variation={variation}>
            {children}
        </Styled.Paragraph>
    );
};

export default Paragraph;