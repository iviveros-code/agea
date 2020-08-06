import React from "react";
import { View, Text } from "react-native";
import { Video } from "expo-av";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import globalStyles from "../Styles/globalStyles";
import colors from "../Styles/colors";
import AsyncStorage from "@react-native-community/async-storage";
import shortid from "shortid";

// import Video from "react-native-video";

const RenderItem = ({ item, resultado }) => {
  const [favorite, setFavorite] = React.useState(false);
  const [guardarId, setGuardarId] = React.useState("");

  const summaryFormat = item.summary;
  const cleanSummary = summaryFormat.replace(/<[^>]*>?/g, "");

  return (
    <View style={{ margin: 20 }}>
      <View style={globalStyles.containerRender}>
        <Text style={globalStyles.title}>{item.title}</Text>
        <MaterialCommunityIcons
          name={favorite ? "heart" : "heart-outline"}
          size={25}
          color={colors.red}
          onPress={() => setFavorite(!favorite)}
        />
      </View>

      <Text style={globalStyles.subtitle}>{item.subtitle}</Text>

      <Text style={globalStyles.summary}>{cleanSummary}</Text>

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
      <Text style={{ marginTop: 5, textAlign: "justify" }}>
        Link: {item.videoFiles.mp4}
      </Text>

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
