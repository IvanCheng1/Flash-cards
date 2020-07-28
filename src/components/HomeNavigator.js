import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import DeckPage from "../pages/DeckPage";
import Home from "../pages/Home";
import Questions from "../pages/Questions";
import NewCard from "../pages/NewCard";
import Quiz from "../pages/Quiz";

const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="DeckPage" component={DeckPage} />
      <Stack.Screen name="Questions" component={Questions} />
      <Stack.Screen name="NewCard" component={NewCard} />
      <Stack.Screen name="Quiz" component={Quiz} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
