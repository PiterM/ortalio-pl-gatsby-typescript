import * as React from 'react'
import { graphql } from 'gatsby'

import AudioItem from '../components/AudioItem/AudioItem';
import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'

interface PageTemplateProps {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        author: {
          name: string
          url: string
        }
      }
    }
    markdownRemark: {
      html: string
      excerpt: string
      frontmatter: {
        title: string
      }
    }
  }
}

const PageTemplate: React.FC<PageTemplateProps> = ({ data }) => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </Container>
      <AudioItem />
      <AudioItem />
      <AudioItem />
      <AudioItem />
      <AudioItem />
    </Page>
  </IndexLayout>
)

export default PageTemplate

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author {
          name
          url
        }
      }
    }
    markdownRemark {
      html
      excerpt
      frontmatter {
        title
      }
    }
  }
`
