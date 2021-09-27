import React from "react";
import { Text, StyleSheet, TextInput, View } from "react-native";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";
const Navbar = () => {
  return (
    <View style={styles.navbar}>
      <View
      style={{
          flexDirection:'row',
          alignItems:'center',
          backgroundColor:'white',
          flex: 1,
          borderRadius:5
      }}
      >
        <Icon type="antdesign" name="search1" color="gray" />
        <TextInput style={styles.input} placeholder="Search..." />
      </View>
      <Icon type="antdesign" name="shoppingcart" color="white" style={[tw`ml-2`]} />
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: "black",
    padding: 10,
    marginTop: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  navtext: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    marginRight: 10,
  },
  input: {
    backgroundColor: "white",
    // flex: 1,
    borderRadius: 5,
    padding: 4,
    fontSize: 18,
  },
});

export default Navbar;
