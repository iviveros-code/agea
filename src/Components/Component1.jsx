import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { obtenerVideosAction } from "../Redux/ducks";
import RenderItem from "../Components/RenderItem";
import axios from "axios";

export default function Component1() {
  const [resultado, setResultado] = useState([]);

  const dispatch = useDispatch();
  const videos = useSelector((store) => store.videosAgea.videoFiles);

  console.log(videos);
  // setResultado(videos);
  // console.log(resultado);
  // useEffect(() => {
  //   const data = async () => {
  //     const res = await axios.get(
  //       "http://api-editoriales.clarin.com/api/mobile/v2/oletv/home?offset=0&limit=10"
  //     );
  //     const array1 = res.data.items;
  //     array1.forEach((items) => {
  //       setResultado(items.videoFiles.mp4);
  //     });
  //   };
  //   data();
  // }, []);

  return (
    <>
      <View>
        <Text style={{ textAlign: "center" }}>Component 1</Text>
        <TouchableOpacity onPress={() => dispatch(obtenerVideosAction())}>
          <Text>Obtener Videos</Text>
        </TouchableOpacity>

        <FlatList
          data={resultado}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <RenderItem item={item} resultado={resultado} />
          )}
        />
      </View>
    </>
  );
}
