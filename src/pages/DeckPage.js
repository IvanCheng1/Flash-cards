import React, { Component } from "react";
import { connect } from "react-redux";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { handleRemoveDeck } from "../actions/decks";
import Modal, {
  ModalFooter,
  ModalButton,
  ModalContent,
  SlideAnimation,
} from "react-native-modals";

function mapStateToProps({ decks }) {
  return {
    decks,
  };
}

class DeckPage extends Component {
  state = {
    visible: false,
  };
  addCard = (id) => {
    this.props.navigation.navigate("NewCard", {
      id,
    });
  };

  removeDeck = (deckId) => {
    this.setState({ visible: false });
    this.props.navigation.navigate("Home");
    this.props.dispatch(handleRemoveDeck(deckId));
  };

  startQuiz = (id) => {
    this.props.navigation.navigate("Quiz", {
      id,
    })
  }

  render() {
    const id = this.props.route.params.id;
    const { decks } = this.props;
    // console.log(this.props.navigation)

    let title;
    let no;
    if (decks[id]) {
      title = decks[id].title;
      no = decks[id].questions.length;
    }

    return (
      <View style={styles.container}>
        <Text>{title}</Text>
        <Text>
          {no} {no === 1 ? "card" : "cards"}
        </Text>
        <TouchableOpacity style={styles.btn} onPress={() => this.addCard(id)}>
          <Text>New Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => this.startQuiz(id)}
        >
          <Text>Start Quiz</Text>
        </TouchableOpacity>
        <Text>Button to View All</Text>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => this.setState({ visible: true })}
        >
          <Text>Delete Deck</Text>
        </TouchableOpacity>
        <Modal
          visible={this.state.visible}
          modalAnimation={
            new SlideAnimation({
              slideFrom: "bottom",
            })
          }
          footer={
            <ModalFooter>
              <ModalButton
                text="CANCEL"
                onPress={() => {
                  this.setState({ visible: false });
                }}
              />
              <ModalButton
                text="OK"
                onPress={() => {
                  this.removeDeck(id);
                }}
              />
            </ModalFooter>
          }
        >
          <ModalContent>
            <Text>Are you sure you want to remove this Deck?</Text>
          </ModalContent>
        </Modal>
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

export default connect(mapStateToProps)(DeckPage);
