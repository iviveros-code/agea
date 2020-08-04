import React from "react";
import { View, Text } from "react-native";
import { Video } from "expo-av";

const RenderItem = ({ item, resultado }) => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Videos</Text>

      <Video
        source={{ uri: resultado }}
        rate={1.0}
        isMuted={true}
        resizeMode="contain"
        shouldPlay={true}
        style={{ width: 300, height: 300 }}
      />
    </View>
  );
};

export default RenderItem;
