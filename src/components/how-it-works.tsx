import * as React from "react"
import { graphql } from "gatsby"
import { Container, Box, Kicker, Heading, Text } from "./ui"
import HowItWorksStep, { HowItWorksStepProps } from "./how-it-works-step"

export interface HowItWorksProps {
  id: string
  heading: string
  text: string
  content: HowItWorksStepProps[]
}

export default function HowItWorks(props: HowItWorksProps) {
  return (
    <Container width="fullbleed">
      <Box radius="large">
        {props.content.map((feature, i) => (
          <HowItWorksStep key={feature.id} {...feature} flip={Boolean(i % 2)} />
        ))}
      </Box>
    </Container>
  )
}

export const query = graphql`
  fragment HowItWorksContent on HowItWorks {
    id
    heading
    content {
      id
      ...HowItWorksStepContent
    }
  }
`
