/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const generateCover = /* GraphQL */ `query GenerateCover($prompt: String!) {
  generateCover(prompt: $prompt)
}
` as GeneratedQuery<
  APITypes.GenerateCoverQueryVariables,
  APITypes.GenerateCoverQuery
>;
export const getCvTexts = /* GraphQL */ `query GetCvTexts($id: ID!) {
  getCvTexts(id: $id) {
    createdAt
    file
    id
    text
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCvTextsQueryVariables,
  APITypes.GetCvTextsQuery
>;
export const getJobItem = /* GraphQL */ `query GetJobItem($id: ID!) {
  getJobItem(id: $id) {
    company
    coverLetterText
    createdAt
    cvFile
    cvText
    description
    id
    link
    name
    owner
    status
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetJobItemQueryVariables,
  APITypes.GetJobItemQuery
>;
export const getPrefs = /* GraphQL */ `query GetPrefs($id: ID!) {
  getPrefs(id: $id) {
    createdAt
    fullName
    id
    owner
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetPrefsQueryVariables, APITypes.GetPrefsQuery>;
export const listCvTexts = /* GraphQL */ `query ListCvTexts(
  $filter: ModelCvTextsFilterInput
  $limit: Int
  $nextToken: String
) {
  listCvTexts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      file
      id
      text
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCvTextsQueryVariables,
  APITypes.ListCvTextsQuery
>;
export const listJobItems = /* GraphQL */ `query ListJobItems(
  $filter: ModelJobItemFilterInput
  $limit: Int
  $nextToken: String
) {
  listJobItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      company
      coverLetterText
      createdAt
      cvFile
      cvText
      description
      id
      link
      name
      owner
      status
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListJobItemsQueryVariables,
  APITypes.ListJobItemsQuery
>;
export const listPrefs = /* GraphQL */ `query ListPrefs(
  $filter: ModelPrefsFilterInput
  $limit: Int
  $nextToken: String
) {
  listPrefs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      fullName
      id
      owner
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListPrefsQueryVariables, APITypes.ListPrefsQuery>;
