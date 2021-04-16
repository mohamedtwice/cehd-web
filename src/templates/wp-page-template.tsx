import '@wordpress/block-library/build-style/editor.css'
import '@wordpress/block-library/build-style/style.css'
import '@wordpress/block-library/build-style/theme.css'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React, { Fragment, FunctionComponent } from 'react'
// import { Seo } from '../components/seo'

interface IPageTemplate {
  data: any
}

const WpPageTemplate: FunctionComponent<IPageTemplate> = ({ data: { page } }) => {
  const { id, featuredImage, title, content, seo } = page

  const {
    node: { altText, localFile },
  } = featuredImage || { node: { altText: '', localFile: null } }

  return (
    <Fragment>
      <Seo seo={seo} />
      <div id="content">
      <h1>{title}</h1>
      </div>
      <div className="imgHeader">
      {localFile ? <GatsbyImage alt={altText} image={getImage(localFile)} /> : null}
</div>      <div id="content">
      <div dangerouslySetInnerHTML={{ __html: content }} />
      <div style={{ fontSize: '10px', color: '#cccccc' }}>{`page id: ${id}`}</div>
      </div>
    </Fragment>
  )
}

// {
//   wpPage(id: {eq: "cG9zdDoxNA=="}) {
//     title
//   }
// }

export const query = graphql`
  query SinglePage($id: String!) {
    page: wpPage(id: { eq: $id }) {
      id
      title
      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(
                quality: 90
                layout: FULL_WIDTH
                width: 1250
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
      content
      seo {
        opengraphSiteName
        opengraphUrl
        opengraphType
        opengraphTitle
        opengraphDescription
        opengraphPublisher
        canonical
      }
    }
  }
`

export default WpPageTemplate
