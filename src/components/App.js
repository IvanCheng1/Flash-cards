import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import reducer from "../reducers";
import middleware from "../middleware";
import { createStore } from "redux";
import { AntDesign } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNavigator from "./HomeNavigator";
import AddDeckNavigator from "./AddDeckNavigator";

const store = createStore(reducer, middleware);
const Tab = createBottomTabNavigator();

export default class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <Provider store={store}>
        {/* <View style={styles.container}> */}
        <NavigationContainer>
          <Tab.Navigator initialRouteName="Home">
            <Tab.Screen
              name="HomeStack"
              component={HomeNavigator}
              options={{
                tabBarLabel: "Home",
                tabBarIcon: ({ color }) => (
                  <AntDesign name="home" color={color} size={24} />
                ),
              }}
            />
            <Tab.Screen
              name="AddDeck"
              component={AddDeckNavigator}
              options={{
                tabBarLabel: "Add Deck",
                tabBarIcon: ({ color }) => (
                  <AntDesign name="plussquareo" color={color} size={24} />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
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
