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
    allContentfulPerson {
      edges {
        node {
          name
          title
        }
      }
    }
  }
`;
