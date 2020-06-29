export type Sizes = {
    button: {
        /** Button min width size is used to set the minimum width for button elements. */
        minWidth: "8rem",
        /** Button border size is used to set a consistent borders for buttons. */
        border: "2px"
    },
    form: {
        /** Form border size is used to set a consistent borders for form elements. */
        border: "1px"
    },
    icon: {

    },
    step: {
        /** Small step size is used for stepper circles that have icon inside them (mobile viewports). */
        small: "30px",
        /** Medium step size is used for stepper circles that have icon inside them (desktop viewports). */
        medium: "40px"
    },
    layout: {
        /** Header size (64px) is used for the header height on mobile, tablet and desktop viewports. */
        headerHeight: "64px",
        /** Navigation size (48px) is used for the navigation height on desktop viewports. */
        navigationHeight: "48px",
        /** A minimum recommended touch target size is 48 device independent pixels on a website with a properly set mobile viewport. */
        tappableSquare: "48px",
        /** This size is used as the max-width for all layouts on the Web. */
        layoutMaxWidth: "1110px"
    }
};