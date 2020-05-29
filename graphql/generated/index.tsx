import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Date custom scalar type */
  Date: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Answer = {
  __typename?: 'Answer';
  id: Scalars['ID'];
  user?: Maybe<User>;
  option: Option;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type CreateAnswerInput = {
  optionId: Scalars['ID'];
};

export type CreateOptionInput = {
  text: Scalars['String'];
};

export type CreateQuestionInput = {
  text: Scalars['String'];
  options: Array<CreateOptionInput>;
};

export type CreateSurveyInput = {
  title: Scalars['String'];
  published: Scalars['Boolean'];
  questions: Array<CreateQuestionInput>;
};

export type CreateUserInput = {
  email: Scalars['String'];
  username: Scalars['String'];
  fullName: Scalars['String'];
  password: Scalars['String'];
};


export type LoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  _empty?: Maybe<Scalars['String']>;
  createAnswer: Answer;
  createSurvey: Survey;
  closeSurvey: Scalars['Boolean'];
  signedUser?: Maybe<Scalars['String']>;
  loggedUser?: Maybe<Scalars['String']>;
};


export type MutationCreateAnswerArgs = {
  input: CreateAnswerInput;
};


export type MutationCreateSurveyArgs = {
  input: CreateSurveyInput;
};


export type MutationCloseSurveyArgs = {
  id: Scalars['ID'];
};


export type MutationSignedUserArgs = {
  input: CreateUserInput;
};


export type MutationLoggedUserArgs = {
  input: LoginInput;
};

export type Option = {
  __typename?: 'Option';
  id: Scalars['ID'];
  text: Scalars['String'];
  question: Question;
  answers: Array<Answer>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type Query = {
  __typename?: 'Query';
  _empty?: Maybe<Scalars['String']>;
  answers?: Maybe<Array<Maybe<Answer>>>;
  survey?: Maybe<Survey>;
  surveys?: Maybe<Array<Maybe<Survey>>>;
  results?: Maybe<Result>;
  me?: Maybe<User>;
};


export type QuerySurveyArgs = {
  id: Scalars['ID'];
};


export type QueryResultsArgs = {
  id: Scalars['ID'];
};

export type Question = {
  __typename?: 'Question';
  id: Scalars['ID'];
  text: Scalars['String'];
  survey: Survey;
  options: Array<Option>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type QuestionAnswers = {
  __typename?: 'QuestionAnswers';
  answer: Option;
  count: Scalars['Float'];
};

export type QuestionResults = {
  __typename?: 'QuestionResults';
  question: Question;
  answers?: Maybe<Array<QuestionAnswers>>;
};

export type Result = {
  __typename?: 'Result';
  survey: Survey;
  questionsResults: Array<QuestionResults>;
  totalAnswers: Scalars['Float'];
};

export enum Role {
  User = 'USER',
  Admin = 'ADMIN'
}

export type Survey = {
  __typename?: 'Survey';
  id: Scalars['ID'];
  user?: Maybe<User>;
  title: Scalars['String'];
  questions: Array<Question>;
  opened: Scalars['Boolean'];
  published: Scalars['Boolean'];
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
};


export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  username: Scalars['String'];
  email: Scalars['String'];
  fullName: Scalars['String'];
  surveys?: Maybe<Array<Maybe<Survey>>>;
  answers?: Maybe<Array<Maybe<Answer>>>;
  role: Role;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type CloseSurveyMutationVariables = {
  id: Scalars['ID'];
};


export type CloseSurveyMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'closeSurvey'>
);

export type CreateAnswerMutationVariables = {
  optionId: Scalars['ID'];
};


export type CreateAnswerMutation = (
  { __typename?: 'Mutation' }
  & { createAnswer: (
    { __typename?: 'Answer' }
    & Pick<Answer, 'id'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username'>
    )>, option: (
      { __typename?: 'Option' }
      & Pick<Option, 'id' | 'text'>
    ) }
  ) }
);

export type CreateSurveyMutationVariables = {
  input: CreateSurveyInput;
};


export type CreateSurveyMutation = (
  { __typename?: 'Mutation' }
  & { createSurvey: (
    { __typename?: 'Survey' }
    & Pick<Survey, 'id' | 'title' | 'published'>
    & { questions: Array<(
      { __typename?: 'Question' }
      & Pick<Question, 'id' | 'text'>
      & { options: Array<(
        { __typename?: 'Option' }
        & Pick<Option, 'id' | 'text'>
      )> }
    )> }
  ) }
);

export type SignupMutationVariables = {
  username: Scalars['String'];
  fullname: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};


export type SignupMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'signedUser'>
);

export type LoginMutationVariables = {
  identifier: Scalars['String'];
  password: Scalars['String'];
};


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'loggedUser'>
);

export type CurrentUserQueryVariables = {};


export type CurrentUserQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'role'>
  )> }
);

export type ResultsQueryVariables = {
  id: Scalars['ID'];
};


export type ResultsQuery = (
  { __typename?: 'Query' }
  & { results?: Maybe<(
    { __typename?: 'Result' }
    & Pick<Result, 'totalAnswers'>
    & { survey: (
      { __typename?: 'Survey' }
      & Pick<Survey, 'id' | 'title'>
    ), questionsResults: Array<(
      { __typename?: 'QuestionResults' }
      & { question: (
        { __typename?: 'Question' }
        & Pick<Question, 'id' | 'text'>
      ), answers?: Maybe<Array<(
        { __typename?: 'QuestionAnswers' }
        & Pick<QuestionAnswers, 'count'>
        & { answer: (
          { __typename?: 'Option' }
          & Pick<Option, 'id' | 'text'>
        ) }
      )>> }
    )> }
  )> }
);

export type SurveysQueryVariables = {};


export type SurveysQuery = (
  { __typename?: 'Query' }
  & { surveys?: Maybe<Array<Maybe<(
    { __typename?: 'Survey' }
    & Pick<Survey, 'id' | 'title' | 'opened' | 'published'>
    & { questions: Array<(
      { __typename?: 'Question' }
      & Pick<Question, 'id' | 'text'>
      & { options: Array<(
        { __typename?: 'Option' }
        & Pick<Option, 'id' | 'text'>
      )> }
    )> }
  )>>> }
);


export const CloseSurveyDocument = gql`
    mutation CloseSurvey($id: ID!) {
  closeSurvey(id: $id)
}
    `;
export type CloseSurveyMutationFn = ApolloReactCommon.MutationFunction<CloseSurveyMutation, CloseSurveyMutationVariables>;

/**
 * __useCloseSurveyMutation__
 *
 * To run a mutation, you first call `useCloseSurveyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCloseSurveyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [closeSurveyMutation, { data, loading, error }] = useCloseSurveyMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCloseSurveyMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CloseSurveyMutation, CloseSurveyMutationVariables>) {
        return ApolloReactHooks.useMutation<CloseSurveyMutation, CloseSurveyMutationVariables>(CloseSurveyDocument, baseOptions);
      }
export type CloseSurveyMutationHookResult = ReturnType<typeof useCloseSurveyMutation>;
export type CloseSurveyMutationResult = ApolloReactCommon.MutationResult<CloseSurveyMutation>;
export type CloseSurveyMutationOptions = ApolloReactCommon.BaseMutationOptions<CloseSurveyMutation, CloseSurveyMutationVariables>;
export const CreateAnswerDocument = gql`
    mutation CreateAnswer($optionId: ID!) {
  createAnswer(input: {optionId: $optionId}) {
    id
    user {
      id
      username
    }
    option {
      id
      text
    }
  }
}
    `;
export type CreateAnswerMutationFn = ApolloReactCommon.MutationFunction<CreateAnswerMutation, CreateAnswerMutationVariables>;

/**
 * __useCreateAnswerMutation__
 *
 * To run a mutation, you first call `useCreateAnswerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAnswerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAnswerMutation, { data, loading, error }] = useCreateAnswerMutation({
 *   variables: {
 *      optionId: // value for 'optionId'
 *   },
 * });
 */
export function useCreateAnswerMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateAnswerMutation, CreateAnswerMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateAnswerMutation, CreateAnswerMutationVariables>(CreateAnswerDocument, baseOptions);
      }
export type CreateAnswerMutationHookResult = ReturnType<typeof useCreateAnswerMutation>;
export type CreateAnswerMutationResult = ApolloReactCommon.MutationResult<CreateAnswerMutation>;
export type CreateAnswerMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateAnswerMutation, CreateAnswerMutationVariables>;
export const CreateSurveyDocument = gql`
    mutation CreateSurvey($input: CreateSurveyInput!) {
  createSurvey(input: $input) {
    id
    title
    questions {
      id
      text
      options {
        id
        text
      }
    }
    published
  }
}
    `;
export type CreateSurveyMutationFn = ApolloReactCommon.MutationFunction<CreateSurveyMutation, CreateSurveyMutationVariables>;

/**
 * __useCreateSurveyMutation__
 *
 * To run a mutation, you first call `useCreateSurveyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSurveyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSurveyMutation, { data, loading, error }] = useCreateSurveyMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateSurveyMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateSurveyMutation, CreateSurveyMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateSurveyMutation, CreateSurveyMutationVariables>(CreateSurveyDocument, baseOptions);
      }
export type CreateSurveyMutationHookResult = ReturnType<typeof useCreateSurveyMutation>;
export type CreateSurveyMutationResult = ApolloReactCommon.MutationResult<CreateSurveyMutation>;
export type CreateSurveyMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateSurveyMutation, CreateSurveyMutationVariables>;
export const SignupDocument = gql`
    mutation Signup($username: String!, $fullname: String!, $email: String!, $password: String!) {
  signedUser(input: {username: $username, fullName: $fullname, email: $email, password: $password})
}
    `;
export type SignupMutationFn = ApolloReactCommon.MutationFunction<SignupMutation, SignupMutationVariables>;

/**
 * __useSignupMutation__
 *
 * To run a mutation, you first call `useSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupMutation, { data, loading, error }] = useSignupMutation({
 *   variables: {
 *      username: // value for 'username'
 *      fullname: // value for 'fullname'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignupMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SignupMutation, SignupMutationVariables>) {
        return ApolloReactHooks.useMutation<SignupMutation, SignupMutationVariables>(SignupDocument, baseOptions);
      }
export type SignupMutationHookResult = ReturnType<typeof useSignupMutation>;
export type SignupMutationResult = ApolloReactCommon.MutationResult<SignupMutation>;
export type SignupMutationOptions = ApolloReactCommon.BaseMutationOptions<SignupMutation, SignupMutationVariables>;
export const LoginDocument = gql`
    mutation Login($identifier: String!, $password: String!) {
  loggedUser(input: {identifier: $identifier, password: $password})
}
    `;
export type LoginMutationFn = ApolloReactCommon.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      identifier: // value for 'identifier'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return ApolloReactHooks.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = ApolloReactCommon.MutationResult<LoginMutation>;
export type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const CurrentUserDocument = gql`
    query CurrentUser {
  me {
    id
    username
    role
  }
}
    `;

/**
 * __useCurrentUserQuery__
 *
 * To run a query within a React component, call `useCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentUserQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
        return ApolloReactHooks.useQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, baseOptions);
      }
export function useCurrentUserLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, baseOptions);
        }
export type CurrentUserQueryHookResult = ReturnType<typeof useCurrentUserQuery>;
export type CurrentUserLazyQueryHookResult = ReturnType<typeof useCurrentUserLazyQuery>;
export type CurrentUserQueryResult = ApolloReactCommon.QueryResult<CurrentUserQuery, CurrentUserQueryVariables>;
export const ResultsDocument = gql`
    query Results($id: ID!) {
  results(id: $id) {
    survey {
      id
      title
    }
    questionsResults {
      question {
        id
        text
      }
      answers {
        answer {
          id
          text
        }
        count
      }
    }
    totalAnswers
  }
}
    `;

/**
 * __useResultsQuery__
 *
 * To run a query within a React component, call `useResultsQuery` and pass it any options that fit your needs.
 * When your component renders, `useResultsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useResultsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useResultsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ResultsQuery, ResultsQueryVariables>) {
        return ApolloReactHooks.useQuery<ResultsQuery, ResultsQueryVariables>(ResultsDocument, baseOptions);
      }
export function useResultsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ResultsQuery, ResultsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ResultsQuery, ResultsQueryVariables>(ResultsDocument, baseOptions);
        }
export type ResultsQueryHookResult = ReturnType<typeof useResultsQuery>;
export type ResultsLazyQueryHookResult = ReturnType<typeof useResultsLazyQuery>;
export type ResultsQueryResult = ApolloReactCommon.QueryResult<ResultsQuery, ResultsQueryVariables>;
export const SurveysDocument = gql`
    query Surveys {
  surveys {
    id
    title
    questions {
      id
      text
      options {
        id
        text
      }
    }
    opened
    published
  }
}
    `;

/**
 * __useSurveysQuery__
 *
 * To run a query within a React component, call `useSurveysQuery` and pass it any options that fit your needs.
 * When your component renders, `useSurveysQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSurveysQuery({
 *   variables: {
 *   },
 * });
 */
export function useSurveysQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SurveysQuery, SurveysQueryVariables>) {
        return ApolloReactHooks.useQuery<SurveysQuery, SurveysQueryVariables>(SurveysDocument, baseOptions);
      }
export function useSurveysLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SurveysQuery, SurveysQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SurveysQuery, SurveysQueryVariables>(SurveysDocument, baseOptions);
        }
export type SurveysQueryHookResult = ReturnType<typeof useSurveysQuery>;
export type SurveysLazyQueryHookResult = ReturnType<typeof useSurveysLazyQuery>;
export type SurveysQueryResult = ApolloReactCommon.QueryResult<SurveysQuery, SurveysQueryVariables>;