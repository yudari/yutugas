import { Text, View } from "native-base";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TouchableOpacity } from "react-native-gesture-handler";

import HalamanDaftarTugas from "../screens/HalamanDaftarTugas";
import HalamanPengaturanProfil from "../screens/HalamanPengaturanProfil";
import HalamanTulisTugas from "../screens/HalamanTulisTugas";
import IconDaftarTugas from "../assets/icons/IconDaftarTugas";
import IconPengaturan from "../assets/icons/IconPengaturan";
import IconTulisTugas from "../assets/icons/IconTulisTugas";
import IconReload from "../assets/icons/IconReload";
const { Navigator, Screen } = createBottomTabNavigator();

function TugasRoutes() {
  return (
    <Navigator
      initialRouteName="Daftar Tugas"
      screenOptions={{
        tabBarInactiveBackgroundColor: "#1C22AD",
        tabBarActiveBackgroundColor: "#032845",
        tabBarInactiveTintColor: "#5158F8",
        tabBarActiveTintColor: "#ffffff",
        tabBarIconStyle: { marginTop: 4 },
        tabBarLabelStyle: {
          fontSize: 13,
          color: "#f8ca12",
          paddingBottom: 3,
          display: "none",
        },
        tabBarStyle: {
          height: 65,
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 4,
          borderTopWidth: 0,
        },
        style: { borderColor: "#011f3b" },

        unmountOnBlur: true,
      }}
    >
      <Screen
        options={{
          tabBarIcon: ({ color, size }) => {
            return <IconDaftarTugas />;
          },
          headerStyle: {
            backgroundColor: "#1C22AD",
          },
          headerTitleStyle: { fontFamily: "Poppins_700Bold", color: "#fff" },
          headerRight: ({ tintColor }) => {
            return (
              <View mr={`20px`}>
                <IconReload />
              </View>
            );
          },
        }}
        name="Daftar Tugas"
        component={HalamanDaftarTugas}
      />
      <Screen
        options={{
          tabBarIcon: ({ color, size }) => {
            return <IconTulisTugas />;
          },
        }}
        name="Tulis Tugas"
        component={HalamanTulisTugas}
      />
      <Screen
        options={{
          tabBarIcon: ({ color, size }) => {
            return <IconPengaturan />;
          },
        }}
        name="Pengaturan Profil"
        component={HalamanPengaturanProfil}
      />
    </Navigator>
  );
}

export default TugasRoutes;
