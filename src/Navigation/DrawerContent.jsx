import React from "react";
import { View, Text, Alert } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Avatar, Title, Caption, Drawer } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import drawerStyles from "../Styles/drawerStyles";
import * as firebase from "firebase";

export function DrawerContent(props) {
  const { navigation } = props;

  const logOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        navigation.navigate("Login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View style={drawerStyles.container}>
      <DrawerContentScrollView {...props}>
        <View style={drawerStyles.drawerContent}>
          <View style={drawerStyles.userInfoSection}>
            <View style={drawerStyles.containerImage}>
              <Avatar.Image
                source={{
                  uri:
                    "https://api.adorable.io/avatars/285/abott@adorable.pngC",
                }}
                size={50}
              />
              <View style={drawerStyles.titleContainer}>
                <Title style={drawerStyles.title}>Challenge Agea</Title>
                <Caption style={drawerStyles.caption}>Clarín</Caption>
              </View>
            </View>
          </View>
          <Drawer.Section style={drawerStyles.drawerSection}>
            <DrawerItem
              style={drawerStyles.item}
              icon={({ size }) => (
                <MaterialCommunityIcons
                  name="home-outline"
                  color={"#fff"}
                  size={size}
                />
              )}
              label={() => (
                <Text style={drawerStyles.label}>Home - Videos</Text>
              )}
              onPress={() => navigation.navigate("Home")}
            />

            <DrawerItem
              icon={({ size }) => (
                <MaterialCommunityIcons
                  name="heart"
                  color={"#fff"}
                  size={size}
                />
              )}
              label={() => <Text style={drawerStyles.label}>Favoritos</Text>}
              onPress={() => navigation.navigate("Lists")}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={drawerStyles.bottomDrawerSection}>
        <DrawerItem
          icon={({ size }) => (
            <MaterialCommunityIcons
              name="exit-to-app"
              color={"#fff"}
              size={size}
            />
          )}
          label={() => <Text style={drawerStyles.label}>Cerrar Sesión</Text>}
          onPress={() => logOut()}
        />
      </Drawer.Section>
    </View>
  );
}
