import React from "react"
import styled from '@emotion/styled';
import { StaticQuery, graphql } from "gatsby"
import Image, { FixedObject } from "gatsby-image"

const StyledSocialIconsSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 0 3vh 0;
  max-width: 100%;
  margin: auto;
  text-align: center;

  & .gatsby-image-wrapper {
    -webkit-transition: all 0s ease-in-out 0.07s;
    -moz-transition: all 0s ease-in-out 0.07s;
    -o-transition: all 0s ease-in-out 0.07s;
    transition: all 0s ease-in-out 0.07s !important;
    width: 60px !important;
    margin: 0 3px;
    opacity: 0.8;
  }

  & .gatsby-image-wrapper img {
    object-position: left center !important;
    -webkit-transition: all 0s ease-in-out 0s;
    -moz-transition: all 0s ease-in-out 0s;
    -o-transition: all 0s ease-in-out 0s;
    transition: all 0s ease-out 0s !important;
  }

  & .gatsby-image-wrapper:hover {
    opacity: 1;
  }

  & .gatsby-image-wrapper:hover img,
  & .gatsby-image-wrapper img:hover {
      object-position: right center !important;
  }
`;

const SocialIcons: React.FC = () => (
  <StaticQuery
    query={socialIconsQuery}
    render={(data) => {
      const { social } = data.site.siteMetadata;
      console.log('social', social);
      return (
        <StyledSocialIconsSection>
          {Object.keys(data).map((key) => {
            if (key !== 'site') {
              return renderSocialIcon(
                key,
                social[key],
                data[key].childImageSharp.fixed,
              );
            }
          })}
        </StyledSocialIconsSection>
      );
    }}
  />
);

export function renderSocialIcon(key: string, link: string, image: FixedObject) {
  return (
    <a href={link} target="_blank" key={key}>
      <Image
        alt={`${key}.com`}
        title={`${key}.com`}
        fixed={image}
      />
    </a>
  );
}

const socialIconsQuery = graphql`
  query SocialIconsQuery {
    audiomack: file(absolutePath: { regex: "/audiomack-logo.png/" }) {
      childImageSharp {
        fixed(width: 120, height: 60) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    twitter: file(absolutePath: { regex: "/twitter-logo.png/" }) {
      childImageSharp {
        fixed(width: 120, height: 60) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    instagram: file(absolutePath: { regex: "/instagram-logo.png/" }) {
      childImageSharp {
        fixed(width: 120, height: 60) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    soundcloud: file(absolutePath: { regex: "/soundcloud-logo.png/" }) {
      childImageSharp {
        fixed(width: 120, height: 60) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    facebook: file(absolutePath: { regex: "/facebook-logo.png/" }) {
      childImageSharp {
        fixed(width: 120, height: 60) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    youtube: file(absolutePath: { regex: "/youtube-logo.png/" }) {
      childImageSharp {
        fixed(width: 120, height: 60) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    bandcamp: file(absolutePath: { regex: "/bandcamp-logo.png/" }) {
      childImageSharp {
        fixed(width: 120, height: 60) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    spotify: file(absolutePath: { regex: "/spotify-logo.png/" }) {
      childImageSharp {
        fixed(width: 120, height: 60) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    deezer: file(absolutePath: { regex: "/deezer-logo.png/" }) {
      childImageSharp {
        fixed(width: 120, height: 60) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        social {
          facebook
          soundcloud
          audiomack
          instagram
          twitter
          youtube
          spotify
          deezer
          bandcamp
        }
      }
    }
  }
`
export default SocialIcons;
