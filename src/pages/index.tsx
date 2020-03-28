import * as React from 'react'
import { graphql } from 'gatsby'

import AudioItem from '../components/AudioItem/AudioItem';
import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'

interface EdgeProp {
  node: {
    frontmatter: {
      title: string
      description: string
      layout: string
    }
    html: string
  }
}

export interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string
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
        intro: string
        description: string
        itemOrder: number
      }
    }
    allMarkdownRemark: {
      edges: EdgeProp[]
    }
  }
}

class IndexPage extends React.Component<IndexPageProps> {
  render() {
    const { data } = this.props;
    const items = data.allMarkdownRemark.edges.filter(edge => edge.node.frontmatter.layout === 'item');

    return (
      <IndexLayout
        intro={data.markdownRemark.frontmatter.intro}
        description={data.markdownRemark.frontmatter.description}
      >
        <Page>
          <Container>
            {/* <h1>{data.markdownRemark.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} /> */}
          </Container>
          {this.renderAudioItems(items)}
        </Page>
      </IndexLayout>
    );
  }

  private renderAudioItems(items: EdgeProp[]) {
    if (!items || !items.length) {
      return null;
    }

    return items.map(item => {
      return this.renderAudioItem(item);
    });
  }

  private renderAudioItem(item: EdgeProp) {
    const { title, description } = item.node.frontmatter;
    const { html } = item.node;

    return (
      <AudioItem
        title={title}
        description={description}
        html={html}
      />
    );
  }
}

export default IndexPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
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
        intro
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___itemOrder], order: DESC}) {
      edges {
        node {
          frontmatter {
            title
            description
            layout
          }
          html
        }
      }
    }
  }
`
