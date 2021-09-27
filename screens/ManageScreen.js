import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Platform,
  Image,
  Picker,
  ActivityIndicator,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/core";
import * as ImagePicker from "expo-image-picker";
import * as Firebase from "firebase";
import {firebaseConfig} from  "../firebase"

export default function ManageScreen() {

  if(!Firebase.apps.length){
    Firebase.initializeApp(firebaseConfig)
  }
  const [category, setCategory] = useState("Category");
  const [uploading, setUploading] = useState(false);
  const handleProgress = (e) => {
    setUploadProgress(Math.round((e.loaded * 100) / e.total));
  };
  const navigation = useNavigation();
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const uploadImage = async () => {
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function () {
        reject(new TypeError("Network request error"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", image, true);
      xhr.send(null);
    });
    const ref = Firebase.storage().ref().child(new Date().toISOString());
    const snapshot = ref.put(blob);
    snapshot.on(
      Firebase.storage.TaskEvent.STATE_CHANGED,
      () => {
        setUploading(true)
      },
      (err) => {
        setUploading(false)
        console.log(err);
        blob.close();
        return
      },
      () => {
        snapshot.snapshot.ref.getDownloadURL().then((url) => {
          setUploading(false)
          console.log("download url ", url);
          blob.close();
          return url;
        });
      }
    );
  };
  return (
    <SafeAreaView
      style={{
        marginTop: StatusBar.currentHeight,
        flex: 1,
        justifyContent: "center",
      }}
    >
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
        }}
      >
        {/* Shadowed card */}
        <View style={[styles.shadowedCard, tw`shadow-sm`]}>
          <View
            style={[
              tw`pt-2`,
              {
                justifyContent: "center",
                flexDirection: "row",
                alignItems: "center",
              },
            ]}
          >
            <Image
              source={{ uri: image }}
              style={{
                height: 100,
                width: 100,
                borderRadius: 5,
              }}
            />
          </View>

          {/* ============================================================== Product name ======================================*/}
          <View
            style={[
              tw`m-2 pt-2`,
              {
                flexDirection: "row",
                alignItems: "center",
              },
            ]}
          >
            <Icon
              type="antdesign"
              name="caretright"
              color="#D3D3D3"
              style={tw`w-10`}
            />
            <View
              style={[
                {
                  borderColor: "#C8C8C8",
                  borderRadius: 5,
                  borderBottomWidth: 1,
                  flex: 1,
                },
              ]}
            >
              <TextInput
                placeholder="Item name, (chrome gin)"
                style={{
                  padding: 0,
                  fontSize: 16,
                }}
              />
            </View>
          </View>

          {/* ====================================================================== Phone number input address xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/}
          <View
            style={[
              tw`m-2 pt-5`,
              {
                flexDirection: "row",
                alignItems: "center",
              },
            ]}
          >
            <Icon
              type="antdesign"
              name="caretright"
              color="#D3D3D3"
              style={tw`w-10`}
            />
            <View
              style={[
                {
                  // borderWidth: 1,
                  borderColor: "gray",
                  borderRadius: 5,
                  borderBottomWidth: 1,
                  flex: 1,
                },
              ]}
            >
              <TextInput
                placeholder="Price"
                style={{
                  padding: 0,
                  fontSize: 16,
                }}
              />
            </View>
          </View>

          {/* =========================================================== Enter Password ========================================= */}

          <View
            style={[
              tw`m-2 pt-5`,
              {
                flexDirection: "row",
                alignItems: "center",
              },
            ]}
          >
            <Icon
              type="antdesign"
              name="caretright"
              color="#D3D3D3"
              style={tw`w-10`}
            />
            <View
              style={[
                {
                  // borderWidth: 1,
                  borderColor: "gray",
                  borderRadius: 5,
                  borderBottomWidth: 1,
                  flex: 1,
                },
              ]}
            >
              <TextInput
                placeholder="Discount "
                style={{
                  flex: 1,
                  fontSize: 16,
                }}
              />
            </View>
          </View>

          {/* ============================================================= Select category ========================================================= */}
          <View
            style={[
              tw`m-2 pt-5`,
              {
                flexDirection: "row",
                alignItems: "center",
              },
            ]}
          >
            <Icon
              type="antdesign"
              name="caretright"
              color="#D3D3D3"
              style={tw`w-10`}
            />
            <View>
              <Picker
                selectedValue={category}
                style={{ height: 20, width: 100 }}
                onValueChange={(value, index) => setCategory(value)}
              >
                <Picker.Item label="Beer" value="Beer" />
                <Picker.Item label="Wine" value="Wine" />
              </Picker>
            </View>
          </View>

          {/* ============================================================= Upload Image =============================================================== */}
          <TouchableOpacity
            onPress={() => pickImage()}
            style={[
              tw`ml-2 pt-5`,
              {
                flexDirection: "row",
                alignItems: "center",
              },
            ]}
          >
            <Icon
              type="fontawesome"
              name="photo"
              color="#D3D3D3"
              style={tw`w-10`}
            />
            <Text
              style={[
                tw`text-blue-500`,
                {
                  fontSize: 16,
                },
              ]}
            >
              Upload image
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={uploadImage}
            style={[
              tw`pt-10`,
              { flexDirection: "row", justifyContent: "center" },
            ]}
          >
            <View
              style={[
                tw`bg-gray-800 p-2`,
                {
                  width: "80%",
                  borderRadius: 5,
                },
              ]}
            >
              {!uploading ?               <Text
                style={[tw`font-bold text-lg text-center`, { color: "white" }]}
              >
                Save
              </Text>: <ActivityIndicator size='large' color="#000" />}

            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
  shadowedCard: {
    margin: 5,
    borderRadius: 5,
    padding: 2,
    // borderWidth:1
  },
});
