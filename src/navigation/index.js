import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import { Bars2Icon, UserIcon } from "react-native-heroicons/outline";
import { Color } from "../constants";
import DetailScreen from "../screens/DetailScreen";

const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: "",
            headerRight: () => <UserIcon size={30} color={Color.dark} />,
            headerLeft: () => <Bars2Icon size={30} color={Color.dark} />,
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
