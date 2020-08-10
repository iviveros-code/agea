import React, { useState, useRef, useCallback, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

import * as firebase from "firebase/app";
import "firebase/firestore";
import { firebaseConfig } from "../Utils/Firebase/config";
const db = firebase.firestore(firebaseConfig);

import RenderItemFav from "../Components/RenderItemFav";
// import firebase from "../Utils/Firebase";

export default function Componente2() {
  const [favorite, setFavorite] = useState([]);
  const [userLogged, setUserLogged] = useState(false);

  console.log(favorite);
  firebase.auth().onAuthStateChanged((user) => {
    user ? setUserLogged(true) : setUserLogged(false);
  });

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const data = await db.collection("favorites").get();
        const arrayData = data.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setFavorite(arrayData);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerDatos();
  }, []);

  const removeFavorite = () => {
    db.collection("favorites")
      .where("idUser", "==", firebase.auth().currentUser.uid)
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
    <View style={{ height: "95%" }}>
      <FlatList
        data={favorite}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <RenderItemFav item={item} removeFavorite={removeFavorite} />
        )}
      />
    </View>
  );
}
