import { Shadows } from "./shadows.types";

const shadows: Shadows = {
    /** Tooltip shadow is used by popover tooltips. */
    tooltip: "0 2px 10px 0 rgba(117, 117, 117, 0.13)",
    /** Hover shadow is used when primary component is clickable and is hovered over/active on mobile. */
    hover: "0 2px 10px 0 rgba(117, 117, 117, 0.15)",
    /** Modal shadow is used for popovers and modal windows on a dark blue overlay. */
    modal: "0 2px 20px 0 rgba(0, 0, 0, 0.2)",
    /** Default shadow is used when information needs to be contained within a component. */
    default: "0 2px 6px 0 rgba(117, 117, 117, 0.13)",
    /** Card shadow is a variant of default shadow that is used when information needs to be contained within a card. */
    card: "0 2px 6px 0 rgba(117, 117, 117, 0.13), 0 -1px 0 0 rgba(0, 0, 0, 0.09), -1px 0 0 0 rgba(0, 0, 0, 0.07), 1px 0 0 0 rgba(0, 0, 0, 0.07), 0 1px 0 0 rgba(0, 0, 0, 0.07)",
};

export default shadows;