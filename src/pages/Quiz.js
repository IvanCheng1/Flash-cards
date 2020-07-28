import React, { Component } from "react";
import { connect } from "react-redux";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import QuestionCard from "../components/QuestionCard";
import ResetQuiz from "../components/ResetQuiz";
import { myStyles } from "../utils/myStyles";
import NoCards from "../components/NoCards";

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

  addCard = (id) => {
    this.props.navigation.navigate("NewCard", {
      id,
    });
  }

  render() {
    const { id, title } = this.props.route.params;
    const { length, index, score } = this.state;
    if (length === 0) {
      return <NoCards title={title} id={id} addCard={this.addCard}/>;
    } else if (index < length) {
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

export default connect(mapStateToProps)(Quiz);
