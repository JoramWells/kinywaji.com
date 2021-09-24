import React from 'react'
import { Text, StyleSheet, TextInput } from 'react-native'
const Navbar = () => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.navtext}>Kinywaji</Text>
            <TextInput style={styles.input} placeholder="Search..." />
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
        borderRadius: 5,
        padding: 5,
        fontSize: 18
    }
})

export default Navbar
