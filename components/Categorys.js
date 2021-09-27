import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Icon } from 'react-native-elements'


const Categorys = () => {
    return (
        <View>
            <ScrollView
                horizontal>
                <View
                    style={{
                        borderWidth: 1,
                        borderColor: 'gray',
                        borderRadius: 50,
                        padding: 2,
                        paddingLeft: 5,
                        paddingRight: 5

                    }}
                >
                    <Text>Wine</Text>
                </View>
                <View
                    style={{
                        borderWidth: 1,
                        borderColor: 'gray',
                        borderRadius: 50,
                        padding: 2,
                        paddingLeft: 5,
                        paddingRight: 5

                    }}
                >
                    <Text>Whisky</Text>
                </View>
                <View
                    style={{
                        borderWidth: 1,
                        borderColor: 'gray',
                        borderRadius: 50,
                        padding: 2,
                        paddingLeft: 5,
                        paddingRight: 5

                    }}
                >
                    <Text>Spirits</Text>

                </View>
                <View
                    style={{
                        borderWidth: 1,
                        borderColor: 'gray',
                        borderRadius: 50,
                        padding: 2,
                        paddingLeft: 5,
                        paddingRight: 5

                    }}
                >
                    <Text>Beer</Text>

                </View>
            </ScrollView>
        </View>

    )
}

export default Categorys

const styles = StyleSheet.create({})
