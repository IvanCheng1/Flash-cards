import React from "react";
import { Text, View } from "react-native";
import { myStyles } from "../utils/myStyles";


const Question = ({ question }) => {
  const ans = question.answer;
  const qu = question.question;
  // console.log(question)
  return (
    <View style={myStyles.listCard}>
      <Text style={myStyles.listCardQuestionText}>{qu}</Text>
      <Text  style={myStyles.listCardQuestionAnswer}>{ans}</Text>
    </View>
  );
};

export default Question;
