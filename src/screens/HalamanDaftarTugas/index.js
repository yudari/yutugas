import {
  Checkbox,
  Input,
  Pressable,
  ScrollView,
  Text,
  View,
} from "native-base";
import React, { useState } from "react";

import { Keyboard, TouchableWithoutFeedback } from "react-native";
import IconLocation from "../../assets/icons/IconLocation";
import IconEditTugas from "../../assets/icons/IconEditTugas";
import IconTanggalTugas from "../../assets/icons/IconTanggalTugas";
import IconWaktuTugas from "../../assets/icons/IconWaktuTugas";
function HalamanDaftarTugas() {
  const [btnFilterActive, setBtnFilterActive] = useState({
    button: "btn-1",
    status: "active",
  });

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
            fontSize={`20px`}
            color={`#1C22AD`}
          >
            Halo, Selamat Datang
          </Text>
          <Text
            fontFamily={`Poppins_600SemiBold`}
            fontSize={`14px`}
            color={`#FFF`}
          >
            Berikut update hari ini !!!
          </Text>
        </View>
        <View w={`90%`} mt={`16px`}>
          <Input
            variant={`filled`}
            placeholder={`Cari tugas`}
            fontFamily={`Poppins_500Medium`}
            fontSize={`14px`}
            color={`#fff`}
            borderRadius={`30px`}
          />
        </View>
        <View
          w={`90%`}
          mt={`16px`}
          flexDirection={`row`}
          justifyContent={`space-between`}
        >
          <Pressable
            onPress={() => {
              setBtnFilterActive({ button: "btn-1", status: "active" });
            }}
            backgroundColor={
              btnFilterActive.button === "btn-1" &&
              btnFilterActive.status === "active"
                ? "#1C22AD"
                : "#fff"
            }
            borderColor={`#1C22AD`}
            borderWidth={`1px`}
            borderRadius={`20px`}
            justifyContent={`center`}
            alignItems={`center`}
            // paddingX={`16px`}
            // paddingY={`6px`}
            width={`80px`}
            height={`34px`}
          >
            <Text
              fontFamily={`Poppins_400Regular`}
              fontSize={`14px`}
              color={
                btnFilterActive.button === "btn-1" &&
                btnFilterActive.status === "active"
                  ? "#fff"
                  : "#1C22AD"
              }
              textAlign={`center`}
            >
              Hari ini
            </Text>
          </Pressable>

          <Pressable
            onPress={() => {
              setBtnFilterActive({ button: "btn-2", status: "active" });
            }}
            backgroundColor={
              btnFilterActive.button === "btn-2" &&
              btnFilterActive.status === "active"
                ? "#1C22AD"
                : "#fff"
            }
            borderColor={`#1C22AD`}
            borderWidth={`1px`}
            borderRadius={`20px`}
            justifyContent={`center`}
            alignItems={`center`}
            // paddingX={`16px`}
            // paddingY={`6px`}
            width={`80px`}
            height={`34px`}
          >
            <Text
              fontFamily={`Poppins_400Regular`}
              fontSize={`14px`}
              color={
                btnFilterActive.button === "btn-2" &&
                btnFilterActive.status === "active"
                  ? "#fff"
                  : "#1C22AD"
              }
              textAlign={`center`}
            >
              Terbaru
            </Text>
          </Pressable>

          <Pressable
            onPress={() => {
              setBtnFilterActive({ button: "btn-3", status: "active" });
            }}
            backgroundColor={
              btnFilterActive.button === "btn-3" &&
              btnFilterActive.status === "active"
                ? "#1C22AD"
                : "#fff"
            }
            borderColor={`#1C22AD`}
            borderWidth={`1px`}
            borderRadius={`20px`}
            justifyContent={`center`}
            alignItems={`center`}
            // paddingX={`16px`}
            // paddingY={`6px`}
            width={`80px`}
            height={`34px`}
          >
            <Text
              fontFamily={`Poppins_400Regular`}
              fontSize={`14px`}
              color={
                btnFilterActive.button === "btn-3" &&
                btnFilterActive.status === "active"
                  ? "#fff"
                  : "#1C22AD"
              }
              textAlign={`center`}
            >
              Selesai
            </Text>
          </Pressable>
        </View>
        <ScrollView
          flexDirection={`column`}
          w={`90%`}
          mt={`24px`}
          h="80"
          showsVerticalScrollIndicator
        >
          <View
            padding={`10px`}
            backgroundColor={`#1C22AD`}
            minHeight={`148px`}
            borderRadius={`14px`}
            mb={`16px`}
          >
            <View justifyContent={`space-between`} flexDirection={`row`}>
              <IconLocation />
              <Text
                ml={`12px`}
                fontFamily={`Poppins_500Medium`}
                fontSize={`12px`}
                color={`#fff`}
                flex={1}
              >
                Samarinda, Toko Buah Manggarai
              </Text>
              <IconEditTugas />
            </View>
            <View w={`100%`} mt={`16px`}>
              <Text
                fontFamily={`Poppins_700Bold`}
                color={`#fff`}
                fontSize={`18px`}
              >
                Mengantar Adik Ke Sekolah
              </Text>
            </View>
            <View flexDirection={`row`} w={`100%`} mt={`12px`}>
              <IconTanggalTugas />
              <Text
                ml={`12px`}
                fontFamily={`Poppins_500Medium`}
                fontSize={`12px`}
                color={`#fff`}
              >
                12 Oktober 2022
              </Text>
            </View>

            <View flexDirection={`row`} w={`100%`} mt={`12px`}>
              <View flex={1} flexDirection={`row`}>
                <IconWaktuTugas />
                <Text
                  ml={`12px`}
                  fontFamily={`Poppins_500Medium`}
                  fontSize={`12px`}
                  color={`#fff`}
                >
                  12:20
                </Text>
              </View>
              <Checkbox value="yes" accessibilityLabel="Konfirmasi Tugas" />
            </View>
          </View>

          <View
            padding={`10px`}
            backgroundColor={`#1C22AD`}
            minHeight={`148px`}
            borderRadius={`14px`}
            mb={`16px`}
          >
            <View justifyContent={`space-between`} flexDirection={`row`}>
              <IconLocation />
              <Text
                ml={`12px`}
                fontFamily={`Poppins_500Medium`}
                fontSize={`12px`}
                color={`#fff`}
                flex={1}
              >
                Samarinda, Toko Buah Manggarai
              </Text>
              <IconEditTugas />
            </View>
            <View w={`100%`} mt={`16px`}>
              <Text
                fontFamily={`Poppins_700Bold`}
                color={`#fff`}
                fontSize={`18px`}
              >
                Membuat Banner di Canvas
              </Text>
            </View>
            <View flexDirection={`row`} w={`100%`} mt={`12px`}>
              <IconTanggalTugas />
              <Text
                ml={`12px`}
                fontFamily={`Poppins_500Medium`}
                fontSize={`12px`}
                color={`#fff`}
              >
                12 Oktober 2022
              </Text>
            </View>

            <View flexDirection={`row`} w={`100%`} mt={`12px`}>
              <View flex={1} flexDirection={`row`}>
                <IconWaktuTugas />
                <Text
                  ml={`12px`}
                  fontFamily={`Poppins_500Medium`}
                  fontSize={`12px`}
                  color={`#fff`}
                >
                  12:20
                </Text>
              </View>
              <Checkbox value="yes" accessibilityLabel="Konfirmasi Tugas" />
            </View>
          </View>
          <View
            padding={`10px`}
            backgroundColor={`#1C22AD`}
            minHeight={`148px`}
            borderRadius={`14px`}
            mb={`16px`}
          >
            <View justifyContent={`space-between`} flexDirection={`row`}>
              <IconLocation />
              <Text
                ml={`12px`}
                fontFamily={`Poppins_500Medium`}
                fontSize={`12px`}
                color={`#fff`}
                flex={1}
              >
                Samarinda, Toko Buah Manggarai
              </Text>
              <IconEditTugas />
            </View>
            <View w={`100%`} mt={`16px`}>
              <Text
                fontFamily={`Poppins_700Bold`}
                color={`#fff`}
                fontSize={`18px`}
              >
                Membuat Banner di Canvas
              </Text>
            </View>
            <View flexDirection={`row`} w={`100%`} mt={`12px`}>
              <IconTanggalTugas />
              <Text
                ml={`12px`}
                fontFamily={`Poppins_500Medium`}
                fontSize={`12px`}
                color={`#fff`}
              >
                12 Oktober 2022
              </Text>
            </View>

            <View flexDirection={`row`} w={`100%`} mt={`12px`}>
              <View flex={1} flexDirection={`row`}>
                <IconWaktuTugas />
                <Text
                  ml={`12px`}
                  fontFamily={`Poppins_500Medium`}
                  fontSize={`12px`}
                  color={`#fff`}
                >
                  12:20
                </Text>
              </View>
              <Checkbox value="yes" accessibilityLabel="Konfirmasi Tugas" />
            </View>
          </View>
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default HalamanDaftarTugas;
