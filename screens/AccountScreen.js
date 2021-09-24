import React from 'react'
import { Text, View, StyleSheet, StatusBar, ScrollView } from 'react-native'
import BottomNavigation from '../components/BottomNavigation'
import tw from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements'


const HomeScreen = () => {
    return (
        <>
            <View style={[tw`bg-black p-3`, styles.container]}>
                <Text style={[tw`text-white text-xl font-bold`]}>My account</Text>
            </View>
            <ScrollView style={[tw`p-5`]} >
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent:'space-between',
                    margin: 5
                }}>
                    <View
                    style={{
                        flexDirection:'row',
                        alignItems:'center'
                    }}
                    >
                        <Icon
                            type="fontawesome"
                            name="border-style"
                            color="black"
                            style={[tw`w-10`]}

                        />
                        <Text>Recent orders</Text>
                    </View>

                    <Icon
                        type="fontawesome"
                        name="chevron-right"
                        color="black"
                        style={tw`rounded-full w-10`}

                    />
                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent:'space-between',
                    margin: 5
                }}>
                    <View
                    style={{
                        flexDirection:'row',
                        alignItems:'center'
                    }}
                    >
                        <Icon
                            type="fontawesome"
                            name="inbox"
                            color="black"
                            style={tw`rounded-full w-10`}

                        />
                        <Text>Inbox</Text>
                    </View>

                    <Icon
                        type="fontawesome"
                        name="chevron-right"
                        color="black"
                        style={tw`rounded-full w-10`}

                    />
                </View>

            </ScrollView>
            <BottomNavigation />
        </>

    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight
    }
})
export default HomeScreen
