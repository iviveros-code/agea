import React, { useEffect } from "react";
import { View, Text, Animated } from "react-native";
import { Video } from "expo-av";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import globalStyles from "../Styles/globalStyles";
import colors from "../Styles/colors";
// import firebase from "../Utils/Firebase";
import Rating from "./Rating";

import * as firebase from "firebase/app";
import "firebase/firestore";
import { firebaseConfig } from "../Utils/Firebase/config";
const db = firebase.firestore(firebaseConfig);
// import Video from "react-native-video";

const RenderItem = ({ item }) => {
  const [favorite, setFavorite] = React.useState(false);

  const summaryFormat = item.summary;
  const cleanSummary = summaryFormat.replace(/<[^>]*>?/g, "");

  useEffect(() => {
    db.collection("favorites")
      .where("video", "==", item.videoFiles.mp4)
      .get()
      .then((response) => {
        if (response.docs.length === 1) {
          setFavorite(true);
        }
      });
  }, [favorite]);

  const addFavorite = () => {
    const data = {
      idVideo: item.id,
      video: item.videoFiles.mp4,
      idUser: firebase.auth().currentUser.uid,
    };
    db.collection("favorites")
      .add(data)
      .then(() => {
        setFavorite(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const removeFavorite = () => {
    db.collection("favorites")
      .where("idVideo", "==", item.id)
      .where("video", "==", item.videoFiles.mp4)
      .get()
      .then((response) => {
        response
          .forEach((doc) => {
            const idFavorite = doc.id;
            db.collection("favorites")
              .doc(idFavorite)
              .delete()
              .then(() => {
                setFavorite(false);
              });
          })
          .catch((error) => {
            console.log(error);
          });
      });
  };

  return (
    <View style={{ margin: 20 }}>
      <View style={globalStyles.containerRender}>
        <Text style={globalStyles.title}>{item.title}</Text>

        <MaterialCommunityIcons
          name={favorite ? "heart" : "heart-outline"}
          size={25}
          color={favorite ? colors.red : colors.black}
          onPress={favorite ? removeFavorite : addFavorite}
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
      <Rating />
      <Text> {item.id}</Text>
    </View>
  );
};

export default RenderItem;
