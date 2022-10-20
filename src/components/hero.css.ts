import { style, styleVariants } from "@vanilla-extract/css"
import { theme } from "../theme.css"
import { media } from "./ui.css"

export const fullHeightSection = style({
    minHeight: "auto",
    color: theme.colors.background,
    backgroundSize: "cover",
    backgroundPosition: "50% 50%",
    backgroundImage: "url(/images/hero-background.png)",
    "@media": {
        [media.large]: {
            minHeight: "100vh",
        },
    },
})

export const heroWrapper = style({
    padding: "115px 5%",
    "@media": {
        [media.large]: {
            padding: "40% 5%",
        },
    },
})