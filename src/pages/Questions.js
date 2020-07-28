import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from "react-native";


function mapStateToProps(state) {
  return {

  };
}

class Questions extends Component {
  render() {
    return (
      <Text>
        Questions below
      </Text>
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

export default connect(
  mapStateToProps,
)(Questions);