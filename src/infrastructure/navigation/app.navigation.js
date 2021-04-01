import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";

import { RestaurantsNavigator } from "./restaurant.navigation";
import { SafeArea } from "../../components/utility/safe-area.component";

const Tab = createBottomTabNavigator();
const TAB_ICON = {
  Restaurants: "restaurant",
  Maps: "map",
  Settings: "settings",
};

const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);
const Maps = () => (
  <SafeArea>
    <Text>Maps</Text>
  </SafeArea>
);

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ focused, size, color }) =>
      focused ? (
        <Ionicons name={iconName} size={size} color={color} />
      ) : (
        <Ionicons name={`${iconName}-outline`} size={size} color={color} />
      ),
  };
};

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={createScreenOptions}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
        <Tab.Screen name="Maps" component={Maps} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
      <ExpoStatusBar style="auto" />
    </NavigationContainer>
  );
};
