import { HeaderBackButton } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, View } from "native-base";
import React from "react";
import IconBack from "../assets/icons/IconBack";
import HalamanAwal from "../screens/HalamanAwal";
import HalamanDaftar from "../screens/HalamanDaftar";
import HalamanLogin from "../screens/HalamanLogin";

const { Navigator, Screen } = createStackNavigator();

function AuthRoutes() {
  const navigation = useNavigation();
  return (
    <Navigator initialRouteName="Halaman Daftar">
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
          headerTintColor: "white",
          headerTitleStyle: { fontFamily: "Poppins_700Bold" },
          headerTitleAlign: "center",
          headerLeft: () => (
            <HeaderBackButton
              tintColor="#fff"
              onPress={() => {
                navigation.goBack();
              }}
            />
          ),
        }}
      />
      <Screen
        name="Halaman Daftar"
        component={HalamanDaftar}
        options={{
          headerStyle: {
            backgroundColor: "#1C22AD",
          },
          headerTintColor: "white",
          headerTitleStyle: { fontFamily: "Poppins_700Bold" },
          headerTitleAlign: "center",
          headerLeft: () => (
            <HeaderBackButton
              tintColor="#fff"
              onPress={() => {
                navigation.goBack();
              }}
            />
          ),
        }}
      />
    </Navigator>
  );
}

export default AuthRoutes;
