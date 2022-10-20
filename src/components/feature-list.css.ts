import { style, styleVariants } from "@vanilla-extract/css"
import { theme } from "../theme.css"

export const regular = style({
    background: theme.colors.primary,
    color: theme.colors.background,
})

export const flipped = style({
    background: theme.colors.background,
    color: theme.colors.primary,
})
