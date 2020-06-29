import { Colors } from "./colors.types";
import { token } from "../../providers/ThemeProvider";
import { createRGBAFactory } from "./colors.utils";

const PrimaryColor = {
    dark: token("mode", {
        blue: {
            hex: "#004d80",
            rgba: createRGBAFactory(0, 77, 128)
        },
        red: {
            hex: "#940925",
            rgba: createRGBAFactory(0, 77, 128)
        }
    }),
    base: token("mode", {
        blue: "#0077b3",
        red: "#c60c30"
    }),
    light: token("mode", {
        blue: "#cde5f1",
        red: "#f4cfd6"
    }),
    lighter: token("mode", {
        blue: "#e6f2f8",
        red: "#f9e6ea"
    }),
    lightest: token("mode", {
        blue: "#f3f9fc",
        red: "#fcf3f4"
    })
};

const SecondaryColor = {
    base: token("mode", {
        blue: "#00294d",
        red: "#171c3a"
    })
};

const DangerColor = {
    base: token("mode", {
        blue: "#de2362",
        red: "#e02a0d"
    })
};

const SuccessColor = {
    base: token("mode", {
        blue: "#00875a",
        red: "#08874e"
    })
};

const WarningColor = {
    base: token("mode", {
        blue: "#f7b228",
        red: "#faa40f"
    })
};

const GrayColor = {
    darker: token("mode", {
        blue: "#657787",
        red: "#454545"
    }),
    dark: token("mode", {
        blue: "#909599",
        red: "#757575"
    }),
    base: token("mode", {
        blue: "#cfd2d4",
        red: "#d1d1d1"
    }),
    light: token("mode", {
        blue: "#e1e3e6",
        red: "#e6e6e6"
    }),
    lighter: token("mode", {
        blue: "#f5f8fa",
        red: "#f7f7f7"
    }),
    lightest: token("mode", {
        blue: "#ffffff",
        red: "#ffffff"
    })
};

const WhiteColor = {
    base: token("mode", {
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
};

export default colors;