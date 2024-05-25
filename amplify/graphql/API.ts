/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CvTexts = {
  __typename: "CvTexts",
  createdAt: string,
  file: string,
  id: string,
  text?: string | null,
  updatedAt: string,
};

export type JobItem = {
  __typename: "JobItem",
  company?: string | null,
  coverLetterText?: string | null,
  createdAt: string,
  cvFile?: string | null,
  cvText?: string | null,
  description?: string | null,
  id: string,
  link?: string | null,
  name: string,
  owner?: string | null,
  status?: JobStatus | null,
  updatedAt: string,
};

export enum JobStatus {
  applied = "applied",
  interview = "interview",
  new = "new",
  offer = "offer",
  rejected = "rejected",
}


export type Prefs = {
  __typename: "Prefs",
  createdAt: string,
  fullName?: string | null,
  id: string,
  owner?: string | null,
  updatedAt: string,
};

export type ModelCvTextsFilterInput = {
  and?: Array< ModelCvTextsFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  file?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelCvTextsFilterInput | null,
  or?: Array< ModelCvTextsFilterInput | null > | null,
  text?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  _null = "_null",
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
}


export type ModelSizeInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelIDInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export type ModelCvTextsConnection = {
  __typename: "ModelCvTextsConnection",
  items:  Array<CvTexts | null >,
  nextToken?: string | null,
};

export type ModelJobItemFilterInput = {
  and?: Array< ModelJobItemFilterInput | null > | null,
  company?: ModelStringInput | null,
  coverLetterText?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  cvFile?: ModelStringInput | null,
  cvText?: ModelStringInput | null,
  description?: ModelStringInput | null,
  id?: ModelIDInput | null,
  link?: ModelStringInput | null,
  name?: ModelStringInput | null,
  not?: ModelJobItemFilterInput | null,
  or?: Array< ModelJobItemFilterInput | null > | null,
  owner?: ModelStringInput | null,
  status?: ModelJobStatusInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelJobStatusInput = {
  eq?: JobStatus | null,
  ne?: JobStatus | null,
};

export type ModelJobItemConnection = {
  __typename: "ModelJobItemConnection",
  items:  Array<JobItem | null >,
  nextToken?: string | null,
};

export type ModelPrefsFilterInput = {
  and?: Array< ModelPrefsFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  fullName?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelPrefsFilterInput | null,
  or?: Array< ModelPrefsFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelPrefsConnection = {
  __typename: "ModelPrefsConnection",
  items:  Array<Prefs | null >,
  nextToken?: string | null,
};

export type ModelCvTextsConditionInput = {
  and?: Array< ModelCvTextsConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  file?: ModelStringInput | null,
  not?: ModelCvTextsConditionInput | null,
  or?: Array< ModelCvTextsConditionInput | null > | null,
  text?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateCvTextsInput = {
  file: string,
  id?: string | null,
  text?: string | null,
};

export type ModelJobItemConditionInput = {
  and?: Array< ModelJobItemConditionInput | null > | null,
  company?: ModelStringInput | null,
  coverLetterText?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  cvFile?: ModelStringInput | null,
  cvText?: ModelStringInput | null,
  description?: ModelStringInput | null,
  link?: ModelStringInput | null,
  name?: ModelStringInput | null,
  not?: ModelJobItemConditionInput | null,
  or?: Array< ModelJobItemConditionInput | null > | null,
  owner?: ModelStringInput | null,
  status?: ModelJobStatusInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateJobItemInput = {
  company?: string | null,
  coverLetterText?: string | null,
  createdAt: string,
  cvFile?: string | null,
  cvText?: string | null,
  description?: string | null,
  id?: string | null,
  link?: string | null,
  name: string,
  status?: JobStatus | null,
};

export type ModelPrefsConditionInput = {
  and?: Array< ModelPrefsConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  fullName?: ModelStringInput | null,
  not?: ModelPrefsConditionInput | null,
  or?: Array< ModelPrefsConditionInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreatePrefsInput = {
  fullName?: string | null,
  id?: string | null,
};

export type DeleteCvTextsInput = {
  id: string,
};

export type DeleteJobItemInput = {
  id: string,
};

export type DeletePrefsInput = {
  id: string,
};

export type UpdateCvTextsInput = {
  file?: string | null,
  id: string,
  text?: string | null,
};

export type UpdateJobItemInput = {
  company?: string | null,
  coverLetterText?: string | null,
  createdAt?: string | null,
  cvFile?: string | null,
  cvText?: string | null,
  description?: string | null,
  id: string,
  link?: string | null,
  name?: string | null,
  status?: JobStatus | null,
};

export type UpdatePrefsInput = {
  fullName?: string | null,
  id: string,
};

export type ModelSubscriptionCvTextsFilterInput = {
  and?: Array< ModelSubscriptionCvTextsFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  file?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionCvTextsFilterInput | null > | null,
  text?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionStringInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIDInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionJobItemFilterInput = {
  and?: Array< ModelSubscriptionJobItemFilterInput | null > | null,
  company?: ModelSubscriptionStringInput | null,
  coverLetterText?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  cvFile?: ModelSubscriptionStringInput | null,
  cvText?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  link?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionJobItemFilterInput | null > | null,
  owner?: ModelStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionPrefsFilterInput = {
  and?: Array< ModelSubscriptionPrefsFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  fullName?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionPrefsFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type GenerateCoverQueryVariables = {
  prompt: string,
};

export type GenerateCoverQuery = {
  generateCover?: string | null,
};

export type GetCvTextsQueryVariables = {
  id: string,
};

export type GetCvTextsQuery = {
  getCvTexts?:  {
    __typename: "CvTexts",
    createdAt: string,
    file: string,
    id: string,
    text?: string | null,
    updatedAt: string,
  } | null,
};

export type GetJobItemQueryVariables = {
  id: string,
};

export type GetJobItemQuery = {
  getJobItem?:  {
    __typename: "JobItem",
    company?: string | null,
    coverLetterText?: string | null,
    createdAt: string,
    cvFile?: string | null,
    cvText?: string | null,
    description?: string | null,
    id: string,
    link?: string | null,
    name: string,
    owner?: string | null,
    status?: JobStatus | null,
    updatedAt: string,
  } | null,
};

export type GetPrefsQueryVariables = {
  id: string,
};

export type GetPrefsQuery = {
  getPrefs?:  {
    __typename: "Prefs",
    createdAt: string,
    fullName?: string | null,
    id: string,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type ListCvTextsQueryVariables = {
  filter?: ModelCvTextsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCvTextsQuery = {
  listCvTexts?:  {
    __typename: "ModelCvTextsConnection",
    items:  Array< {
      __typename: "CvTexts",
      createdAt: string,
      file: string,
      id: string,
      text?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListJobItemsQueryVariables = {
  filter?: ModelJobItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListJobItemsQuery = {
  listJobItems?:  {
    __typename: "ModelJobItemConnection",
    items:  Array< {
      __typename: "JobItem",
      company?: string | null,
      coverLetterText?: string | null,
      createdAt: string,
      cvFile?: string | null,
      cvText?: string | null,
      description?: string | null,
      id: string,
      link?: string | null,
      name: string,
      owner?: string | null,
      status?: JobStatus | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListPrefsQueryVariables = {
  filter?: ModelPrefsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPrefsQuery = {
  listPrefs?:  {
    __typename: "ModelPrefsConnection",
    items:  Array< {
      __typename: "Prefs",
      createdAt: string,
      fullName?: string | null,
      id: string,
      owner?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CreateCvTextsMutationVariables = {
  condition?: ModelCvTextsConditionInput | null,
  input: CreateCvTextsInput,
};

export type CreateCvTextsMutation = {
  createCvTexts?:  {
    __typename: "CvTexts",
    createdAt: string,
    file: string,
    id: string,
    text?: string | null,
    updatedAt: string,
  } | null,
};

export type CreateJobItemMutationVariables = {
  condition?: ModelJobItemConditionInput | null,
  input: CreateJobItemInput,
};

export type CreateJobItemMutation = {
  createJobItem?:  {
    __typename: "JobItem",
    company?: string | null,
    coverLetterText?: string | null,
    createdAt: string,
    cvFile?: string | null,
    cvText?: string | null,
    description?: string | null,
    id: string,
    link?: string | null,
    name: string,
    owner?: string | null,
    status?: JobStatus | null,
    updatedAt: string,
  } | null,
};

export type CreatePrefsMutationVariables = {
  condition?: ModelPrefsConditionInput | null,
  input: CreatePrefsInput,
};

export type CreatePrefsMutation = {
  createPrefs?:  {
    __typename: "Prefs",
    createdAt: string,
    fullName?: string | null,
    id: string,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteCvTextsMutationVariables = {
  condition?: ModelCvTextsConditionInput | null,
  input: DeleteCvTextsInput,
};

export type DeleteCvTextsMutation = {
  deleteCvTexts?:  {
    __typename: "CvTexts",
    createdAt: string,
    file: string,
    id: string,
    text?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteJobItemMutationVariables = {
  condition?: ModelJobItemConditionInput | null,
  input: DeleteJobItemInput,
};

export type DeleteJobItemMutation = {
  deleteJobItem?:  {
    __typename: "JobItem",
    company?: string | null,
    coverLetterText?: string | null,
    createdAt: string,
    cvFile?: string | null,
    cvText?: string | null,
    description?: string | null,
    id: string,
    link?: string | null,
    name: string,
    owner?: string | null,
    status?: JobStatus | null,
    updatedAt: string,
  } | null,
};

export type DeletePrefsMutationVariables = {
  condition?: ModelPrefsConditionInput | null,
  input: DeletePrefsInput,
};

export type DeletePrefsMutation = {
  deletePrefs?:  {
    __typename: "Prefs",
    createdAt: string,
    fullName?: string | null,
    id: string,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateCvTextsMutationVariables = {
  condition?: ModelCvTextsConditionInput | null,
  input: UpdateCvTextsInput,
};

export type UpdateCvTextsMutation = {
  updateCvTexts?:  {
    __typename: "CvTexts",
    createdAt: string,
    file: string,
    id: string,
    text?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateJobItemMutationVariables = {
  condition?: ModelJobItemConditionInput | null,
  input: UpdateJobItemInput,
};

export type UpdateJobItemMutation = {
  updateJobItem?:  {
    __typename: "JobItem",
    company?: string | null,
    coverLetterText?: string | null,
    createdAt: string,
    cvFile?: string | null,
    cvText?: string | null,
    description?: string | null,
    id: string,
    link?: string | null,
    name: string,
    owner?: string | null,
    status?: JobStatus | null,
    updatedAt: string,
  } | null,
};

export type UpdatePrefsMutationVariables = {
  condition?: ModelPrefsConditionInput | null,
  input: UpdatePrefsInput,
};

export type UpdatePrefsMutation = {
  updatePrefs?:  {
    __typename: "Prefs",
    createdAt: string,
    fullName?: string | null,
    id: string,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateCvTextsSubscriptionVariables = {
  filter?: ModelSubscriptionCvTextsFilterInput | null,
};

export type OnCreateCvTextsSubscription = {
  onCreateCvTexts?:  {
    __typename: "CvTexts",
    createdAt: string,
    file: string,
    id: string,
    text?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateJobItemSubscriptionVariables = {
  filter?: ModelSubscriptionJobItemFilterInput | null,
  owner?: string | null,
};

export type OnCreateJobItemSubscription = {
  onCreateJobItem?:  {
    __typename: "JobItem",
    company?: string | null,
    coverLetterText?: string | null,
    createdAt: string,
    cvFile?: string | null,
    cvText?: string | null,
    description?: string | null,
    id: string,
    link?: string | null,
    name: string,
    owner?: string | null,
    status?: JobStatus | null,
    updatedAt: string,
  } | null,
};

export type OnCreatePrefsSubscriptionVariables = {
  filter?: ModelSubscriptionPrefsFilterInput | null,
  owner?: string | null,
};

export type OnCreatePrefsSubscription = {
  onCreatePrefs?:  {
    __typename: "Prefs",
    createdAt: string,
    fullName?: string | null,
    id: string,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteCvTextsSubscriptionVariables = {
  filter?: ModelSubscriptionCvTextsFilterInput | null,
};

export type OnDeleteCvTextsSubscription = {
  onDeleteCvTexts?:  {
    __typename: "CvTexts",
    createdAt: string,
    file: string,
    id: string,
    text?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteJobItemSubscriptionVariables = {
  filter?: ModelSubscriptionJobItemFilterInput | null,
  owner?: string | null,
};

export type OnDeleteJobItemSubscription = {
  onDeleteJobItem?:  {
    __typename: "JobItem",
    company?: string | null,
    coverLetterText?: string | null,
    createdAt: string,
    cvFile?: string | null,
    cvText?: string | null,
    description?: string | null,
    id: string,
    link?: string | null,
    name: string,
    owner?: string | null,
    status?: JobStatus | null,
    updatedAt: string,
  } | null,
};

export type OnDeletePrefsSubscriptionVariables = {
  filter?: ModelSubscriptionPrefsFilterInput | null,
  owner?: string | null,
};

export type OnDeletePrefsSubscription = {
  onDeletePrefs?:  {
    __typename: "Prefs",
    createdAt: string,
    fullName?: string | null,
    id: string,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateCvTextsSubscriptionVariables = {
  filter?: ModelSubscriptionCvTextsFilterInput | null,
};

export type OnUpdateCvTextsSubscription = {
  onUpdateCvTexts?:  {
    __typename: "CvTexts",
    createdAt: string,
    file: string,
    id: string,
    text?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateJobItemSubscriptionVariables = {
  filter?: ModelSubscriptionJobItemFilterInput | null,
  owner?: string | null,
};

export type OnUpdateJobItemSubscription = {
  onUpdateJobItem?:  {
    __typename: "JobItem",
    company?: string | null,
    coverLetterText?: string | null,
    createdAt: string,
    cvFile?: string | null,
    cvText?: string | null,
    description?: string | null,
    id: string,
    link?: string | null,
    name: string,
    owner?: string | null,
    status?: JobStatus | null,
    updatedAt: string,
  } | null,
};

export type OnUpdatePrefsSubscriptionVariables = {
  filter?: ModelSubscriptionPrefsFilterInput | null,
  owner?: string | null,
};

export type OnUpdatePrefsSubscription = {
  onUpdatePrefs?:  {
    __typename: "Prefs",
    createdAt: string,
    fullName?: string | null,
    id: string,
    owner?: string | null,
    updatedAt: string,
  } | null,
};
