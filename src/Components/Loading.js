import React from "react";
import { View, Text, Modal, ActivityIndicator } from "react-native";
import colors from "../Styles/colors";
import globalStyles from "../Styles/globalStyles";

export default function Loading(props) {
  const { isVisible, text } = props;

  return (
    <View style={globalStyles.containerModal}>
      <Modal visible={isVisible} transparent={true}>
        <View style={globalStyles.containerModal}>
          <View style={globalStyles.modalView}>
            <ActivityIndicator size="large" color={colors.black} />
            {text && <Text style={globalStyles.textModal}>{text}</Text>}
          </View>
        </View>
      </Modal>
    </View>
  );
}
