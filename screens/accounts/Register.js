import React from 'react'
import { StyleSheet, Text, View, StatusBar, TextInput, SafeAreaView, TouchableOpacity, Button, ScrollView } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/core'

export default function Register() {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={{
            marginTop: StatusBar.currentHeight,
            flex: 1,
            justifyContent: 'center',
        }}>
            <ScrollView 
            contentContainerStyle={{
                flexGrow:1,
                justifyContent:'center'
            }}
            >
                {/* Shadowed card */}
                <View style={[styles.shadowedCard, tw`shadow-md`]}>

                    {/* Card Header */}

                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: 10
                    }}>
                        <View>
                            <Text style={tw`font-bold text-gray-700 text-2xl`}>
                                Create account
                            </Text>
                        </View>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('AccountScreen')}

                        >
                            <Icon
                                type="antdesign"
                                name="closecircle"
                                color="gray"
                                style={tw`w-10`}

                            />
                        </TouchableOpacity>

                    </View>


                    {/* ============================================================== Email Address Input ======================================*/}
                    <View style={[tw`m-2 pt-10`, {
                        flexDirection: 'row',
                        alignItems: 'center'
                    }]}>
                        <Icon
                            type="antdesign"
                            name="mail"
                            color="gray"
                            style={tw`w-10`}

                        />
                        <View style={[{
                            borderColor: 'gray',
                            borderRadius: 5,
                            borderBottomWidth: 1,
                            flex: 1
                        }]}>
                            <TextInput placeholder="Enter email" style={{
                                padding: 0,
                                fontSize:16
                            }} />
                        </View>
                    </View>


                    {/* ====================================================================== Phone number input address xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/}
                    <View
                    style={[tw`m-2 pt-5`,{
                        flexDirection:'row',
                        alignItems:'center',
                    }]}
                    >
                    <Icon
                        type="antdesign"
                        name="phone"
                        color="gray"
                        style={tw`w-10`}

                        />
                    <View style={[{
                        // borderWidth: 1,
                        borderColor: 'gray',
                        borderRadius: 5,
                        borderBottomWidth: 1,
                        flex: 1
                    }]}>

                        <TextInput placeholder="Enter phone number" style={{
                            padding: 0,
                            fontSize:16
                        }} />
                    </View>
                    </View>

                    {/* =========================================================== Enter Password ========================================= */}

                    <View
                    style={[tw`m-2 pt-5`,{
                        flexDirection:'row',
                        alignItems:'center'
                    }]}
                    >
                    <Icon
                        type="antdesign"
                        name="lock"
                        color="gray"
                        style={tw`w-10`}

                        />
                    <View style={[{
                        // borderWidth: 1,
                        borderColor: 'gray',
                        borderRadius: 5,
                        borderBottomWidth: 1,
                        flex: 1
                    }]}>

                        <TextInput placeholder="Enter password" secureTextEntry={true} style={{
                            flex: 1,
                            fontSize:16
                        }} />
                    </View>
                    </View>

{/* ============================================================= Confirm password ========================================================= */}
                    <View style={[tw`m-2 pt-5`,{
                        flexDirection:'row',
                        alignItems:'center'
                    }]}>
                    <Icon
                            type="antdesign"
                            name="unlock"
                            color="gray"
                            style={tw`w-10`}

                        />
                    <View style={[{
                        // borderWidth: 1,
                        borderColor: 'gray',
                        borderRadius: 5,
                        borderBottomWidth: 1,
                        flex: 1
                    }]}>

                        <TextInput placeholder="Confirm password" secureTextEntry={true} style={{
                            flex: 1,
                            fontSize:16
                        }} />
                    </View>
                    </View>

                    <TouchableOpacity style={[tw`pt-10`, { flexDirection: "row", justifyContent: 'center' }]} >
                        <View style={[tw`bg-gray-800 p-2`, {
                            width: '80%',
                            borderRadius: 5
                        }]}>
                            <Text style={[tw`font-bold text-lg text-center`, { color: 'white' }]}>
                                Sign Up
                            </Text>
                        </View>

                    </TouchableOpacity>

                    {/* Horizontal Line */}
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <View style={[{ flexDirection: 'row', alignItems: 'center', width: '80%' }, tw`pt-3`]}>
                            <View style={[{ flex: 1, height: 1, backgroundColor: 'gray' }, tw`bg-gray-200`]}></View>
                            <View>
                                <Text style={tw`text-center pl-2 pr-2 font-bold text-lg text-gray-800`}>OR</Text>
                            </View>
                            <View style={[{ flex: 1, height: 1 }, tw`bg-gray-200`]}></View>
                        </View>
                    </View>

                    <TouchableOpacity style={[tw`mt-5`, { flexDirection: 'row', justifyContent: 'center' }]}>
                        <View style={[tw`bg-gray-900 p-2`, {
                            width: '80%',
                            borderRadius: 5,
                        }]}>
                            <Text style={tw`text-red-500 text-center font-bold`}>Continue with Google</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={[{ flexDirection: 'row', justifyContent: "center" }, tw`pb-5`]}>
                        <TouchableOpacity style={tw`p-0.5 pt-10`}>
                            <Text style={tw`font-bold text-gray-600`} onPress={() => navigation.navigate('LoginScreen')}>Have an account,Sign In?</Text>
                        </TouchableOpacity>
                    </View>
                </View>



            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight
    },
    shadowedCard: {
        margin: 5,
        borderRadius: 5,
        padding: 2
        // borderWidth:1
    }

})
