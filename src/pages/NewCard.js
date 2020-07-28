import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, View, TextInput, Button, KeyboardAvoidingView } from "react-native";
import { handleAddQuestion } from "../actions/questions";
import { myStyles } from "../utils/myStyles";

function mapStateToProps({ decks }) {
  return {
    decks,
  };
}

class NewCard extends Component {
  state = {
    question: "",
    answer: "",
  };

  handleSubmit = (id) => {
    this.props.dispatch(
      handleAddQuestion(
        this.props.route.params.id,
        this.state.question,
        this.state.answer
      )
    );

    this.props.navigation.navigate("DeckPage", {
      id,
    });
  };

  render() {
    const { question, answer } = this.state;
    const id = this.props.route.params.id;
    const { decks } = this.props;
    const title = decks[id].title;

    return (
      <KeyboardAvoidingView behavior='padding' style={myStyles.container}>
        <Text style={myStyles.title}>New Card for {title}</Text>
        <TextInput
          value={question}
          style={myStyles.input}
          placeholder="Question"
          onChangeText={(input) => this.setState({ question: input })}
        />
        <TextInput
          value={answer}
          style={myStyles.input}
          placeholder="Answer"
          onChangeText={(input) => this.setState({ answer: input })}
        />
        <Button
          onPress={() => this.handleSubmit(id)}
          disabled={question === "" || answer === "" ? true : false}
          title="Submit"
        />
      </KeyboardAvoidingView>
    );
  }
}

export default connect(mapStateToProps)(NewCard);
