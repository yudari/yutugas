import { Button, Center, Text, View } from "native-base";
import IconBrand from "../../assets/icons/IconBrand";

function HalamanAwal() {
  return (
    <View
      flex={1}
      alignItems={`center`}
      backgroundColor={"#5158F8"}
      position={`relative`}
    >
      <View w={`100%`} alignItems={`center`} position={`absolute`} top={`30%`}>
        <IconBrand />
        <Text
          color="#fff"
          fontFamily={`Poppins_700Bold`}
          fontSize={52}
          textAlign={`center`}
        >
          YuTugas
        </Text>
      </View>

      <View w={`90%`} position={`absolute`} bottom={`5%`}>
        <Text
          fontFamily={`Poppins_600SemiBold`}
          fontSize={16}
          textAlign={`center`}
          color={`#fff`}
        >
          Selamat Datang! ayo login dulu sebelum masuk
        </Text>
        <Button
          fontFamily={`Poppins_500Medium`}
          fontSize={`14px`}
          mt={`20px`}
          w={`100%`}
          variant={`solid`}
          colorScheme={`emerald`}
          size={`md`}
        >
          Login
        </Button>
        <Button
          fontFamily={`Poppins_500Medium`}
          fontSize={`14px`}
          mt={`20px`}
          w={`100%`}
          variant={`solid`}
          colorScheme={`danger`}
          size={`md`}
        >
          Daftar
        </Button>
      </View>
    </View>
  );
}

export default HalamanAwal;
