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

  handlePress = () => {
    alert("go to new page")
  }

  render() {
    const { decks } = this.props;
    // console.log(decks);
    return (
      <View>
        <Text>Your Decks</Text>
        {Object.keys(decks).map((id) => (
          <TouchableOpacity style={styles.btn} onPress={this.handlePress}>
            <Deck style={styles.btnText} key={id} id={id} />
            {/* <Text style={styles.btnText}>Touch</Text> */}
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
