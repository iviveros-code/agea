import React from "react";
import { View, Text } from "react-native";
import { Video } from "expo-av";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import globalStyles from "../Styles/globalStyles";
import colors from "../Styles/colors";
import { useDispatch, useSelector } from "react-redux";
import { favoritoVideosAccion } from "../Redux/ducks";

// import Video from "react-native-video";

const RenderItem = ({ item }) => {
  const [favorite, setFavorite] = React.useState(false);
  const dispatch = useDispatch();

  const summaryFormat = item.summary;
  const cleanSummary = summaryFormat.replace(/<[^>]*>?/g, "");

  //,
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
    </View>
  );
};

export default RenderItem;
