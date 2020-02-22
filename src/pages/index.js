import React from "react";
import { DataContext } from '../DataContext';
import { graphql } from "gatsby";
import Page from "../components/Page";
import "bootstrap/dist/css/bootstrap.min.css";



const RootIndex = ({ data }) => {
  return (
    <DataContext.Provider value={data}>
      <Page />
    </DataContext.Provider>
  );
};

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            fluid(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: PAD
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
    allContentfulTheme {
      edges {
        node {
          title
          images {
            title
            image {
              fluid {
                src
              }
            }
          }
        }
      }
    }
  }
`;
