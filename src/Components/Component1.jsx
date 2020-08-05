import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Dimensions } from "react-native";
import RenderItem from "../Components/RenderItem";
import axios from "axios";

const width = Dimensions.get("window");

export default function Component1() {
  const [resultado, setResultado] = useState([]);
  // console.log(resultado);

  useEffect(() => {
    const data = async () => {
      const res = await axios.get(
        "http://api-editoriales.clarin.com/api/mobile/v2/oletv/home"
      );
      setResultado(res.data.items);
    };
    data();
  }, []);

  //?offset=0&limit=10

  return (
    <>
      <View>
        <View
          style={{
            width: width,
            height: "100%",
            alignItems: "center",
          }}
        >
          <FlatList
            data={resultado}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => <RenderItem item={item} />}
          />
        </View>
      </View>
    </>
  );
}
