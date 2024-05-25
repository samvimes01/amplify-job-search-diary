/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createCvTexts = /* GraphQL */ `mutation CreateCvTexts(
  $condition: ModelCvTextsConditionInput
  $input: CreateCvTextsInput!
) {
  createCvTexts(condition: $condition, input: $input) {
    createdAt
    file
    id
    text
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCvTextsMutationVariables,
  APITypes.CreateCvTextsMutation
>;
export const createJobItem = /* GraphQL */ `mutation CreateJobItem(
  $condition: ModelJobItemConditionInput
  $input: CreateJobItemInput!
) {
  createJobItem(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateJobItemMutationVariables,
  APITypes.CreateJobItemMutation
>;
export const createPrefs = /* GraphQL */ `mutation CreatePrefs(
  $condition: ModelPrefsConditionInput
  $input: CreatePrefsInput!
) {
  createPrefs(condition: $condition, input: $input) {
    createdAt
    fullName
    id
    owner
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreatePrefsMutationVariables,
  APITypes.CreatePrefsMutation
>;
export const deleteCvTexts = /* GraphQL */ `mutation DeleteCvTexts(
  $condition: ModelCvTextsConditionInput
  $input: DeleteCvTextsInput!
) {
  deleteCvTexts(condition: $condition, input: $input) {
    createdAt
    file
    id
    text
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCvTextsMutationVariables,
  APITypes.DeleteCvTextsMutation
>;
export const deleteJobItem = /* GraphQL */ `mutation DeleteJobItem(
  $condition: ModelJobItemConditionInput
  $input: DeleteJobItemInput!
) {
  deleteJobItem(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteJobItemMutationVariables,
  APITypes.DeleteJobItemMutation
>;
export const deletePrefs = /* GraphQL */ `mutation DeletePrefs(
  $condition: ModelPrefsConditionInput
  $input: DeletePrefsInput!
) {
  deletePrefs(condition: $condition, input: $input) {
    createdAt
    fullName
    id
    owner
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeletePrefsMutationVariables,
  APITypes.DeletePrefsMutation
>;
export const updateCvTexts = /* GraphQL */ `mutation UpdateCvTexts(
  $condition: ModelCvTextsConditionInput
  $input: UpdateCvTextsInput!
) {
  updateCvTexts(condition: $condition, input: $input) {
    createdAt
    file
    id
    text
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCvTextsMutationVariables,
  APITypes.UpdateCvTextsMutation
>;
export const updateJobItem = /* GraphQL */ `mutation UpdateJobItem(
  $condition: ModelJobItemConditionInput
  $input: UpdateJobItemInput!
) {
  updateJobItem(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateJobItemMutationVariables,
  APITypes.UpdateJobItemMutation
>;
export const updatePrefs = /* GraphQL */ `mutation UpdatePrefs(
  $condition: ModelPrefsConditionInput
  $input: UpdatePrefsInput!
) {
  updatePrefs(condition: $condition, input: $input) {
    createdAt
    fullName
    id
    owner
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdatePrefsMutationVariables,
  APITypes.UpdatePrefsMutation
>;
