import React, { Component } from "react";
import { connect } from "react-redux";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

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
    // console.log(this.props.navigation)
    return (
      <View style={styles.container}>
        <Text>Reset Quiz</Text>
        <Text>You scored {score} out of {length}</Text>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => resetQuiz()}
        >
          <Text>Restart Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => goHome()}
        >
          <Text>Choose another Deck</Text>
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

export default connect(mapStateToProps)(ResetQuiz);
