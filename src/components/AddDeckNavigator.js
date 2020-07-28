import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import DeckPage from "../pages/DeckPage";
import Home from "../pages/Home";
import Questions from "../pages/Questions";
import NewCard from "../pages/NewCard";
import Quiz from "../pages/Quiz";
import AddDeck from "../pages/AddDeck";

const Stack = createStackNavigator();

const AddDeckNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AddDeck" component={AddDeck} options={{
          title: "Add Deck",
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}/>
    </Stack.Navigator>
  );
};

export default AddDeckNavigator;