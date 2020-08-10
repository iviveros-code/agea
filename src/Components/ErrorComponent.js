import React from "react";
import { Text, View } from "react-native";
import globalStyles from "../Styles/globalStyles";

const ErrorComponent = ({ error }) => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.textError}>{error}</Text>
    </View>
  );
};

export default ErrorComponent;
