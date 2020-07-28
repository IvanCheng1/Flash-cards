import React, { Component } from "react";
import { connect } from "react-redux";
import { StyleSheet, Text, View, TextInput, Button,TouchableOpacity, KeyboardAvoidingView } from "react-native";
import { handleAddDeck } from "../actions/decks";
import { myStyles } from "../utils/myStyles";

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
      <KeyboardAvoidingView behavior='padding' style={myStyles.container}>
        <Text style={myStyles.title}>Add Deck</Text>
        <TextInput
          value={deck}
          style={myStyles.input}
          placeholder="Deck Name"
          onChangeText={(input) => this.setState({ deck: input })}
        />
        <Button
          onPress={this.handleSubmit}
          disabled={deck ? false : true}
          title="Create Deck"
        />
        {/* <TouchableOpacity
          style={styles.btn}
          onPress={this.handleSubmit}
        >
          <Text style={styles.btnText}>Create Deck</Text>
        </TouchableOpacity> */}
      </KeyboardAvoidingView>
    );
  }
}


export default connect(mapStateToProps)(AddDeck);
