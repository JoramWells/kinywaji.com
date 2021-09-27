import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/core'


const Banner = ({ title, icon }) => {
    const navigation = useNavigation()
    return (
        <View style={[tw`bg-gray-900 p-2 m-3 shadow-sm`, {
            flexDirection: 'row',
            justifyContent: icon ? 'space-between': 'center',
            borderTopLeftRadius: 10,
            borderBottomRightRadius: 10,

        }]}>
            <Text style={[tw`text-white font-bold text-lg`,
            {
                textShadowColor: "#00A064",
                textShadowOffset: { width: 0.5, height: 0.5 },
                textShadowRadius: 10

            }]}> {title}</Text>
            {icon &&
                <Icon
                    type="antdesign"
                    name="rightcircle"
                    color="#00A064"
                    style={[tw`w-10`]}
                    onPress={() => navigation.navigate('ProductScreen')}

                />
            }

        </View>
    )
}

export default Banner

const styles = StyleSheet.create({})
