import React, { Component } from "react";
import { connect } from "react-redux";
import { StyleSheet, Text, View } from "react-native";
import Deck from "../components/Deck";
import { handleReceiveDecks } from "../actions/decks";
import { TouchableOpacity } from "react-native-gesture-handler";

function mapStateToProps({ decks }) {
  return {
    decks,
  };
}

class Home extends Component {
  componentDidMount() {
    this.props.dispatch(handleReceiveDecks());
  }

  handlePress = (id) => {
    this.props.navigation.navigate("DeckPage", {
      id,
    });
  };

  render() {
    const { decks } = this.props;

    return (
      <View style={styles.container}>
        <Text>Your Decks</Text>
        {Object.keys(decks).map((id) => (
          <TouchableOpacity
            style={styles.btn}
            onPress={() => this.handlePress(id)}
            key={id}
          >
            <Deck key={id} id={id} />
          </TouchableOpacity>
        ))}
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

export default connect(mapStateToProps)(Home);
