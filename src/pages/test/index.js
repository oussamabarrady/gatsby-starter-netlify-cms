import React from "react";
import PropTypes from "prop-types";
import Layout from "../../components/Layout";
import { SEO } from '../../components/SEO'

export default function Index({ data }) {
  console.log(data);
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
       <SEO title="Test" type="naps" location="/naps" />
      <div>
        {edges &&
          edges.map((test) => {
            return (
              <div key={test.node.frontmatter.title}>
                {test.node.frontmatter.custom_field}
              </div>
            );
          })}
      </div>
    </Layout>
  );
}

Index.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.object,
    }),
  }),
};

export const pageQuery = graphql`
  query IndexPage {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "test-post" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            custom_field
          }
        }
      }
    }
  }
`;
