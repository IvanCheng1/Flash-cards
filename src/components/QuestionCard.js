import React, { Component } from "react";
import { connect } from "react-redux";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

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
      return <Text>{ans}</Text>;
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
      <View style={styles.container}>
        <Text>Quiz Page - {title}</Text>
        <Text>
          {index + 1} / {length}
        </Text>
        <Text>{currentQuestion}</Text>
        <View>{this.renderAnswer(currentAnswer)}</View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => handleToggleShowAnswer()}
        >
          <Text>Show Answer</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => answerQuestion("correct")}
        >
          <Text>Correct</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => answerQuestion("incorrect")}
        >
          <Text>Incorrect</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    backgroundColor: "#E53224",
    padding: 10,
    paddingLeft: 50,
    paddingRight: 50,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  btnText: {
    color: "#FFF",
  },
});

export default connect(mapStateToProps)(QuestionCard);
