import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from "react-native";


function mapStateToProps({decks}, question) {
  return {
    question,
  };
}

class Question extends Component {
  render() {
    const {question} = this.props

    return (
      <Text>
        {question.question}
      </Text>
    );
  }
}

export default connect(
  mapStateToProps,
)(Question);