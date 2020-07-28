import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { handleRemoveDeck } from "../actions/decks";
import { myStyles } from "../utils/myStyles";
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

  startQuiz = (id, title) => {
    this.props.navigation.navigate("Quiz", {
      id,
      title,
    });
  };

  showAllCards = (id, name) => {
    this.props.navigation.navigate("AllCards", {
      id,
      name,
    });
  };

  render() {
    const id = this.props.route.params.id;
    const { decks } = this.props;

    let title;
    let no;
    if (decks[id]) {
      title = decks[id].title;
      no = decks[id].questions.length;
    }

    return (
      <View style={myStyles.container}>
        <Text style={[myStyles.title, { margin: 5 }]}>{title}</Text>
        <Text style={myStyles.subtitle}>
          {no} {no === 1 ? "card" : "cards"}
        </Text>
        <TouchableOpacity style={myStyles.btn} onPress={() => this.addCard(id)}>
          <Text style={myStyles.btnText}>New Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={myStyles.btn}
          onPress={() => this.startQuiz(id, title)}
        >
          <Text style={myStyles.btnText}>Start Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={myStyles.btn}
          onPress={() => this.showAllCards(id, title)}
        >
          <Text style={myStyles.btnText}>View All Cards</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[myStyles.btn, myStyles.btnDark]}
          onPress={() => this.setState({ visible: true })}
        >
          <Text style={myStyles.btnText}>Delete Deck</Text>
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

export default connect(mapStateToProps)(DeckPage);
