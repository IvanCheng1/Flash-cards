import React, { Component } from "react";
import { connect } from "react-redux";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { myStyles } from "../utils/myStyles";

function mapStateToProps(
  { decks },
  {
    id,
    answerQuestion,
    index,
    handleToggleShowAnswer,
    showAnswer,
    length,
    questions,
  }
) {
  return {
    decks,
    id,
    answerQuestion,
    index,
    handleToggleShowAnswer,
    showAnswer,
    length,
    questions,
  };
}

class QuestionCard extends Component {
  state = {
    score: 0,
    showAnswer: false,
    questions: [],
    length: 0,
  };

  renderAnswer = (ans) => {
    if (this.props.showAnswer) {
      return <Text style={myStyles.questionAnswer}>{ans}</Text>;
    }
  };

  render() {
    const {
      decks,
      id,
      answerQuestion,
      index,
      handleToggleShowAnswer,
      length,
      questions,
      showAnswer,
    } = this.props;

    let currentQuestion;
    let currentAnswer;
    if (questions[index]) {
      currentQuestion = questions[index].question;
      currentAnswer = questions[index].answer;
    }

    let title;
    let no;
    if (decks[id]) {
      title = decks[id].title;
      no = decks[id].questions.length;
    }

    return (
      <View style={myStyles.container}>
        <Text style={[myStyles.title, { margin: 5 }]}>{title}</Text>
        <Text style={myStyles.subtitle}>
          {index + 1} / {length}
        </Text>
        <View style={myStyles.questionCard}>
          <Text style={myStyles.questionText}>{currentQuestion}</Text>
          {this.renderAnswer(currentAnswer)}
        </View>
        <TouchableOpacity
          style={[myStyles.btn, myStyles.btnDark]}
          onPress={() => handleToggleShowAnswer()}
        >
          <Text style={myStyles.btnText}>
            {showAnswer ? "Hide Answer" : "Show Answer"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={myStyles.btn}
          onPress={() => answerQuestion("correct")}
        >
          <Text style={myStyles.btnText}>Correct</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={myStyles.btn}
          onPress={() => answerQuestion("incorrect")}
        >
          <Text style={myStyles.btnText}>Incorrect</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect(mapStateToProps)(QuestionCard);
