import React from 'react'
import {  Text, SafeAreaView, StyleSheet, StatusBar } from 'react-native'
import Navbar from '../components/Navbar'

const HomeScreen = () => {
    return (
        <SafeAreaView styles={styles.container}>
            <Navbar/>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:24
    }
})
export default HomeScreen
