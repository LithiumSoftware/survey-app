import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { View, AsyncStorage } from "react-native";
import { IconButton } from "react-native-paper";

import MainScrollableContainer from "./MainScrollableContainer";
import Header from "./Header";
import Title from "./Title";
import Survey from "./Survey";
import FABIcon from "./FABIcon";
import LoadingView from "./LoadingView";
import FullScreenMessage from "./FullScreenMessage";

import { Plus, MessageBulletedOff, NotConnected } from "../assets/icons";
import {
  useSurveysQuery,
  useCurrentUserQuery,
  useCloseSurveyMutation,
  usePublishSurveyMutation,
  SurveysDocument,
} from "../../graphql/generated";
import NormalizeSize from "../utils/NormalizeSize";
import MaxWidthView from "./MaxWidthView";

const Surveys = ({
  navigation,
  setUserToken,
  reloadSurveys,
}: {
  navigation: any;
  setUserToken: any;
  reloadSurveys: any;
}) => {
  const { data, loading, refetch } = useSurveysQuery({});
  const { data: userData, loading: userLoading } = useCurrentUserQuery({});
  const [surveys, setSurveys] = useState(data?.surveys);
  const [closeSurveyMut] = useCloseSurveyMutation({});
  const [publishSurveyMut] = usePublishSurveyMutation({});

  useEffect(() => {
    setSurveys(data?.surveys);
  }, [data, data?.surveys]);

  useEffect(() => {
    refetch();
  }, [reloadSurveys, refetch]);

  const logOut = () =>
    AsyncStorage.setItem("logged_in", "").then(() => setUserToken(null));

  const closeSurvey = (id: string) => {
    closeSurveyMut({
      variables: { id: id },
      update(cache: any, { data: { closeSurvey } }) {
        const cachedSurveys = cache.readQuery({ query: SurveysDocument });
        cachedSurveys.surveys.some((survey: any) => {
          if (survey.id === id) {
            survey.opened = closeSurvey;
            return true;
          }
          return false;
        });

        cache.writeQuery({ query: SurveysDocument, data: cachedSurveys });
      },
    });
  };

  const publishSurvey = (id: string) => {
    publishSurveyMut({
      variables: { id: id },
      update(cache: any, { data: { publishSurvey } }) {
        const cachedSurveys = cache.readQuery({ query: SurveysDocument });
        cachedSurveys.surveys.some((survey: any) => {
          if (survey.id === id) {
            survey.published = publishSurvey;
            return true;
          }
          return false;
        });

        cache.writeQuery({ query: SurveysDocument, data: cachedSurveys });
      },
    });
  };

  if (loading || userLoading) {
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
      <MaxWidthView>
        <MainScrollableContainer>
          <Header navigation={navigation} user={userData?.me} logOut={logOut} />
          <View>
            <Title>Active surveys</Title>
            <View>
              {activeSurveys?.map((survey) => (
                <Survey
                  key={survey?.id}
                  survey={survey}
                  navigation={navigation}
                  closeSurvey={closeSurvey}
                  publishSurvey={publishSurvey}
                  isAdmin={userData?.me?.role === "ADMIN"}
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
                    closeSurvey={closeSurvey}
                    publishSurvey={publishSurvey}
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
                closeSurvey={closeSurvey}
                publishSurvey={publishSurvey}
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
        {userData?.me?.role === "ADMIN" && (
          <FABIcon
            icon={() => <Plus width={24} />}
            onPress={() => navigation.navigate("CreateSurvey")}
          />
        )}
      </MaxWidthView>
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

const NoSurveys = styled.Text`
  font-size: ${NormalizeSize(22)}px;
  font-weight: 500;
  color: #4f4f4f;
  letter-spacing: ${NormalizeSize(-0.5)}px;
`;

const Container = styled.View`
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
  border-radius: 20px;
  padding-top: ${NormalizeSize(40)}px;
  padding-bottom: ${NormalizeSize(50)}px;
  margin-bottom: ${NormalizeSize(16)}px;
`;

export default Surveys;
