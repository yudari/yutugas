import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import HalamanAwal from "../screens/HalamanAwal";
import AuthRoutes from "./auth.routes";
import TugasRoutes from "./tugas.routes";
const { Navigator, Screen } = createStackNavigator();
export default function SplashRoutes() {
  return (
    <Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={TugasRoutes} />
    </Navigator>
  );
}
