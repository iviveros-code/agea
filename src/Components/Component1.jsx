import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import RenderItem from "../Components/RenderItem";
import Loading from "../Components/Loading";
import globalStyles from "../Styles/globalStyles";
import colors from "../Styles/colors";
import { useDispatch, useSelector } from "react-redux";
import {
  obtenerVideosAction,
  siguienteVideosAccion,
  anteriorVideosAccion,
} from "../Redux/ducks";

export default function Component1() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const videosStore = useSelector((store) => store.videosAgea.items);

  useEffect(() => {
    setLoading(true);
    dispatch(obtenerVideosAction());
    setLoading(false);
  }, []);

  return (
    <View>
      <View style={{ height: "95%" }}>
        <FlatList
          data={videosStore}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <RenderItem item={item} />}
        />

        <View style={[globalStyles.containerRender, { margin: 20 }]}>
          <TouchableOpacity onPress={() => dispatch(anteriorVideosAccion(2))}>
            <Text style={{ color: colors.green, fontWeight: "600" }}>
              Previous Videos
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => dispatch(siguienteVideosAccion(2))}>
            <Text style={{ color: colors.green, fontWeight: "600" }}>
              Next Videos
            </Text>
          </TouchableOpacity>
        </View>
        <Loading isVisible={loading} text="...Cargando!!" />
      </View>
    </View>
  );
}
