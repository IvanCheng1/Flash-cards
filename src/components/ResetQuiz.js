import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { myStyles } from "../utils/myStyles";

const ResetQuiz = ({ resetQuiz, score, length, goHome }) => (
  <View style={myStyles.container}>
    <Text style={[myStyles.title, { margin: 5 }]}>Results</Text>
    <Text style={myStyles.subtitle}>
      You scored {score} out of {length}
    </Text>
    <TouchableOpacity style={myStyles.btn} onPress={() => resetQuiz()}>
      <Text style={myStyles.btnText}>Restart Quiz</Text>
    </TouchableOpacity>
    <TouchableOpacity style={myStyles.btn} onPress={() => goHome()}>
      <Text style={myStyles.btnText}>Choose another Deck</Text>
    </TouchableOpacity>
  </View>
);

export default ResetQuiz;
