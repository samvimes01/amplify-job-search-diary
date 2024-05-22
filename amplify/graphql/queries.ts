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
    owner
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
    appliedAt
    coverLetterText
    createdAt
    cvFile
    cvText
    description
    id
    name
    owner
    reply
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
    gptApiKey
    hasApiKey
    id
    owner
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetPrefsQueryVariables, APITypes.GetPrefsQuery>;
export const getTodo = /* GraphQL */ `query GetTodo($id: ID!) {
  getTodo(id: $id) {
    content
    createdAt
    id
    owner
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetTodoQueryVariables, APITypes.GetTodoQuery>;
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
      owner
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
      appliedAt
      coverLetterText
      createdAt
      cvFile
      cvText
      description
      id
      name
      owner
      reply
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
      gptApiKey
      hasApiKey
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
export const listTodos = /* GraphQL */ `query ListTodos(
  $filter: ModelTodoFilterInput
  $limit: Int
  $nextToken: String
) {
  listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      content
      createdAt
      id
      owner
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListTodosQueryVariables, APITypes.ListTodosQuery>;
