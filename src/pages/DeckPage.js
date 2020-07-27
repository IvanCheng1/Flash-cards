import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from "react-native";

function mapStateToProps(state) {
  return {

  };
}

class DeckPage extends Component {
  render() {
    return (
      <Text>
        Deck Page - Questions
      </Text>
      
    );
  }
}

export default connect(
  mapStateToProps,
)(DeckPage);