import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, ScrollView, FlatList, View } from "react-native";
import Question from "../components/Question";
import { myStyles } from "../utils/myStyles";

function mapStateToProps({ decks }) {
  return {
    decks,
  };
}

class ListCards extends Component {

  render() {
    const { id, name } = this.props.route.params;
    const questions = this.props.decks[id].questions;

    return (
      <View style={myStyles.container}>
        <ScrollView>
          {questions.map((question) => {
            return <Question question={question} key={question.question} />;
          })}
        </ScrollView>
      </View>
    );
  }
}

export default connect(mapStateToProps)(ListCards);
