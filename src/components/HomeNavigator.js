import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DeckPage from "../pages/DeckPage";
import Home from "../pages/Home";
import Questions from "../pages/Questions";
import NewCard from "../pages/NewCard";
import Quiz from "../pages/Quiz";
import ListCards from "../pages/ListCards";

const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: "My Home",
        }}
      />
      <Stack.Screen
        name="DeckPage"
        component={DeckPage}
        options={({ route }) => ({ title: route.params.name })}
      />
      <Stack.Screen
        name="Questions"
        component={Questions}
        options={{
          title: "Questions",
        }}
      />
      <Stack.Screen
        name="AllCards"
        component={ListCards}
        options={({ route }) => ({ title: route.params.name })}

      />
      <Stack.Screen
        name="NewCard"
        component={NewCard}
        options={{
          title: "New Card",
        }}
      />
      <Stack.Screen
        name="Quiz"
        component={Quiz}
        options={{
          title: "Quiz",
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
