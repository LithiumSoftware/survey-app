import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  Container,
  Title,
  InputContainer,
  FormButton,
  Navigation,
  ButtonText,
  Text,
  PrimaryText,
  StyledIconButton,
  FormikProps,
  StyledHelperText,
} from "./LogInForm";

import { Eye, EyeOff } from "../assets/icons";
import MaxWidthView from "./MaxWidthView";

const SignUpForm = ({
  submition,
  navigateLogin,
}: {
  submition: any;
  navigateLogin: any;
}) => {
  const [hidePw, setHidePw] = useState(true);
  const [hideRptPw, setHideRptPw] = useState(true);

  return (
    <MaxWidthView>
      <Container
        contentContainerStyle={{
          backgroundColor: "#fff",
          paddingTop: 30,
          paddingRight: 30,
          paddingBottom: 125,
          paddingLeft: 30,
          minHeight: "100%",
        }}
      >
        <Title>Sign up</Title>
        <Formik
          initialValues={{
            username: "",
            fullname: "",
            email: "",
            password: "",
            confirmation: "",
          }}
          validationSchema={signupSchema}
          onSubmit={submition}
        >
          {({
            values: { username, fullname, email, password, confirmation },
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }: FormikProps) => (
            <>
              <InputContainer>
                <TextInput
                  label="Username"
                  placeholder="Username"
                  selectionColor="#ffb900"
                  value={username}
                  onChangeText={handleChange("username")}
                  onBlur={handleBlur("username")}
                />
                <StyledHelperText type="error" visible={true}>
                  {touched.username && errors?.username ? errors?.username : ""}
                </StyledHelperText>
              </InputContainer>
              <InputContainer>
                <TextInput
                  label="Full Name"
                  placeholder="Full Name"
                  selectionColor="#ffb900"
                  value={fullname}
                  onChangeText={handleChange("fullname")}
                  onBlur={handleBlur("fullname")}
                />
                <StyledHelperText type="error" visible={true}>
                  {touched.fullname && errors?.fullname ? errors?.fullname : ""}
                </StyledHelperText>
              </InputContainer>
              <InputContainer>
                <TextInput
                  label="Email"
                  placeholder="Email"
                  selectionColor="#ffb900"
                  value={email}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  keyboardType="email-address"
                />
                <StyledHelperText type="error" visible={true}>
                  {touched.email && errors?.email ? errors?.email : ""}
                </StyledHelperText>
              </InputContainer>
              <InputContainer>
                <TextInput
                  label="Password"
                  placeholder="Password"
                  selectionColor="#ffb900"
                  secureTextEntry={hidePw}
                  value={password}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                />
                <StyledHelperText type="error" visible={true}>
                  {touched.password && errors?.password ? errors?.password : ""}
                </StyledHelperText>
                <StyledIconButton
                  icon={() => (hidePw ? <EyeOff /> : <Eye />)}
                  onPress={() => setHidePw(!hidePw)}
                />
              </InputContainer>
              <InputContainer>
                <TextInput
                  label="Repeat password"
                  placeholder="Repeat password"
                  selectionColor="#ffb900"
                  secureTextEntry={hideRptPw}
                  value={confirmation}
                  onChangeText={handleChange("confirmation")}
                  onBlur={handleBlur("confirmation")}
                />
                <StyledHelperText type="error" visible={true}>
                  {touched.confirmation && errors?.confirmation
                    ? errors?.confirmation
                    : ""}
                </StyledHelperText>
                <StyledIconButton
                  icon={() => (hideRptPw ? <EyeOff /> : <Eye />)}
                  onPress={() => setHideRptPw(!hideRptPw)}
                />
              </InputContainer>
              <FormButton onPress={handleSubmit}>
                <ButtonText>SIGN UP</ButtonText>
              </FormButton>
            </>
          )}
        </Formik>
        <Navigation>
          <Text>Already have an acount?</Text>
          <TouchableOpacity onPress={navigateLogin}>
            <PrimaryText>LOGIN</PrimaryText>
          </TouchableOpacity>
        </Navigation>
      </Container>
    </MaxWidthView>
  );
};

const signupSchema = Yup.object().shape({
  username: Yup.string()
    .required("Please enter your username")
    .min(4, "Username is too short")
    .max(30, "Such a long username! Please trim it down"),
  fullname: Yup.string().required("Please enter your full name"),
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Please enter an email"),
  password: Yup.string()
    .required("Please enter the password")
    .min(4, "Password is too short"),
  confirmation: Yup.string()
    .required("Please enter the password confirmation")
    .oneOf([Yup.ref("password")], "Passwords do not match"),
});

export default SignUpForm;
