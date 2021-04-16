const { resolve } = require('path')

exports.createPages = async ({ actions, graphql }) => {
  const {
    data: {
      allWpPage: { edges: pages },
    },
  } = await graphql(`
    query AllPages {
      allWpPage {
        edges {
          node {
            id
            uri
          }
        }
      }
    }
  `)

  pages.map((edge) => {
    const { id, uri } = edge.node
    return actions.createPage({
      component: resolve('./src/templates/wp-page-template.tsx'),
      path: uri,
      context: {
        id: id,
      },
    })
  })
}

// exports.createPages = async ({ actions, graphql }) => {
//   const {
//     data: {
//       allWpDoc: { edges: docs },
//     },
//   } = await graphql(`
//     query AllDocs {
//       allWpDoc {
//         edges {
//           node {
//             id
//             uri
//           }
//         }
//       }
//     }
//   `)
//
//   docs.map((edge) => {
//     const { id, uri } = edge.node
//     return actions.createPage({
//       component: resolve('./src/templates/wp-page-template.tsx'),
//       path: uri,
//       context: {
//         id: id,
//       },
//     })
//   })
// }
