import React from "react";
import { AsyncStorage } from "react-native";
import { FormikErrors, FormikValues } from "formik";
import ScreenProps from "./ScreenProps";

import { useSignupMutation } from "../../graphql/generated";

import SignUpForm from "../components/SignUpForm";

const SignUp = ({
  navigation,
  route: {
    params: { setUserToken },
  },
}: ScreenProps) => {
  const [signUpUser] = useSignupMutation();

  const submition = (values: FormikValues, { setErrors }: SubmitionProps) => {
    signUpUser({
      variables: {
        username: values.username,
        fullname: values.fullname,
        email: values.email,
        password: values.password,
      },
    })
      .then(({ data: { signedUser } }) => {
        if (signedUser) {
          AsyncStorage.setItem("logged_in", signedUser).then(() => {
            setUserToken(signedUser);
            navigation.navigate("Surveys", { loggedUser: true });
          });
        }
      })
      .catch((err: any) => {
        if (err.message.includes("Both")) {
          setErrors({
            username: "Username is already in use.",
            email: "Email address is already in use.",
          });
        } else {
          if (err.message.includes("Username")) {
            setErrors({
              username: err?.graphQLErrors?.map((x) => x.message),
            });
          } else {
            setErrors({
              email: err?.graphQLErrors?.map((x) => x.message),
            });
          }
        }
      });
  };

  const navigateLogin = () => navigation.navigate("LogIn");

  return <SignUpForm submition={submition} navigateLogin={navigateLogin} />;
};

interface SubmitionProps {
  setErrors: (errors: FormikErrors<FormikValues>) => void;
}

export default SignUp;
