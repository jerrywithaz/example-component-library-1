export type ParagraphProps = {
    size?: "medium" | "small";
    /**
     * Style variation of the paragraph.
     */
    variation?: "default" | "intro"
};

export type StyledParagraphProps = {
    variation: Exclude<ParagraphProps["variation"], undefined>
};