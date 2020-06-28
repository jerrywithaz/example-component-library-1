import { Colors } from "./colors.types";
import { theme } from "../../providers/ThemeProvider";

const PrimaryColor = {
    dark: theme("theme", {
        blue: "#004d80",
        red: "#940925"
    }),
    base: theme("theme", {
        blue: "#0077b3",
        red: "#c60c30"
    }),
    light: theme("theme", {
        blue: "#cde5f1",
        red: "#f4cfd6"
    }),
    lighter: theme("theme", {
        blue: "#e6f2f8",
        red: "#f9e6ea"
    }),
    lightest: theme("theme", {
        blue: "#f3f9fc",
        red: "#fcf3f4"
    })
};

const SecondaryColor = {
    base: theme("theme", {
        blue: "#00294d",
        red: "#171c3a"
    })
};

const DangerColor = {
    base: theme("theme", {
        blue: "#de2362",
        red: "#e02a0d"
    })
};

const SuccessColor = {
    base: theme("theme", {
        blue: "#00875a",
        red: "#08874e"
    })
};

const WarningColor = {
    base: theme("theme", {
        blue: "#f7b228",
        red: "#faa40f"
    })
};

const GrayColor = {
    darker: theme("theme", {
        blue: "#657787",
        red: "#454545"
    }),
    dark: theme("theme", {
        blue: "#909599",
        red: "#757575"
    }),
    base: theme("theme", {
        blue: "#cfd2d4",
        red: "#d1d1d1"
    }),
    light: theme("theme", {
        blue: "#e1e3e6",
        red: "#e6e6e6"
    }),
    lighter: theme("theme", {
        blue: "#f5f8fa",
        red: "#f7f7f7"
    }),
    lightest: theme("theme", {
        blue: "#ffffff",
        red: "#ffffff"
    })
};

const WhiteColor = {
    base: theme("theme", {
        blue: "#ffffff",
        red: "#ffffff"
    }),
};

const colors: Colors = {
    primary: PrimaryColor,
    secondary: SecondaryColor,
    white: WhiteColor,
    danger: DangerColor,
    success: SuccessColor,
    warning: WarningColor,
    gray: GrayColor
    // black: BlackColor,
};

export default colors;