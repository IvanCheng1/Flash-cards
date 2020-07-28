import React, { Component } from "react";
import { connect } from "react-redux";
import { StyleSheet, Text, View, TextInput, Button,TouchableOpacity } from "react-native";
import { handleAddDeck } from "../actions/decks";
import { set } from "react-native-reanimated";
import { deleteDeck } from "../utils/api";

function mapStateToProps({ decks }) {
  return {
    decks,
  };
}

class AddDeck extends Component {
  state = {
    deck: "",
  };

  componentDidMount() {}

  handleSubmit = () => {
    if (this.state.deck === '') {
      alert("Please enter a Deck Name")
      return
    }
    this.props.dispatch(handleAddDeck(this.state.deck)).then(() => {
      const id = this.state.deck.replace(/\s+/g, "");
      this.setState({
        deck: "",
      });
      this.props.navigation.navigate("DeckPage", {
        id,
      });
    });
  };

  render() {
    const { deck } = this.state;
    return (
      <View style={styles.container}>
        <Text>Add Deck</Text>
        <TextInput
          value={deck}
          style={styles.input}
          placeholder="Deck Name"
          onChangeText={(input) => this.setState({ deck: input })}
        />
        <Button
          onPress={this.handleSubmit}
          disabled={deck ? false : true}
          title="Create Deck"
        />
        <TouchableOpacity
          style={styles.btn}
          onPress={this.handleSubmit}
        >
          <Text>Create Deck</Text>
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
  input: {
    padding: 15,
    backgroundColor: "grey",
    borderRadius: 10,
    marginBottom: 20,
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

export default connect(mapStateToProps)(AddDeck);
