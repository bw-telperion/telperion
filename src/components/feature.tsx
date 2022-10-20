import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  Container,
  Section,
  Flex,
  Box,
  Subhead,
  Kicker,
  Text,
  ButtonList,
  HomepageImage,
  HomepageLink,
} from "./ui"
import { featureWrapper, fullHeightSection, imageStyle } from "./feature.css"

export interface FeatureDataProps {
  id: string
  image?: HomepageImage
  kicker?: string
  heading: string
  text: string
  links: HomepageLink[]
}

interface FeatureProps {
  flip: boolean
  className?: string
}

export default function Feature(props: FeatureDataProps & FeatureProps) {
  return (
    <div className={fullHeightSection}>
      <Section padding={4} className={props.className}>
        <Container className={featureWrapper}>
          <Flex gap={4} variant="responsive">
            <Box width="half" order={props.flip ? 1 : null}>
              {props.image && (
                <GatsbyImage
                  alt={props.image.alt}
                  image={getImage(props.image.gatsbyImageData)}
                  className={imageStyle}
                />
              )}
            </Box>
            <Box width="half">
              <Subhead>
                {props.kicker && <Kicker>{props.kicker}</Kicker>}
                {props.heading}
              </Subhead>
              <Text variant="lead">{props.text}</Text>
              <ButtonList links={props.links} reversed={!props.flip} />
            </Box>
          </Flex>
        </Container>
      </Section>
    </div>
  )
}

export const query = graphql`
  fragment HomepageFeatureContent on HomepageFeature {
    id
    kicker
    heading
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
