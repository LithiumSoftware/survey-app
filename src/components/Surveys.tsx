import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { View, Text } from "react-native";
import { IconButton } from "react-native-paper";

import MainScrollableContainer from "./MainScrollableContainer";
import HeaderLogo from "./HeaderLogo";
import Title from "./Title";
import Survey from "./Survey";
import FABIcon from "./FABIcon";
import LoadingView from "./LoadingView";
import FullScreenMessage from "./FullScreenMessage";

import { Plus, MessageBulletedOff, NotConnected } from "../assets/icons";
import { useSurveysQuery } from "../../graphql/generated";
import NormalizeSize from "../utils/NormalizeSize";

const Surveys = ({ navigation }: { navigation: any }) => {
  const { data, loading } = useSurveysQuery({});
  const [surveys, setSurveys] = useState(data?.surveys);

  useEffect(() => {
    setSurveys(data?.surveys);
  }, [data, data?.surveys]);

  if (loading) {
    return <LoadingView />;
  } else if (surveys) {
    const activeSurveys = surveys?.filter(
      (survey) => survey?.published === true && survey?.opened === true
    );
    const draftSurveys = surveys?.filter(
      (survey) => survey?.published === false
    );
    const closedSurveys = surveys?.filter(
      (survey) => survey?.published === true && survey?.opened === false
    );

    return (
      <>
        <MainScrollableContainer>
          <HeaderLogo />
          <View>
            <Title>Active surveys</Title>
            <View>
              {activeSurveys?.map((survey) => (
                <Survey
                  key={survey?.id}
                  survey={survey}
                  navigation={navigation}
                />
              ))}
            </View>
            {(!activeSurveys || activeSurveys?.length === 0) && (
              <Container>
                <StyledIconButton
                  icon={() => (
                    <MessageBulletedOff
                      height={NormalizeSize(51)}
                      width={NormalizeSize(51)}
                    />
                  )}
                />
                <NoSurveys>There are not active surveys</NoSurveys>
              </Container>
            )}
          </View>
          {draftSurveys && draftSurveys?.length > 0 && (
            <>
              <Title>Draft Surveys</Title>
              <View>
                {draftSurveys?.map((survey) => (
                  <Survey
                    key={survey?.id}
                    survey={survey}
                    navigation={navigation}
                  />
                ))}
              </View>
            </>
          )}
          <Title>Closed Surveys</Title>
          <View>
            {closedSurveys?.map((survey) => (
              <Survey
                key={survey?.id}
                survey={survey}
                navigation={navigation}
              />
            ))}
          </View>
          {(!closedSurveys || closedSurveys?.length === 0) && (
            <Container>
              <StyledIconButton
                icon={() => (
                  <MessageBulletedOff
                    height={NormalizeSize(51)}
                    width={NormalizeSize(51)}
                  />
                )}
              />
              <NoSurveys>There are not closed surveys</NoSurveys>
            </Container>
          )}
        </MainScrollableContainer>
        <FABIcon
          icon={() => <Plus />}
          onPress={() => navigation.navigate("CreateSurvey")}
        />
      </>
    );
  } else {
    return (
      <FullScreenMessage
        navigation={navigation}
        title="Lost connection!"
        icon={
          <NotConnected height={NormalizeSize(81)} width={NormalizeSize(100)} />
        }
        message="Please reconnect to continue using the app"
      />
    );
  }
};

const StyledIconButton = styled(IconButton)`
  height: ${NormalizeSize(56)}px;
  width: ${NormalizeSize(56)}px;
  margin-bottom: ${NormalizeSize(20)}px;
`;

const NoSurveys = styled(Text)`
  font-size: ${NormalizeSize(22)}px;
  font-weight: 500;
  color: #4f4f4f;
  letter-spacing: ${NormalizeSize(-0.5)}px;
`;

const Container = styled(View)`
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
  border-radius: ${NormalizeSize(20)}px;
  padding-top: ${NormalizeSize(40)}px;
  padding-bottom: ${NormalizeSize(50)}px;
  margin-bottom: ${NormalizeSize(16)}px;
`;

export default Surveys;
