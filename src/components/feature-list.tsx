import * as React from "react"
import { graphql } from "gatsby"
import { Container, Box, Kicker, Heading, Text } from "./ui"
import Feature, { FeatureDataProps } from "./feature"
import { flipped, regular } from "./feature-list.css"

export interface FeatureListProps {
  kicker?: string
  heading: string
  text?: string
  content: FeatureDataProps[]
}

export default function FeatureList(props: FeatureListProps) {
  return (
    <>
      {props.content.map((feature, i) => (
        <Feature
          key={feature.id}
          {...feature}
          flip={Boolean(i % 2)}
          className={i % 2 ? flipped : regular}
        />
      ))}
    </>
  )
}

export const query = graphql`
  fragment HomepageFeatureListContent on HomepageFeatureList {
    id
    kicker
    heading
    text
    content {
      id
      ...HomepageFeatureContent
    }
  }
`
