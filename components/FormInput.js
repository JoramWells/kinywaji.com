import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";

const FormInput = ({ placeholder, type = "antdesign", icon, ...rest }) => {
  return (
    <View style={[tw`m-2 pt-10`, styles.container]}>
      <Icon type={type} name={icon} color="gray" style={tw`w-10`} />
      <TextInput  placeholder={placeholder} style={styles.input} numberOfLines={1} {...rest} />
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    borderColor: "gray",
    borderRadius: 5,
    borderBottomWidth: 1,
    fontSize: 16,
  },
});
