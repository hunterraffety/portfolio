// lib/queries.ts

import { gql } from '@apollo/client';

export const GET_POSTS = gql`
  query GetPosts {
    posts(orderBy: publishedDate_DESC) {
      id
      title
      slug
      excerpt
      coverImage {
        url
      }
      publishedDate
    }
  }
`;

export const GET_POST = gql`
  query GetPost($slug: String!) {
    post(where: { slug: $slug }) {
      id
      title
      content {
        html
      }
      coverImage {
        url
      }
      publishedDate
    }
  }
`;
