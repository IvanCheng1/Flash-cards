import React, { Component } from "react";
import { Provider } from "react-redux";
import reducer from "../reducers";
import middleware from "../middleware";
import { createStore } from "redux";
import { AntDesign } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNavigator from "./HomeNavigator";
import AddDeckNavigator from "./AddDeckNavigator";
import { setLocalNotification } from "../utils/helpers";

const store = createStore(reducer, middleware);
const Tab = createBottomTabNavigator();

export default class App extends Component {
  componentDidMount() {
    setLocalNotification();
  }

  render() {
    return (
      <Provider store={store}>
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
      </Provider>
    );
  }
}
