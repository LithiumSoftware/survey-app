import React, { useState } from "react";
import ScreenProps from "./ScreenProps";
import CreateSurvey from "../components/CreateSurvey";
import FullScreenMessage from "../components/FullScreenMessage";
import { SaveAsDraft, Published } from "../assets/icons";
import { useCreateSurveyMutation } from "../../graphql/generated";

export interface SurveyProps {
  title: string;
  questions: QuestionProps[];
  published: boolean;
}

export interface QuestionProps {
  text: string;
  options: OptionProps[];
}

export interface OptionProps {
  text: string;
}

const CreateSurveyScreen = ({ route, navigation }: ScreenProps) => {
  const [surveyTitle, setSurveyTitle] = useState("Untitled");
  const [drafted, setDrafted] = useState(false);
  const [published, setPublished] = useState(false);
  const [createSurveyMutation] = useCreateSurveyMutation({});
  const createSurvey = (survey: SurveyProps) => {
    return createSurveyMutation({
      variables: {
        input: survey,
      },
    }).then((survey: any) => {
      if (survey) {
        setSurveyTitle(survey.title);
        setPublished(survey.published);
        setDrafted(!survey.published);
      }
    });
  };

  if (published) {
    return (
      <FullScreenMessage
        navigation={navigation}
        title={surveyTitle}
        message="Survey published successfully"
        icon={<Published height={81} width={90} />}
      />
    );
  } else if (drafted) {
    return (
      <FullScreenMessage
        navigation={navigation}
        title={surveyTitle}
        message="Survey saved as draft"
        icon={<SaveAsDraft height={81} width={90} />}
      />
    );
  } else {
    return <CreateSurvey navigation={navigation} createSurvey={createSurvey} />;
  }
};

export default CreateSurveyScreen;
