import React from "react";
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import Navbar from "../components/Navbar";

const ProductScreen = () => {
  return (
    <>
      <Navbar />
      <ScrollView contentContainerStyle={styles.container}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            flex: 1,
            justifyContent: "center",
          }}
        >
          <Image
            source={{
              uri: "https://i1.wp.com/kinywaji.com/wp-content/uploads/2021/03/chianti.jpg?ssl=1",
            }}
            style={{
              width: 250,
              height: 250,
              resizeMode: "contain",
            }}
          />
        </View>
        <View
          style={{
            margin: 10,
          }}
        >
          <Text style={[tw` text-2xl font-bold text-gray-700`]}>
            Tusker Laga
          </Text>
          <Text style={[tw`text-lg`]}>Brand: Wine</Text>
          <Text style={[tw`font-bold text-lg text-red-400`]}>
            Price: KES 800.00
          </Text>
          <Text style={[tw`text-gray-500`]}>Shipping details</Text>
          <Text style={[tw`text-gray-400`]}>Rating | Love | Share</Text>
        </View>
        <View
          style={{
            margin: 10,
          }}
        >
          {/* ========================================= Horizontal Line ====================================== */}

          <View>
            <Text style={[tw`text-black font-bold text-lg text-gray-900`]}>
              Description
            </Text>
  
            <View
              style={[
                { flex: 1, height: 2, backgroundColor: "#00A064", width: "10%" }
              ]}
            ></View>

          </View>

          <Text
            style={[
              tw`text-gray-500`,
              {
                fontSize: 16,
              },
            ]}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum!
          </Text>
        </View>

        {/* ======================================================= Related Items =====================================*/}

        <View
          style={{
            margin: 10,
          }}
        >
            <Text style={[tw`text-black font-bold text-lg text-gray-900`]}>
              Related Items
            </Text>
            <View
              style={[
                { flex: 1, height: 2, backgroundColor: "#00A064", width: "15%" }
              ]}
            ></View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            flex: 1,
            justifyContent: "center",
          }}
        >
          <Image
            source={{
              uri: "https://i1.wp.com/kinywaji.com/wp-content/uploads/2021/03/chianti.jpg?ssl=1",
            }}
            style={{
              width: 100,
              height: 100,
              resizeMode: "contain",
            }}
          />
        </View>
      </ScrollView>

      {/* ================================================================ Footer ====================================== */}
      <View
        style={{
          flexDirection: "row",
          bottom: 2,
          justifyContent: "space-between",
          padding: 10,
          backgroundColor: "white",
        }}
      >
        <TouchableOpacity
          style={[
            tw`bg-gray-900 mr-1 p-2 shadow-md`,
            {
              width: "50%",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 5,
            },
          ]}
        >
          <Text style={[tw`text-white font-bold text-lg`]}>Add to cart</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            tw`bg-gray-900 ml-1 p-2 shadow-md`,
            {
              width: "50%",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 5,
            },
          ]}
        >
          <Text style={[tw`text-white font-bold text-lg`]}>Buy</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    backgroundColor: "white",
    // flexGrow: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // backgroundColor: "white",
  },
});

export default ProductScreen;
