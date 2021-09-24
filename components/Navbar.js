import React from 'react'
import { Text, StyleSheet, TextInput, View } from 'react-native'
import { Icon } from 'react-native-elements'
const Navbar = () => {
    return (
        <View style={styles.navbar}>
            <TextInput style={styles.input} placeholder="Search..." />
            <Icon
                type="antdesign"
                name="shoppingcart"
                color="white"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        backgroundColor: "black",
        padding: 10,
        marginTop: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    navtext: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
        marginRight: 10
    },
    input: {
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 100,
        padding: 4,
        fontSize: 18
    }
})

export default Navbar
