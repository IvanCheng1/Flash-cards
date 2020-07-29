import React, { Component } from "react";
import { connect } from "react-redux";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Deck from "../components/Deck";
import { handleReceiveDecks } from "../actions/decks";
import { TouchableOpacity } from "react-native-gesture-handler";
import { myStyles } from "../utils/myStyles";

function mapStateToProps({ decks }) {
  return {
    decks,
  };
}

class Home extends Component {
  componentDidMount() {
    this.props.dispatch(handleReceiveDecks());
  }

  handlePress = (id, name) => {
    this.props.navigation.navigate("DeckPage", {
      id,
      name,
    });
  };

  render() {
    const { decks } = this.props;

    return (
      <ScrollView style={myStyles.scrollView}>
        <View style={myStyles.container}>
          <Text style={[myStyles.title, {marginTop: 160}]}>Your Decks</Text>
          {Object.keys(decks).map((id) => (
            <TouchableOpacity
              style={myStyles.btn}
              onPress={() => this.handlePress(id, decks[id].title)}
              key={id}
            >
              <Deck key={id} id={id} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    );
  }
}

export default connect(mapStateToProps)(Home);
