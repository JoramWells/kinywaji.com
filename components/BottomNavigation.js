import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/core'


const BottomNavigation = () => {
    const navigation = useNavigation()
    return (
        <View style={[tw`bg-gray-800 shadow-md`, styles.container]}>
            <View style={styles.textContainer}>
                <Icon
                    type="antdesign"
                    name="home"
                    color="white"
                    style={tw`bg-black rounded-full w-10 bg-opacity-10`}

                />
                <Text style={[tw`text-white`]}>
                    Home
                </Text>
            </View>

            <View style={styles.textContainer} >
                <Icon
                    type="antdesign"
                    name="bars"
                    color="white"
                    style={tw`bg-black rounded-full w-10 bg-opacity-10`}

                />
                <Text style={[tw`text-white`]}>
                    Categories
                </Text>
            </View>
            <TouchableOpacity style={styles.textContainer}
                onPress={() => navigation.navigate('AccountScreen')}
            >
                <Icon
                    type="antdesign"
                    name="user"
                    color="white"
                    style={tw`bg-black rounded-full w-10 bg-opacity-10`}

                />
                <Text style={[tw`text-white`]}>
                    Account
                </Text>

            </TouchableOpacity>


        </View>
    )
}

export default BottomNavigation

const styles = StyleSheet.create({
    container: {
        bottom: 0,
        // padding: 20,
        margin: 5,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text: {
        color: 'white'
    },
    textContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }

})
