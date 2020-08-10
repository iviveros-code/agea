import React, { useState } from "react";
import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../Styles/colors";

const Rating = () => {
  const [colorStars1, setColorStars1] = useState(false);
  const [colorStars2, setColorStars2] = useState(false);
  const [colorStars3, setColorStars3] = useState(false);
  const [colorStars4, setColorStars4] = useState(false);
  const [colorStars5, setColorStars5] = useState(false);
  const [count, setCount] = useState(0 <= 5);
  const [rating, setRating] = useState(false);

  return (
    <View
      style={{
        justifyContent: "space-raound",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <MaterialCommunityIcons
        name={colorStars1 ? "star" : "star-outline"}
        size={25}
        color={colorStars1 ? colors.green : "black"}
        onPress={() => setColorStars1(!colorStars1)}
      />
      <MaterialCommunityIcons
        name={colorStars2 ? "star" : "star-outline"}
        size={25}
        color={colorStars2 ? colors.green : "black"}
        onPress={() => setColorStars2(!colorStars2)}
      />
      <MaterialCommunityIcons
        name={colorStars3 ? "star" : "star-outline"}
        size={25}
        color={colorStars3 ? colors.green : "black"}
        onPress={() => setColorStars3(!colorStars3)}
      />
      <MaterialCommunityIcons
        name={colorStars4 ? "star" : "star-outline"}
        size={25}
        color={colorStars4 ? colors.green : "black"}
        onPress={() => setColorStars4(!colorStars4)}
      />
      <MaterialCommunityIcons
        name={colorStars5 ? "star" : "star-outline"}
        size={25}
        color={colorStars5 ? colors.green : "black"}
        onPress={() => setColorStars5(!colorStars5)}
      />
    </View>
  );
};

export default Rating;
