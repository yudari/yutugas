import { View } from "native-base";
import React from "react";

function Gap({ height }) {
  return <View w={`100%`} h={`${height}px`}></View>;
}

export default Gap;
