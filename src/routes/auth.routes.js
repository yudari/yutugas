import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import IconBack from "../assets/icons/IconBack";
import HalamanAwal from "../screens/HalamanAwal";
import HalamanLogin from "../screens/HalamanLogin";

const { Navigator, Screen } = createStackNavigator();
function AuthRoutes() {
  return (
    <Navigator initialRouteName="Halaman Login">
      <Screen
        name="HalamanAwal"
        component={HalamanAwal}
        options={{ headerShown: false }}
      />
      <Screen
        name="Halaman Login"
        component={HalamanLogin}
        options={{
          headerStyle: {
            backgroundColor: "#1C22AD",
          },

          headerLeft: () => {
            return <IconBack />;
          },
          headerTintColor: "white",
          headerTitleStyle: { fontFamily: "Poppins_700Bold" },
          headerTitleAlign: "center",
        }}
      />
    </Navigator>
  );
}

export default AuthRoutes;
