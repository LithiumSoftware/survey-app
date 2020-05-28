import React, { useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { TextInput, IconButton, HelperText } from "react-native-paper";

import {
  Field,
  Formik,
  FormikValues,
  FormikErrors,
  FormikTouched,
} from "formik";
import * as Yup from "yup";

import styled from "styled-components/native";
import { Eye, EyeOff } from "../assets/icons";
import logo from "../assets/lithium-logo.png";

const LogInForm = ({ submition, navigateSignUp }: LogInFormProps) => {
  const [hidePw, setHidePw] = useState(true);

  return (
    <Container
      contentContainerStyle={{
        backgroundColor: "#fff",
        paddingTop: 30,
        paddingRight: 30,
        paddingBottom: 300,
        paddingLeft: 30,
        minHeight: "100%",
      }}
    >
      <Header />
      <Title>Login</Title>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={submition}
      >
        {({
          values: { email, password },
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }: FormikProps) => (
          <>
            <InputContainer>
              <TextInput
                label="Name or email"
                placeholder="Name or email"
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
            <Gap />
            <FormButton onPress={() => handleSubmit()}>
              <ButtonText>LOGIN</ButtonText>
            </FormButton>
          </>
        )}
      </Formik>
      <Navigation>
        <Text>Don't have an acount?</Text>
        <TouchableOpacity onPress={navigateSignUp}>
          <PrimaryText>SIGN UP</PrimaryText>
        </TouchableOpacity>
      </Navigation>
    </Container>
  );
};

const LoginSchema = Yup.object().shape({
  email: Yup.string().required("Please enter a username or email"),
  password: Yup.string().required("Please enter the password"),
});

export interface FormikProps {
  handleSubmit: (e?: React.FormEvent<HTMLFormElement>) => void;
  values: FormikValues;
  handleChange: (f: string) => void;
  errors: FormikErrors<FormikValues>;
  touched: FormikTouched<FormikValues>;
  handleBlur: (f: string) => void;
}

interface LogInFormProps {
  submition: any;
  navigateSignUp: any;
}

export const Container = styled.ScrollView`
  flex: 1;
`;

export const Header = () => {
  const StyledImage = styled(Image)`
    margin-bottom: 10px;
    width: 125px;
    height: 43px;
  `;

  const WelcomeText = styled.Text`
    color: #ffb900;
    font-size: 16px;
    font-weight: bold;
    padding-bottom: 30px;
  `;

  return (
    <View>
      <StyledImage resizeMode={"contain"} source={logo} />
      <WelcomeText>{"Welcome to Li Survey."}</WelcomeText>
    </View>
  );
};

export const Title = styled.Text`
  padding-bottom: 25px;
  font-weight: bold;
  font-size: 42px;
  color: #000;
  align-items: flex-start;
`;

export const InputContainer = styled.View`
  background-color: #fff;
  flex-wrap: nowrap;
  padding-bottom: 5px;
`;

export const StyledField = styled(Field)`
  background-color: #e8e8e8;
  flex-grow: 1;
  position: relative;
`;

export const StyledIconButton = styled(IconButton)`
  align-self: flex-end;
  position: absolute;
  right: 10px;
  top: 10px;
`;

export const Navigation = styled.View`
  flex-direction: row
  justify-content: center;
  align-items: center;
  padding-top: 15px;
  padding-bottom: 5px;
`;

export const ButtonText = styled.Text`
  color: black;
  font-weight: 700;
`;

export const Text = styled.Text`
  color: black;
`;

export const PrimaryText = styled.Text`
  color: #ffb900;
  margin-left: 10px;
`;

export const FormButton = styled.TouchableOpacity`
  width: 100%;
  background-color: #ffb900;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  padding: 16px;
`;

export const ErrorText = styled.Text`
  color: red;
  font-size: 15px;
  margin-top: 20px;
`;

export const StyledHelperText = styled(HelperText)`
  height: 14px;
`;

const Gap = styled(View)`
  height: calc(5% + 155px);
  max-height: 328px;
`;

export default LogInForm;
