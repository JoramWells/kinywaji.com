import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements'

const MoreItemsBanner = () => {
    return (
        <View >
            <View style={[tw`shadow-sm bg-gray-700`, styles.banner]}>
                <Text style={[styles.text]}>
                    More drinks for you
                </Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('ProductScreen')}

                >
                    <Icon
                        type="antdesign"
                        name="arrowright"
                        color="white"
                        style={tw`p-2 bg-black rounded-full w-10 bg-opacity-10`}

                    />
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default MoreItemsBanner

const styles = StyleSheet.create({
    banner: {
        // backgroundColor:"gray",
        margin: 5,
        padding: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10


    },
    text: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
})
