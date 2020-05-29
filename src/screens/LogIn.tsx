import React from "react";
import { AsyncStorage } from "react-native";
import ScreenProps from "./ScreenProps";
import { FormikValues, FormikErrors } from "formik";
import { useLoginMutation } from "../../graphql/generated";
import LogInForm from "../components/LogInForm";

const LogIn = ({
  navigation,
  route: {
    params: { setUser },
  },
}: ScreenProps) => {
  const [logInUser] = useLoginMutation();

  const submition = (
    values: FormikValues,
    { setSubmitting, setErrors }: SubmitionProps
  ) => {
    logInUser({
      variables: {
        identifier: values.email,
        password: values.password,
      },
    })
      .then(
        ({
          data: {
            loggedUser: { id },
          },
        }) => {
          if (id) {
            AsyncStorage.setItem("logged_in", id).then(() => {
              setUser(id);
              navigation.navigate("Surveys", { loggedUser: id });
            });
          }
        }
      )
      .catch((err: any) => {
        if (err.message.includes("email")) {
          setErrors({
            email: err?.graphQLErrors?.map((x) => x.message),
          });
        } else {
          setErrors({
            password: err?.graphQLErrors?.map((x) => x.message),
          });
        }
        setSubmitting(false);
      });
  };

  const navigateSignUp = () => navigation.navigate("SignUp");

  return <LogInForm submition={submition} navigateSignUp={navigateSignUp} />;
};

interface SubmitionProps {
  setSubmitting: (isSubmitting: boolean) => void;
  setErrors: (errors: FormikErrors<FormikValues>) => void;
}

export default LogIn;
