import React, { Component } from "react";
import { connect } from "react-redux";
import { StyleSheet, Text, View } from "react-native";
import Deck from "../components/Deck";
import { handleReceiveDecks } from "../actions/decks";

function mapStateToProps({ decks }) {
  return {
    decks,
  };
}

class Home extends Component {
  componentDidMount() {
    this.props.dispatch(handleReceiveDecks());
  }
  render() {
    const { decks } = this.props;
    // console.log(decks);
    return (
      <View>
        <Text>Your Decks</Text>
        {Object.keys(decks).map((id) => (
          <Deck key={id} id={id}/>
        ))}
      </View>
    );
  }
}

export default connect(mapStateToProps)(Home);
