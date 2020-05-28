import React from "react";
import ResultsSurvey from "../components/ResultsSurvey";
import ScreenProps from "./ScreenProps";
import { useResultsQuery } from "../../graphql/generated";
import LoadingView from "../components/LoadingView";

const ResultsScreen = ({ route, navigation }: ScreenProps) => {
  const { data, loading } = useResultsQuery({
    variables: {
      id: route.params.survey.id,
    },
  });
  return loading || !data ? (
    <LoadingView />
  ) : (
    <ResultsSurvey navigation={navigation} result={data?.results} />
  );
};

export default ResultsScreen;
