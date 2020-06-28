export type FontWeight = "bold" | "medium" | "regular" | "thin";

export type Font = {
    fontFamily: string;
    fontWeights: Partial<Record<FontWeight, number>>
};

export type Typography = {
    fontFamily: {
        /** Heading font family uses a font stack that gracefully degrades to default system fonts on different platforms. Should be used for headings only. */
        heading: string;
        /** Text font family uses a font stack that gracefully degrades to default system fonts on different platforms. Should be used for body text and form controls. */
        text: string;
    },
    fontWeight: {
        /** Normal font weight is used for body text and form inputs together with “Text” font family. */
        normal: 400,
        /** Semi bold font weight is used for buttons and sub headings together with “Text” font family. */
        semiBold: 600,
        /** Extra bold font weight is used for headings only together with “Heading” font family. */
        extraBold: 800
    },
    fontSize: {
        /** X-Small font size that is only used in native iOS and Android applications. */
        xSmall: {
            rem: "0.75rem",
            px: "12px"
        },
        /** Small font size should be used sparingly for annotations, descriptions, and similar content. */
        small: {
            rem: "0.875rem",
            px: "14px"
        },
        /** Medium font size is used for the body text. */
        medium: {
            rem: "1rem",
            px: "16px"
        },
        /**Large font size is used for small sub-headings. */
        large: {
            rem: "1.25rem",
            px: "20px"
        },
        /** X-large font size is used for large sub-headings. */
        xLarge: {
            rem: "1.25rem",
            px: "24px"
        },
        /** XX-large font size is used for the main heading on tablet size. */
        xxLarge: {
            rem: "2.25rem",
            px: "36px"
        },
        /** XXX-large font size is used for the main heading on desktop. */
        xxxLarge: {
            rem: "3rem",
            px: "48px"
        },
        /** XXXX-large font size is for marketing purposes and banners. */
        xxxxLarge: {
            rem: "4.5rem",
            px: "72px"
        },
    },
    /** Line-height property defines the amount of space above and below inline elements. Duet uses “unitless” values to define line-heights, which ensures that the line-height is always relative to the used font-size. */
    lineHeight: {
        /** X-small line-height is used when we don’t want the line-height to create any additional white space above or below text. */
        xSmall: "1.1",
        /** Small line-height is used for all application headings and text in sidebar. */
        small: "1.25",
        /** Medium line-height is used for the main body text. Basically everything else except the headings and sidebar (and a few other exceptions). */
        medium: "1.5"
    }
};