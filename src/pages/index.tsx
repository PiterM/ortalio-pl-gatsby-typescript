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
      intro: string;
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
    allMarkdownRemark: {
      edges: EdgeProp[]
    }
  }
}

class IndexPage extends React.Component<IndexPageProps> {
  render() {
    const { data } = this.props;
    const items = data.allMarkdownRemark.edges.filter(edge => edge.node.frontmatter.layout === 'item');
    const indexItem = data.allMarkdownRemark.edges.filter(edge => edge.node.frontmatter.layout === 'index');

    if (indexItem.length !== 1) {
      return null;
    }

    return (
      <IndexLayout
        intro={indexItem[0].node.frontmatter.intro}
        description={indexItem[0].node.frontmatter.description}
      >
        <Page>
          {/* <h1>{data.markdownRemark.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} /> */}
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
    allMarkdownRemark(sort: { fields: [frontmatter___itemOrder], order: ASC}) {
      edges {
        node {
          frontmatter {
            intro
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
