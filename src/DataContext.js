import { createContext } from "react";
// import { useStaticQuery, graphql } from "gatsby";

// const data = useStaticQuery(graphql`{
//   allContentfulPerson(
//     filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
//   ) {
//     edges {
//       node {
//         name
//         shortBio {
//           shortBio
//         }
//         title
//         heroImage: image {
//           fluid(
//             maxWidth: 1180
//             maxHeight: 480
//             resizingBehavior: PAD
//             background: "rgb:000000"
//           ) {
//             ...GatsbyContentfulFluid_tracedSVG
//           }
//         }
//       }
//     }
//   }
//   allContentfulTheme {
//     edges {
//       node {
//         title
//         images {
//           title
//           image {
//             fluid {
//               src
//             }
//           }
//         }
//       }
//     }
//   }
// }
// `);

export const DataContext = createContext({});