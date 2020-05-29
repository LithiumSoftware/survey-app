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
  const [error, setError] = useState("");
  const [surveyTitle, setSurveyTitle] = useState("Untitled");
  const [drafted, setDrafted] = useState(false);
  const [published, setPublished] = useState(false);
  const [createSurveyMutation] = useCreateSurveyMutation({});
  const createSurvey = async (survey: SurveyProps) => {
    return await createSurveyMutation({
      variables: {
        input: survey,
      },
    })
      .then((result: any) => {
        if (result?.data?.createSurvey) {
          setSurveyTitle(result?.data?.createSurvey.title);
          setPublished(result?.data?.createSurvey.published);
          setDrafted(!result?.data?.createSurvey.published);
          setError("");
        } else {
          setError("Please complete all questions and options");
          setTimeout(() => {
            setError("");
          }, 2500);
        }
      })
      .catch(() => {
        setError("Please complete all questions and options");
        setTimeout(() => {
          setError("");
        }, 2500);
      });
  };

  if (published) {
    setTimeout(() => {
      navigation.navigate("Surveys");
    }, 4000);

    return (
      <FullScreenMessage
        navigation={navigation}
        title={surveyTitle}
        message="Survey published successfully"
        icon={<Published height={81} width={90} />}
      />
    );
  } else if (drafted) {
    setTimeout(() => {
      navigation.navigate("Surveys");
    }, 4000);

    return (
      <FullScreenMessage
        navigation={navigation}
        title={surveyTitle}
        message="Survey saved as draft"
        icon={<SaveAsDraft height={81} width={90} />}
      />
    );
  } else {
    return (
      <CreateSurvey
        error={error}
        navigation={navigation}
        createSurvey={createSurvey}
      />
    );
  }
};

export default CreateSurveyScreen;
