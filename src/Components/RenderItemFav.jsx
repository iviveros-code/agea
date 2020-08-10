import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Video } from "expo-av";
import globalStyles from "../Styles/globalStyles";
import colors from "../Styles/colors";
import Rating from "./Rating";
import * as firebase from "firebase/app";
import "firebase/firestore";
import { firebaseConfig } from "../Utils/Firebase/config";
const db = firebase.firestore(firebaseConfig);

const RenderItemFav = ({ item, removeFavorite }) => {
  const [favorite, setFavorite] = React.useState(false);

  return (
    <View style={{ margin: 20 }}>
      <View style={globalStyles.containerRender}></View>

      <Video
        source={{ uri: item.video }}
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
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <Rating />
        <TouchableOpacity
          style={{
            width: 120,
            height: 30,
            backgroundColor: colors.red,
            justifyContent: "center",
          }}
          onPress={removeFavorite}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 16,
              color: colors.white,
            }}
          >
            Eliminar
          </Text>
        </TouchableOpacity>
      </View>
      <Text> {item.id}</Text>
    </View>
  );
};

export default RenderItemFav;
