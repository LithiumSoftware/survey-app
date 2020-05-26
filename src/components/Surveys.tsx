import React from "react";
import MainScrollableContainer from "./MainScrollableContainer";
import Header from "./Header";
import Title from "./Title";
import Survey from "./Survey";
import { View } from "react-native";
import FABIcon from "./FABIcon";
import { Plus } from "../assets/icons";

const surveys = [
  {
    id: 1,
    title: "Food survey",
    questions: [
      {
        id: 1,
        text: "What is your favorite food?",
        selections: [
          {
            id: 1,
            text: "Burger",
          },
          {
            id: 2,
            text: "Pizza",
          },
          {
            id: 3,
            text: "Pasta",
          },
          {
            id: 4,
            text: "Other",
          },
        ],
      },
    ],
    open: true,
    published: true,
  },
  {
    id: 2,
    title: "Sport survey",
    questions: [
      {
        id: 2,
        text: "What is your favorite sport?",
        selections: [
          {
            id: 5,
            text: "Basketball",
          },
          {
            id: 6,
            text: "Soccer",
          },
          {
            id: 7,
            text: "Football",
          },
          {
            id: 8,
            text: "Other",
          },
        ],
      },
      {
        id: 3,
        text: "What sport do you like to watch the most?",
        selections: [
          {
            id: 9,
            text: "Basketball",
          },
          {
            id: 10,
            text: "Football",
          },
          {
            id: 11,
            text: "Soccer",
          },
          {
            id: 12,
            text: "Other",
          },
        ],
      },
    ],
    open: true,
    published: true,
  },
  {
    id: 3,
    title: "Animals survey",
    questions: [
      {
        id: 4,
        text: "What is your favorite animal?",
        selections: [
          {
            id: 13,
            text: "Dog",
          },
          {
            id: 14,
            text: "Cat",
          },
          {
            id: 15,
            text: "Bird",
          },
          {
            id: 16,
            text: "Other",
          },
        ],
      },
    ],
    open: true,
    published: false,
  },
  {
    id: 4,
    title: "Tech survey",
    questions: [
      {
        id: 5,
        text: "What is your favorite operating system?",
        selections: [
          {
            id: 17,
            text: "macOS",
          },
          {
            id: 18,
            text: "Windows",
          },
          {
            id: 19,
            text: "Linux",
          },
          {
            id: 20,
            text: "Other",
          },
        ],
      },
    ],
    open: false,
    published: true,
  },
];

const Surveys = ({ navigation }) => {
  const activeSurveys = surveys.filter(
    (survey) => survey.published === true && survey.open === true
  );
  const draftSurveys = surveys.filter((survey) => survey.published === false);
  const closedSurveys = surveys.filter(
    (survey) => survey.published === true && survey.open === false
  );

  return (
    <>
      <MainScrollableContainer>
        <Header />
        <Title>Active Surveys</Title>
        <View>
          {activeSurveys.map((survey) => (
            <Survey key={survey.id} survey={survey} navigation={navigation} />
          ))}
        </View>
        <Title>Draft Surveys</Title>
        <View>
          {draftSurveys.map((survey) => (
            <Survey key={survey.id} survey={survey} navigation={navigation} />
          ))}
        </View>
        <Title>Closed Surveys</Title>
        <View>
          {closedSurveys.map((survey) => (
            <Survey key={survey.id} survey={survey} navigation={navigation} />
          ))}
        </View>
      </MainScrollableContainer>
      <FABIcon icon={() => <Plus />} onPress={() => {}} />
    </>
  );
};

export default Surveys;
