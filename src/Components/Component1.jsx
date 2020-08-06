import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import RenderItem from "../Components/RenderItem";
import axios from "axios";
import Loading from "../Components/Loading";

export default function Component1() {
  const [resultado, setResultado] = useState([]);
  const [loading, setLoading] = useState(false);
  // console.log(resultado);

  useEffect(() => {
    setLoading(true);
    const data = async () => {
      const res = await axios.get(
        "http://api-editoriales.clarin.com/api/mobile/v2/oletv/home"
      );
      setResultado(res.data.items);
      setLoading(false);
    };
    data();
  }, []);

  //?offset=0&limit=10

  return (
    <>
      <View style={{ flex: 1 }}>
        <View style={{ height: "90%" }}>
          <FlatList
            data={resultado}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => <RenderItem item={item} />}
          />
        </View>
        <Loading isVisible={loading} text="...Cargando!" />
      </View>
    </>
  );
}
