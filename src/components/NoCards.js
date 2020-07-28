import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { myStyles } from "../utils/myStyles";

const NoCards = ({ title, id, addCard }) => (
  <View style={myStyles.container}>
    <Text style={myStyles.title}>{title}</Text>
    <Text style={myStyles.subtitle}>There are no cards for this Deck</Text>
    <TouchableOpacity style={myStyles.btn} onPress={() => addCard(id)}>
      <Text style={myStyles.btnText}>add card</Text>
    </TouchableOpacity>
  </View>
);

export default NoCards;
