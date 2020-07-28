import React, { Component } from "react";
import { connect } from "react-redux";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { myStyles } from "../utils/myStyles";

function mapStateToProps(state, { resetQuiz, length, score, goHome }) {
  return {
    resetQuiz,
    score,
    length,
    goHome,
  };
}

class ResetQuiz extends Component {
  render() {
    const { resetQuiz, score, length, goHome } = this.props;
    return (
      <View style={myStyles.container}>
        <Text style={[myStyles.title, {margin: 5,}]}>Results</Text>
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
  }
}

export default connect(mapStateToProps)(ResetQuiz);
