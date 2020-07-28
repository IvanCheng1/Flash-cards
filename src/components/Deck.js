import React, { Component } from "react";
import { connect } from "react-redux";
import { StyleSheet, Text, View } from "react-native";
import { myStyles } from "../utils/myStyles";

function mapStateToProps({ decks }, id) {
  return {
    decks,
    id,
  };
}

class Deck extends Component {
  componentDidMount() {}

  render() {
    const { decks, id } = this.props;
    return (
      <View>
        <Text style={myStyles.btnText}>{decks[id.id].title}</Text>
      </View>
    );
  }
}

export default connect(mapStateToProps)(Deck);
