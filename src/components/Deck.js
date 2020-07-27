import React, { Component } from "react";
import { connect } from "react-redux";
import { StyleSheet, Text, View } from "react-native";


function mapStateToProps({ decks }, id) {
  return { 
    decks, 
    id,
  };
}

class Deck extends Component {
  componentDidMount() {

  }

  render() {
    const { decks, id } = this.props;
    console.log(decks[id.id])
    return (
      <View>
        <Text>{decks[id.id].title}</Text>
      </View>
    );
  }
}

export default connect(mapStateToProps)(Deck);
