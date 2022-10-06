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
  HomepageImage,
  Heading,
} from "./ui"

export interface HowItWorksStepProps {
  id: string
  image?: HomepageImage
  index?: string
  heading: string
  text: string
}

interface HowItWorksProps {
  flip: boolean
}

export default function HowItWorksStep(
  props: HowItWorksStepProps & HowItWorksProps
) {
  return (
    <Section padding={4}>
      <Container>
        <Flex gap={4} variant="responsive">
          <Box width="half" order={props.flip ? 1 : null}>
            {props.image && (
              <GatsbyImage
                alt={props.image.alt}
                image={getImage(props.image.gatsbyImageData)}
              />
            )}
            {props.index && <Heading as="H1">{props.index}</Heading>}
          </Box>
          <Box width="half">
            <Subhead>{props.heading}</Subhead>
            <Text variant="lead">{props.text}</Text>
          </Box>
        </Flex>
      </Container>
    </Section>
  )
}

export const query = graphql`
  fragment HowItWorksStepContent on HowItWorksStep {
    id
    heading
    text
    index
    image {
      id
      gatsbyImageData
      alt
    }
  }
`
