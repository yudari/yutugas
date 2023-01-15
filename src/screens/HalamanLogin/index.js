import { Button, Input, Text, View } from "native-base";
import React from "react";

function HalamanLogin() {
  return (
    <View flex={1} backgroundColor={`#5158F8`} alignItems={`center`}>
      <View w={`90%`} mt={`22px`}>
        <Text
          fontFamily={`Poppins_600SemiBold`}
          fontSize={`16px`}
          color={`#fff`}
        >
          Login dengan username yang telah kamu buat !!!
        </Text>
      </View>

      <View w={`90%`} mt={`26px`}>
        <Input
          variant={"filled"}
          type="text"
          placeholder="Username"
          fontFamily={`Poppins_400Regular`}
          fontSize={14}
          placeholderTextColor={`#A3A3A3`}
        />

        <Input
          mt={`20px`}
          variant={"filled"}
          type="password"
          placeholder="Password"
          fontFamily={`Poppins_400Regular`}
          fontSize={14}
          placeholderTextColor={`#A3A3A3`}
        />
      </View>

      <View w={`90%`} mt={`26px`}>
        <Button
          mt={`20px`}
          w={`100%`}
          variant={`solid`}
          colorScheme={`emerald`}
          size={`md`}
        >
          Login
        </Button>
        <Button
          mt={`20px`}
          w={`100%`}
          variant={`solid`}
          colorScheme={`danger`}
          size={`md`}
        >
          Reset
        </Button>
      </View>
    </View>
  );
}

export default HalamanLogin;
