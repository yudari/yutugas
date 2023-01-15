import { Button, Image, Input, Pressable, Text, View } from "native-base";
import React, { useState } from "react";

import { Keyboard, TouchableWithoutFeedback } from "react-native";
import IconUser from "../../assets/icons/IconUser.svg";
import IconAdd from "../../assets/icons/IconAdd.svg";
import IconRemove from "../../assets/icons/IconRemove.svg";
import Gap from "../../components/Gap";
import * as ImagePicker from "expo-image-picker";
import { setStatusBarBackgroundColor } from "expo-status-bar";
function HalamanDaftar() {
  const [takeImage, setTakeImage] = useState("");
  const [userData, setUserData] = useState({
    username: "",
    password: "",
    konfirmasiPassword: "",
    photoUserUri: "",
    photoUserName: "",
  });
  const pickImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      console.log("Kamu menolak aplikasi ini untuk menggunakan kamera mu");
      return;
    }

    const getImage = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!getImage.canceled) {
      const getDay = new Date().getDay();
      const getMonth = new Date().getMonth();
      const getYear = new Date().getFullYear();
      const getHour = new Date().getHours();
      const getMinute = new Date().getMinutes();
      const getSecond = new Date().getSeconds();
      const getMiliSecond = new Date().getMilliseconds();

      const getNamaFile = `${getDay}${getMonth}${getYear}${getHour}${getMinute}${getSecond}${getMiliSecond}.jpg`;
      // setTakeImage(getImage.assets[0].uri);
      setUserData({
        ...userData,
        photoUserUri: getImage.assets[0].uri,
        photoUserName: getNamaFile,
      });
    }
  };
  const removeImage = () => {
    setUserData({ ...userData, photoUserUri: "", photoUserName: "" });
  };

  const daftarUser = () => {
    if (
      userData.username === "" ||
      userData.password === "" ||
      userData.konfirmasiPassword === "" ||
      userData.photoUserUri === ""
    ) {
      console.log("Tolong lengkapi data anda");
    } else {
      if (userData.konfirmasiPassword === userData.password) {
        console.log(userData);
      } else {
        console.log("Konfirmasi password harus sama seperti password anda!!!");
      }
    }
  };

  const resetDataUser = () => {
    setUserData({
      username: "",
      password: "",
      konfirmasiPassword: "",
      photoUserName: "",
      photoUserUri: "",
    });
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View flex={1} backgroundColor={`#5158F8`} alignItems={`center`}>
        <View w={`90%`} mt={`22px`}>
          <Text
            fontFamily={`Poppins_600SemiBold`}
            fontSize={`16px`}
            color={`#fff`}
          >
            Ayo daftar di aplikasi YuTugas !!!
          </Text>
        </View>

        <View w={`90%`} mt={`22px`}>
          <Input
            onChangeText={(e) => setUserData({ ...userData, username: e })}
            variant={"filled"}
            type="text"
            placeholder="Username"
            fontFamily={`Poppins_400Regular`}
            fontSize={14}
            placeholderTextColor={`#A3A3A3`}
            value={userData.username}
          />
          <Gap height={20} />
          <Input
            onChangeText={(e) => setUserData({ ...userData, password: e })}
            variant={"filled"}
            type="password"
            value={userData.password}
            placeholder="Password"
            fontFamily={`Poppins_400Regular`}
            fontSize={14}
            placeholderTextColor={`#A3A3A3`}
          />
          <Gap height={20} />
          <Input
            onChangeText={(e) =>
              setUserData({ ...userData, konfirmasiPassword: e })
            }
            variant={"filled"}
            type="password"
            placeholder="Konfirmasi password"
            fontFamily={`Poppins_400Regular`}
            fontSize={14}
            placeholderTextColor={`#A3A3A3`}
            value={userData.konfirmasiPassword}
          />
        </View>

        <View w={`90%`} mt={`22px`}>
          <View position={`relative`} height={`71px`} width={`74px`}>
            {userData.photoUserUri.length > 0 && (
              <Image
                source={{ uri: userData.photoUserUri }}
                width={`74px`}
                height={`71px`}
                resizeMode={`cover`}
                borderRadius={`37px`}
                alt={`photoProfil`}
              />
            )}

            {userData.photoUserUri.length > 0 && (
              <Pressable
                onPress={removeImage}
                position={`absolute`}
                width={`19px`}
                height={`19px`}
                bottom={`0px`}
                right={`0px`}
                justifyContent={`center`}
                alignItems={`center`}
              >
                <IconRemove />
              </Pressable>
            )}
            {userData.photoUserUri.length === 0 && (
              <View
                height={`71px`}
                width={`74px`}
                backgroundColor={`#D9D9D9`}
                borderRadius={`37px`}
                alignItems={`center`}
                justifyContent={`center`}
              >
                <IconUser />
              </View>
            )}

            {userData.photoUserUri.length === 0 && (
              <Pressable
                onPress={pickImage}
                position={`absolute`}
                justifyContent={`center`}
                alignItems={`center`}
                width={`19px`}
                height={`19px`}
                bottom={`0px`}
                right={`0px`}
              >
                <IconAdd />
              </Pressable>
            )}
          </View>
        </View>

        <View w={`90%`} mt={`26px`}>
          <Button
            onPress={daftarUser}
            w={`100%`}
            variant={`solid`}
            colorScheme={`emerald`}
            size={`md`}
          >
            Daftar
          </Button>
          <Gap height={20} />
          <Button
            onPress={resetDataUser}
            w={`100%`}
            variant={`solid`}
            colorScheme={`danger`}
            size={`md`}
          >
            Reset
          </Button>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default HalamanDaftar;
