/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateCvTexts = /* GraphQL */ `subscription OnCreateCvTexts(
  $filter: ModelSubscriptionCvTextsFilterInput
  $owner: String
) {
  onCreateCvTexts(filter: $filter, owner: $owner) {
    createdAt
    file
    id
    owner
    text
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCvTextsSubscriptionVariables,
  APITypes.OnCreateCvTextsSubscription
>;
export const onCreateJobItem = /* GraphQL */ `subscription OnCreateJobItem(
  $filter: ModelSubscriptionJobItemFilterInput
  $owner: String
) {
  onCreateJobItem(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateJobItemSubscriptionVariables,
  APITypes.OnCreateJobItemSubscription
>;
export const onCreatePrefs = /* GraphQL */ `subscription OnCreatePrefs(
  $filter: ModelSubscriptionPrefsFilterInput
  $owner: String
) {
  onCreatePrefs(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreatePrefsSubscriptionVariables,
  APITypes.OnCreatePrefsSubscription
>;
export const onCreateTodo = /* GraphQL */ `subscription OnCreateTodo(
  $filter: ModelSubscriptionTodoFilterInput
  $owner: String
) {
  onCreateTodo(filter: $filter, owner: $owner) {
    content
    createdAt
    id
    owner
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateTodoSubscriptionVariables,
  APITypes.OnCreateTodoSubscription
>;
export const onDeleteCvTexts = /* GraphQL */ `subscription OnDeleteCvTexts(
  $filter: ModelSubscriptionCvTextsFilterInput
  $owner: String
) {
  onDeleteCvTexts(filter: $filter, owner: $owner) {
    createdAt
    file
    id
    owner
    text
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCvTextsSubscriptionVariables,
  APITypes.OnDeleteCvTextsSubscription
>;
export const onDeleteJobItem = /* GraphQL */ `subscription OnDeleteJobItem(
  $filter: ModelSubscriptionJobItemFilterInput
  $owner: String
) {
  onDeleteJobItem(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteJobItemSubscriptionVariables,
  APITypes.OnDeleteJobItemSubscription
>;
export const onDeletePrefs = /* GraphQL */ `subscription OnDeletePrefs(
  $filter: ModelSubscriptionPrefsFilterInput
  $owner: String
) {
  onDeletePrefs(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeletePrefsSubscriptionVariables,
  APITypes.OnDeletePrefsSubscription
>;
export const onDeleteTodo = /* GraphQL */ `subscription OnDeleteTodo(
  $filter: ModelSubscriptionTodoFilterInput
  $owner: String
) {
  onDeleteTodo(filter: $filter, owner: $owner) {
    content
    createdAt
    id
    owner
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteTodoSubscriptionVariables,
  APITypes.OnDeleteTodoSubscription
>;
export const onUpdateCvTexts = /* GraphQL */ `subscription OnUpdateCvTexts(
  $filter: ModelSubscriptionCvTextsFilterInput
  $owner: String
) {
  onUpdateCvTexts(filter: $filter, owner: $owner) {
    createdAt
    file
    id
    owner
    text
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCvTextsSubscriptionVariables,
  APITypes.OnUpdateCvTextsSubscription
>;
export const onUpdateJobItem = /* GraphQL */ `subscription OnUpdateJobItem(
  $filter: ModelSubscriptionJobItemFilterInput
  $owner: String
) {
  onUpdateJobItem(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateJobItemSubscriptionVariables,
  APITypes.OnUpdateJobItemSubscription
>;
export const onUpdatePrefs = /* GraphQL */ `subscription OnUpdatePrefs(
  $filter: ModelSubscriptionPrefsFilterInput
  $owner: String
) {
  onUpdatePrefs(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdatePrefsSubscriptionVariables,
  APITypes.OnUpdatePrefsSubscription
>;
export const onUpdateTodo = /* GraphQL */ `subscription OnUpdateTodo(
  $filter: ModelSubscriptionTodoFilterInput
  $owner: String
) {
  onUpdateTodo(filter: $filter, owner: $owner) {
    content
    createdAt
    id
    owner
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateTodoSubscriptionVariables,
  APITypes.OnUpdateTodoSubscription
>;
