import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import HalamanAwal from "../screens/HalamanAwal";
import AuthRoutes from "./auth.routes";

export default function SplashRoutes() {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator
      initialRouteName="HalamanAwal"
      screenOptions={{ headerShown: false }}
    >
      <Screen name="Home" component={AuthRoutes} />
    </Navigator>
  );
}
