import React from "react";
import { DataContext } from '../DataContext';
import { graphql } from "gatsby";
import Page from "../components/Page";
import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from 'react-helmet';



const RootIndex = ({ data }) => {
  return (
    <DataContext.Provider value={data}>
      <Helmet>
        <link href="https://fonts.googleapis.com/css?family=Roboto:100,400,700|Source+Sans+Pro:200,400,700&display=swap" rel="stylesheet" />
      </Helmet>
      <Page />
    </DataContext.Provider>
  );
};

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulPerson {
      edges {
        node {
          name
          title
        }
      }
    }
    allContentfulList {
      edges {
        node {
          title
          items
        }
      }
    }
    allContentfulHero {
      edges {
        node {
          siteTitle
          heroTitle
          copy {
            copy
          }
          image {
            title
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
    allContentfulSlider {
      edges {
        node {
          slides {
            title
            copy {
              copy
            }
            image {
              title
              fluid {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    }
    allContentfulThemes {
      edges {
        node {
          themesList {
            title
          }
        }
      }
    }
  }
`;
