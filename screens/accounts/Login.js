import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/core";
import FormButton from "../../components/FormButton";
import FormInput from "../../components/FormInput";

export default function Login() {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ justifyContent: "center", flexGrow: 1 }}>
      <View>
        <ScrollView
          contentContainerStyle={{
            marginTop: StatusBar.currentHeight,
            flexGrow: 1,
            justifyContent: "center",
          }}
        >
          {/* ============================================================ Card container ==================================================================================== */}
          <View style={[styles.shadowedCard, tw`shadow-sm`]}>
            {/* ======================================================== Card header ============================================== */}

            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../../assets/kinywaji-logo.png")}
                  style={{
                    height: 100,
                    width: 100,
                    borderRadius: 100,
                  }}
                />
                <Text
                  style={[
                    tw`font-bold text-3xl text-gray-700`,
                    {
                      // fontFamily:'Kufam-SemiBoldItalic'
                      textShadowColor: "#00A064",
                      textShadowOffset: { width: 0.5, height: 0.5 },
                      textShadowRadius: 1,
                    },
                  ]}
                >
                  Kinywaji
                </Text>
              </View>
              {/* <TouchableOpacity
                            onPress={() => navigation.navigate('AccountScreen')}

                        >
                            <Icon
                                type="antdesign"
                                name="closecircle"
                                color="gray"
                                style={tw`w-10`}

                            />
                        </TouchableOpacity> */}
            </View>

            {/* =============================== Email Address Input ============================================ */}
            <FormInput placeholder="Enter email address" icon="mail" keyboardType="email-address" />

            {/* ============================= Password Input ==================================== */}
            <FormInput placeholder="Enter password" icon="lock" secureTextEntry={true} />

            {/* =========================== Login Button ========================== */}
            <FormButton text="Login" />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                paddingBottom: 10,
              }}
            >
              <TouchableOpacity style={tw`p-0.5 pt-10`}>
                <Text style={tw`font-bold text-red-600`}>Forgot Password?</Text>
              </TouchableOpacity>
              <Text style={tw`p-0.5 pt-10 font-bold`}>|</Text>
              <TouchableOpacity style={tw`p-0.5 pt-10`}>
                <Text
                  style={tw`font-bold text-gray-600`}
                  onPress={() => navigation.navigate("RegisterScreen")}
                >
                  Don't have an account,Sign Up?
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
  shadowedCard: {
    margin: 10,
    borderRadius: 5,
    padding: 2,
  },
});
