export type ZIndex = {
    /** Deep z-index is used to stack something behind everything else. */
    deep: -999999,
    /** The default z-index for components and elements inside components. */
    default: 1,
    /** Default z-index for masked interface elements. */
    masked: 100,
    /** Default z-index for masking interface elements. */
    mask: 200,
    /** Default z-index for sticky interface elements. */
    sticky: 300,
    /** Default z-index for header. */
    header: 400,
    /** Default z-index for toast messages. */
    toast: 500,
    /** Default z-index for dropdowns which makes sure the dropdown stacks above toasts and sticky elements. */
    dropdown: 600,
    /** Default z-index for modal and popup overlays. */
    overlay: 700,
    /** Default z-index for spinners, stacking on top of overlay. */
    spinner: 800,
    /** Default z-index for modals that stacks on top of overlays and other elements, but still allows popups to be visible. */
    modal: 900,
    /** Default z-index for popups that stacks on top of all other elements. */
    popup: 950
};