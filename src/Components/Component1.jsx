import React, { useState, useEffect } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import RenderItem from "../Components/RenderItem";
import axios from "axios";
import Loading from "../Components/Loading";
import globalStyles from "../Styles/globalStyles";

export default function Component1() {
  const [resultado, setResultado] = useState([]);
  const [loading, setLoading] = useState(false);

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
      <View style={globalStyles.container}>
        <View style={globalStyles.containerFlatList}>
          <FlatList
            data={resultado}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <RenderItem item={item} resultado={resultado} />
            )}
            // onEndReached={handleLoadMore}
            ListFooterComponent={<FooterList isLoading={Loading} />}
          />
        </View>
        <Loading isVisible={loading} text="...Cargando!" />
      </View>
    </>
  );
}

function FooterList(props) {
  const { isLoading } = props;

  if (isLoading) {
    return (
      <View>
        <ActivityIndicator size="large" />
      </View>
    );
  } else {
    return (
      <View style={styles.notFoundRestaurants}>
        <Text>No quedan videos por cargar</Text>
      </View>
    );
  }
}

// function handleLoadMore() {
//   const moreVideos = [];

//   const data = async () => {
//     const res = await axios
//       .get("http://api-editoriales.clarin.com/api/mobile/v2/oletv/home?limit=5")
//       .limit(5)
//       .get()
//       .then((res) => {
//         if (res.docs.length > 0) {
//           setMoreVideos(res.data.items[res.data.items.length - 1]);
//         } else {
//           setIsLoading(false);
//         }
//       });
//   };
// }
