import React, { Component } from "react";
import { connect } from "react-redux";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import QuestionCard from "../components/QuestionCard";
import ResetQuiz from "../components/ResetQuiz";

function mapStateToProps({ decks }) {
  return {
    decks,
  };
}

// source: https://javascript.info/array-methods#shuffle-an-array
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

class Quiz extends Component {
  state = {
    score: 0,
    index: 0,
    showAnswer: false,
    questions: [],
    length: 0,
  };

  componentDidMount() {
    const id = this.props.route.params.id;
    const questions = shuffle(this.props.decks[id].questions);

    this.setState({
      questions,
      length: questions.length,
    });
  }

  handleToggleShowAnswer = () => {
    this.setState((prev) => ({
      showAnswer: !prev.showAnswer,
    }));
  };

  answerQuestion = (polarity) => {
    if (polarity === "correct") {
      this.setState((prev) => ({
        score: prev.score + 1,
      }));
    }
    this.setState((prev) => ({
      index: prev.index + 1,
      showAnswer: false,
    }));
  };

  resetQuiz = () => {
    this.setState({
      index: 0,
      score: 0,
      showAnswer: false,
    });
  };

  goHome = () => {
    this.props.navigation.navigate("Home");
  };

  render() {
    console.log("here", this.props.navigation);
    const id = this.props.route.params.id;
    const { length, index, score } = this.state;
    if (index < length) {
      return (
        <QuestionCard
          id={id}
          answerQuestion={this.answerQuestion}
          index={this.state.index}
          showAnswer={this.state.showAnswer}
          handleToggleShowAnswer={this.handleToggleShowAnswer}
          questions={this.state.questions}
          length={this.state.length}
        />
      );
    } else {
      return (
        <ResetQuiz
          resetQuiz={this.resetQuiz}
          score={score}
          length={length}
          goHome={this.goHome}
        />
      );
    }
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

export default connect(mapStateToProps)(Quiz);
