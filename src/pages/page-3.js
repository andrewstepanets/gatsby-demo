import React from "react";
import { StaticQuery, graphql, Link  } from "gatsby";

import Layout from "../components/layout"

const getImagedata = graphql`
      {
          allFile {
            totalCount
            edges {
                node {
                    id
                    absolutePath
                    relativePath
                    size
                    extension
                    birthtime
                }
            }
        }
      }
  `;


export default () => (
    <Layout>
        <h1>Hello from Page 3</h1>
        <h3>Image file Data</h3>
        <StaticQuery 
            query={getImagedata}
            render={ data => (
                <table>
                    <thead>
                        <tr>
                            <th>Relative Path</th>
                            <th>Size of Image</th>
                            <th>Extension</th>
                            <th>Birthtime of Image</th>
                        </tr>
                    </thead>
                    <tbody>
                            {data.allFile.edges.map(({ node }, index) => (
                                <tr key={index}>
                                    <td>{node.relativePath}</td>
                                    <td>{node.size}</td>
                                    <td>{node.size}</td>
                                    <td>{node.extension}</td>
                                    <td>{node.birthtime}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            )}
        />
        <Link to="/">Go back to the homepage</Link><br />
        <Link to="/page-2/">Go to page 2</Link>
    </Layout>
)