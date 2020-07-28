import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, View, TouchableOpacity } from "react-native";
import { myStyles } from "../utils/myStyles";

function mapStateToProps(state, { title, id, addCard }) {
  return {
    title,
    id,
    addCard,
  };
}

class NoCards extends Component {
  render() {
    return (
      <View style={myStyles.container}>
        <Text style={myStyles.title}>{this.props.title}</Text>
        <Text style={myStyles.subtitle}>There are no cards for this Deck</Text>
        <TouchableOpacity
          style={myStyles.btn}
          onPress={() => this.props.addCard(this.props.id)}
        >
          <Text style={myStyles.btnText}>add card</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect(mapStateToProps)(NoCards);
