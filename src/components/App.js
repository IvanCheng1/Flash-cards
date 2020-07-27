import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Deck from "./Deck";
import { Provider } from "react-redux";
import reducer from "../reducers";
import middleware from "../middleware";
import { createStore } from "redux";
import Home from "../pages/Home";
import DeckPage from "../pages/DeckPage";
// import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const store = createStore(reducer, middleware);

const Tab = createBottomTabNavigator();

export default class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="DeckPage" component={DeckPage} />
      </Tab.Navigator>
    );

    return (
      <Provider store={store}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            {/* <Tab.Screen name="DeckPage" component={DeckPage} /> */}
          </Tab.Navigator>
        </NavigationContainer>
        {/* <View style={styles.container}> */}
        {/* <Text>Open up App.js to start working on your app!</Text> */}
        {/* <Home /> */}
        {/* <StatusBar style="auto" /> */}
        {/* </View> */}
      </Provider>
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
