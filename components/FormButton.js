import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import { windowHeight } from "../utils/Dimensions";

const FormButton = ({ text, ...rest }) => {
  return (
    <TouchableOpacity style={[tw`pt-10`, styles.container]}>
      <View style={[tw`bg-gray-800 p-2`,styles.innerContainer]}>
        <Text style={[tw`font-bold text-lg text-center`, styles.buttonText]}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default FormButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer: {
    width: "80%",
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "center",
    height: windowHeight/15

  },
  buttonText: {
    color: "white",
  },
});
