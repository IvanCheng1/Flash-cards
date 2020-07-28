import React, { Component } from "react";
import { connect } from "react-redux";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { handleAddQuestion } from "../actions/questions";

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
    // alert("New card added!");
    // this.props.navigation.push("home")

    // handle add new card
    this.props.dispatch(
      handleAddQuestion(
        this.props.route.params.id,
        this.state.question,
        this.state.answer
      )
    );

    // console.log("Question:", this.state.question);
    // console.log("Answer:", this.state.answer);

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
      <View style={styles.container}>
        <Text>new card for {title}</Text>
        <TextInput
          value={question}
          style={styles.input}
          placeholder="Question"
          onChangeText={(input) => this.setState({ question: input })}
        />
        <TextInput
          value={answer}
          style={styles.input}
          placeholder="Answer"
          onChangeText={(input) => this.setState({ answer: input })}
        />
        <Button
          onPress={() => this.handleSubmit(id)}
          disabled={question === "" || answer === "" ? true : false}
          title="Submit"
        />
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
  input: {
    padding: 15,
    backgroundColor: "grey",
    borderRadius: 10,
    marginBottom: 20,
  },
});

export default connect(mapStateToProps)(NewCard);
