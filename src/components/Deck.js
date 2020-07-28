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
  componentDidMount() {}

  render() {
    const { decks, id } = this.props;
    // console.log(decks)
    return (
      <View>
        <Text>{decks[id.id].title}</Text>
        {/* <Text>Deck</Text> */}
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
});

export default connect(mapStateToProps)(Deck);
