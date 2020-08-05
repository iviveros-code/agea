import React from "react";
import { View, Text } from "react-native";
import { Video } from "expo-av";
import { MaterialIcons } from "@expo/vector-icons";

// import Video from "react-native-video";

const RenderItem = ({ item }) => {
  const summaryFormat = item.summary;
  const cleanSummary = summaryFormat.replace(/<[^>]*>?/g, "");

  return (
    <View style={{ margin: 20 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          flexWrap: "noWrap",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontWeight: "500",
            fontSize: 18,
            textAlign: "center",
            margin: 5,
          }}
        >
          {item.title}
        </Text>
        <MaterialIcons name="favorite-border" size={25} color="#ff0042" />
      </View>

      <Text style={{ fontWeight: "300", fontSize: 16, margin: 3 }}>
        {item.subtitle}
      </Text>

      <Text style={{ fontWeight: "400" }}>{cleanSummary}</Text>

      <Video
        source={{ uri: item.videoFiles.mp4 }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay={false}
        isLooping={false}
        useNativeControls={true}
        style={{
          width: "100%",
          height: 300,
        }}
      />

      {/* <Video
        source={{ uri: item.videoFiles }} // Can be a URL or a local file.
        // ref={(ref) => {
        //   this.player = ref;
        // }} // Store reference
        // onBuffer={this.onBuffer} // Callback when remote video is buffering
        // onError={this.videoError} // Callback when video cannot be loaded
        style={{ position: "absolute", top: 0, left: 0, bottom: 0, right: 0 }}
      /> */}
    </View>
  );
};

export default RenderItem;
