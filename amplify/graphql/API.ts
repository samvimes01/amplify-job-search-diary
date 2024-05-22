/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CvTexts = {
  __typename: "CvTexts",
  createdAt: string,
  file: string,
  id: string,
  owner?: string | null,
  text?: string | null,
  updatedAt: string,
};

export type JobItem = {
  __typename: "JobItem",
  appliedAt?: string | null,
  coverLetterText?: string | null,
  createdAt: string,
  cvFile?: string | null,
  cvText?: string | null,
  description?: string | null,
  id: string,
  name: string,
  owner?: string | null,
  reply?: string | null,
  status?: string | null,
  updatedAt: string,
};

export type Prefs = {
  __typename: "Prefs",
  createdAt: string,
  fullName?: string | null,
  gptApiKey?: string | null,
  hasApiKey?: boolean | null,
  id: string,
  owner?: string | null,
  updatedAt: string,
};

export type Todo = {
  __typename: "Todo",
  content?: string | null,
  createdAt: string,
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
  owner?: ModelStringInput | null,
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
  appliedAt?: ModelStringInput | null,
  coverLetterText?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  cvFile?: ModelStringInput | null,
  cvText?: ModelStringInput | null,
  description?: ModelStringInput | null,
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  not?: ModelJobItemFilterInput | null,
  or?: Array< ModelJobItemFilterInput | null > | null,
  owner?: ModelStringInput | null,
  reply?: ModelStringInput | null,
  status?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
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
  gptApiKey?: ModelStringInput | null,
  hasApiKey?: ModelBooleanInput | null,
  id?: ModelIDInput | null,
  not?: ModelPrefsFilterInput | null,
  or?: Array< ModelPrefsFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelBooleanInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  eq?: boolean | null,
  ne?: boolean | null,
};

export type ModelPrefsConnection = {
  __typename: "ModelPrefsConnection",
  items:  Array<Prefs | null >,
  nextToken?: string | null,
};

export type ModelTodoFilterInput = {
  and?: Array< ModelTodoFilterInput | null > | null,
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelTodoFilterInput | null,
  or?: Array< ModelTodoFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelTodoConnection = {
  __typename: "ModelTodoConnection",
  items:  Array<Todo | null >,
  nextToken?: string | null,
};

export type ModelCvTextsConditionInput = {
  and?: Array< ModelCvTextsConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  file?: ModelStringInput | null,
  not?: ModelCvTextsConditionInput | null,
  or?: Array< ModelCvTextsConditionInput | null > | null,
  owner?: ModelStringInput | null,
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
  appliedAt?: ModelStringInput | null,
  coverLetterText?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  cvFile?: ModelStringInput | null,
  cvText?: ModelStringInput | null,
  description?: ModelStringInput | null,
  name?: ModelStringInput | null,
  not?: ModelJobItemConditionInput | null,
  or?: Array< ModelJobItemConditionInput | null > | null,
  owner?: ModelStringInput | null,
  reply?: ModelStringInput | null,
  status?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateJobItemInput = {
  appliedAt?: string | null,
  coverLetterText?: string | null,
  createdAt: string,
  cvFile?: string | null,
  cvText?: string | null,
  description?: string | null,
  id?: string | null,
  name: string,
  reply?: string | null,
  status?: string | null,
};

export type ModelPrefsConditionInput = {
  and?: Array< ModelPrefsConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  fullName?: ModelStringInput | null,
  gptApiKey?: ModelStringInput | null,
  hasApiKey?: ModelBooleanInput | null,
  not?: ModelPrefsConditionInput | null,
  or?: Array< ModelPrefsConditionInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreatePrefsInput = {
  fullName?: string | null,
  gptApiKey?: string | null,
  hasApiKey?: boolean | null,
  id?: string | null,
};

export type ModelTodoConditionInput = {
  and?: Array< ModelTodoConditionInput | null > | null,
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  not?: ModelTodoConditionInput | null,
  or?: Array< ModelTodoConditionInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateTodoInput = {
  content?: string | null,
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

export type DeleteTodoInput = {
  id: string,
};

export type UpdateCvTextsInput = {
  file?: string | null,
  id: string,
  text?: string | null,
};

export type UpdateJobItemInput = {
  appliedAt?: string | null,
  coverLetterText?: string | null,
  createdAt?: string | null,
  cvFile?: string | null,
  cvText?: string | null,
  description?: string | null,
  id: string,
  name?: string | null,
  reply?: string | null,
  status?: string | null,
};

export type UpdatePrefsInput = {
  fullName?: string | null,
  gptApiKey?: string | null,
  hasApiKey?: boolean | null,
  id: string,
};

export type UpdateTodoInput = {
  content?: string | null,
  id: string,
};

export type ModelSubscriptionCvTextsFilterInput = {
  and?: Array< ModelSubscriptionCvTextsFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  file?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionCvTextsFilterInput | null > | null,
  owner?: ModelStringInput | null,
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
  appliedAt?: ModelSubscriptionStringInput | null,
  coverLetterText?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  cvFile?: ModelSubscriptionStringInput | null,
  cvText?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionJobItemFilterInput | null > | null,
  owner?: ModelStringInput | null,
  reply?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionPrefsFilterInput = {
  and?: Array< ModelSubscriptionPrefsFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  fullName?: ModelSubscriptionStringInput | null,
  gptApiKey?: ModelSubscriptionStringInput | null,
  hasApiKey?: ModelSubscriptionBooleanInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionPrefsFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionBooleanInput = {
  eq?: boolean | null,
  ne?: boolean | null,
};

export type ModelSubscriptionTodoFilterInput = {
  and?: Array< ModelSubscriptionTodoFilterInput | null > | null,
  content?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionTodoFilterInput | null > | null,
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
    owner?: string | null,
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
    appliedAt?: string | null,
    coverLetterText?: string | null,
    createdAt: string,
    cvFile?: string | null,
    cvText?: string | null,
    description?: string | null,
    id: string,
    name: string,
    owner?: string | null,
    reply?: string | null,
    status?: string | null,
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
    gptApiKey?: string | null,
    hasApiKey?: boolean | null,
    id: string,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type GetTodoQueryVariables = {
  id: string,
};

export type GetTodoQuery = {
  getTodo?:  {
    __typename: "Todo",
    content?: string | null,
    createdAt: string,
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
      owner?: string | null,
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
      appliedAt?: string | null,
      coverLetterText?: string | null,
      createdAt: string,
      cvFile?: string | null,
      cvText?: string | null,
      description?: string | null,
      id: string,
      name: string,
      owner?: string | null,
      reply?: string | null,
      status?: string | null,
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
      gptApiKey?: string | null,
      hasApiKey?: boolean | null,
      id: string,
      owner?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListTodosQueryVariables = {
  filter?: ModelTodoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTodosQuery = {
  listTodos?:  {
    __typename: "ModelTodoConnection",
    items:  Array< {
      __typename: "Todo",
      content?: string | null,
      createdAt: string,
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
    owner?: string | null,
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
    appliedAt?: string | null,
    coverLetterText?: string | null,
    createdAt: string,
    cvFile?: string | null,
    cvText?: string | null,
    description?: string | null,
    id: string,
    name: string,
    owner?: string | null,
    reply?: string | null,
    status?: string | null,
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
    gptApiKey?: string | null,
    hasApiKey?: boolean | null,
    id: string,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type CreateTodoMutationVariables = {
  condition?: ModelTodoConditionInput | null,
  input: CreateTodoInput,
};

export type CreateTodoMutation = {
  createTodo?:  {
    __typename: "Todo",
    content?: string | null,
    createdAt: string,
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
    owner?: string | null,
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
    appliedAt?: string | null,
    coverLetterText?: string | null,
    createdAt: string,
    cvFile?: string | null,
    cvText?: string | null,
    description?: string | null,
    id: string,
    name: string,
    owner?: string | null,
    reply?: string | null,
    status?: string | null,
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
    gptApiKey?: string | null,
    hasApiKey?: boolean | null,
    id: string,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteTodoMutationVariables = {
  condition?: ModelTodoConditionInput | null,
  input: DeleteTodoInput,
};

export type DeleteTodoMutation = {
  deleteTodo?:  {
    __typename: "Todo",
    content?: string | null,
    createdAt: string,
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
    owner?: string | null,
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
    appliedAt?: string | null,
    coverLetterText?: string | null,
    createdAt: string,
    cvFile?: string | null,
    cvText?: string | null,
    description?: string | null,
    id: string,
    name: string,
    owner?: string | null,
    reply?: string | null,
    status?: string | null,
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
    gptApiKey?: string | null,
    hasApiKey?: boolean | null,
    id: string,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateTodoMutationVariables = {
  condition?: ModelTodoConditionInput | null,
  input: UpdateTodoInput,
};

export type UpdateTodoMutation = {
  updateTodo?:  {
    __typename: "Todo",
    content?: string | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateCvTextsSubscriptionVariables = {
  filter?: ModelSubscriptionCvTextsFilterInput | null,
  owner?: string | null,
};

export type OnCreateCvTextsSubscription = {
  onCreateCvTexts?:  {
    __typename: "CvTexts",
    createdAt: string,
    file: string,
    id: string,
    owner?: string | null,
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
    appliedAt?: string | null,
    coverLetterText?: string | null,
    createdAt: string,
    cvFile?: string | null,
    cvText?: string | null,
    description?: string | null,
    id: string,
    name: string,
    owner?: string | null,
    reply?: string | null,
    status?: string | null,
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
    gptApiKey?: string | null,
    hasApiKey?: boolean | null,
    id: string,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
  owner?: string | null,
};

export type OnCreateTodoSubscription = {
  onCreateTodo?:  {
    __typename: "Todo",
    content?: string | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteCvTextsSubscriptionVariables = {
  filter?: ModelSubscriptionCvTextsFilterInput | null,
  owner?: string | null,
};

export type OnDeleteCvTextsSubscription = {
  onDeleteCvTexts?:  {
    __typename: "CvTexts",
    createdAt: string,
    file: string,
    id: string,
    owner?: string | null,
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
    appliedAt?: string | null,
    coverLetterText?: string | null,
    createdAt: string,
    cvFile?: string | null,
    cvText?: string | null,
    description?: string | null,
    id: string,
    name: string,
    owner?: string | null,
    reply?: string | null,
    status?: string | null,
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
    gptApiKey?: string | null,
    hasApiKey?: boolean | null,
    id: string,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
  owner?: string | null,
};

export type OnDeleteTodoSubscription = {
  onDeleteTodo?:  {
    __typename: "Todo",
    content?: string | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateCvTextsSubscriptionVariables = {
  filter?: ModelSubscriptionCvTextsFilterInput | null,
  owner?: string | null,
};

export type OnUpdateCvTextsSubscription = {
  onUpdateCvTexts?:  {
    __typename: "CvTexts",
    createdAt: string,
    file: string,
    id: string,
    owner?: string | null,
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
    appliedAt?: string | null,
    coverLetterText?: string | null,
    createdAt: string,
    cvFile?: string | null,
    cvText?: string | null,
    description?: string | null,
    id: string,
    name: string,
    owner?: string | null,
    reply?: string | null,
    status?: string | null,
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
    gptApiKey?: string | null,
    hasApiKey?: boolean | null,
    id: string,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
  owner?: string | null,
};

export type OnUpdateTodoSubscription = {
  onUpdateTodo?:  {
    __typename: "Todo",
    content?: string | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    updatedAt: string,
  } | null,
};
