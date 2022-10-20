import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"
import { fullHeightSection, hero, heroWrapper, wrapper } from "./hero.css"
import {
  Box,
  ButtonList,
  Container,
  Flex,
  Heading,
  HomepageImage,
  HomepageLink,
  Kicker,
  Section,
  Subhead,
  Text,
} from "./ui"

export interface HeroProps {
  image?: HomepageImage
  kicker?: string
  h1: string
  subhead: string
  text: string
  links: HomepageLink[]
}

export default function Hero(props: HeroProps) {
  return (
    <div className={fullHeightSection}>
      <Container className={heroWrapper}>
        <Flex gap={4} variant="responsive">
          <Box width="half">
            <Heading as="h1">
              {props.kicker && <Kicker>{props.kicker}</Kicker>}
              {props.h1}
            </Heading>
            <Subhead as="h2">{props.subhead}</Subhead>
            <Text as="p">{props.text}</Text>
            <ButtonList links={props.links} />
          </Box>
          <Box width="half"></Box>
        </Flex>
      </Container>
    </div>
  )
}

export const query = graphql`
  fragment HomepageHeroContent on HomepageHero {
    id
    kicker
    h1: heading
    subhead
    text
    links {
      id
      href
      text
    }
    image {
      id
      gatsbyImageData
      alt
    }
  }
`
