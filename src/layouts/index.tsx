import * as React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import 'modern-normalize'
import '../styles/normalize'

import Header from '../components/Header'
import LayoutRoot from '../components/LayoutRoot'
import LayoutMain from '../components/LayoutMain'

interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string
      metaTitle: string
      description: string
      keywords: string
    }
  }
}

interface IndexLayoutProps {
  intro: string;
  description: string;
}

const IndexLayout: React.FC<IndexLayoutProps> = ({ intro, description, children }) => (
  <StaticQuery
    query={graphql`
      query IndexLayoutQuery {
        site {
          siteMetadata {
            title
            metaTitle
            description
          }
        }
      }
    `}
    render={(data: StaticQueryProps) => (
      <LayoutRoot>
        <Helmet
          title={data.site.siteMetadata.metaTitle}
          meta={[
            { name: 'description', content: data.site.siteMetadata.description },
            { name: 'keywords', content: data.site.siteMetadata.keywords },
            { name: 'viewport', content: "width=device-width" }
          ]}
          link={[
            {
              href: 'https://fonts.googleapis.com/css?family=Playfair+Display:400,700,900,400italic,700italic,900italic|Droid+Serif:400,700,400italic,700italic',
              rel: 'stylesheet',
              type: 'text/css'
            }
          ]}
        />
        <Header
          intro={intro}
          title={data.site.siteMetadata.title}
          description={description}
        />
        <LayoutMain>{children}</LayoutMain>
      </LayoutRoot>
    )}
  />
)

export default IndexLayout
