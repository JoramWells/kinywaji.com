import React from 'react'
import { Text, StyleSheet, SafeAreaView, TextInput } from 'react-native'

const Navbar = () => {
    return (
        <SafeAreaView style={styles.navbar}>
            <Text style={styles.navtext}>Kinywaji</Text>
                <TextInput style={styles.input} placeholder="Search..." />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    navbar: {
        backgroundColor: "black",
        padding: 10,
        marginTop:24,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    navtext: {
        color: 'white',
        fontSize:18,
        fontWeight:'bold'
    },
    input:{
        backgroundColor:'white',
        flex: 1
    }
})

export default Navbar
