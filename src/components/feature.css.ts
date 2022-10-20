import { style, styleVariants } from "@vanilla-extract/css"
import { theme } from "../theme.css"
import { media } from "./ui.css"

export const fullHeightSection = style({
    minHeight: "auto",
})

export const featureWrapper = style({
    padding: "115px 5%",
    "@media": {
        [media.large]: {
            padding: "10% 5%",
        },
    },
})

export const imageStyle = style({
    borderRadius: "20px",
})
