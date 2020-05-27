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
  opened: Scalars['Boolean'];
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
  toggleOpen: Scalars['Boolean'];
  signedUser?: Maybe<User>;
  loggedUser?: Maybe<User>;
};


export type MutationCreateAnswerArgs = {
  input: CreateAnswerInput;
};


export type MutationCreateSurveyArgs = {
  input: CreateSurveyInput;
};


export type MutationToggleOpenArgs = {
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
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type Query = {
  __typename?: 'Query';
  _empty?: Maybe<Scalars['String']>;
  answers?: Maybe<Array<Maybe<Answer>>>;
  survey?: Maybe<Survey>;
  surveys?: Maybe<Array<Maybe<Survey>>>;
  me?: Maybe<User>;
};


export type QuerySurveyArgs = {
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

export type LoginMutationVariables = {
  identifier: Scalars['String'];
  password: Scalars['String'];
};


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { loggedUser?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id'>
  )> }
);


export const LoginDocument = gql`
    mutation Login($identifier: String!, $password: String!) {
  loggedUser(input: {identifier: $identifier, password: $password}) {
    id
  }
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