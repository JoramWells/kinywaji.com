import React from 'react'
import {  Text, SafeAreaView, StyleSheet, StatusBar } from 'react-native'
import Navbar from '../components/Navbar'
import RecentDrinks from '../components/RecentDrinks'

const HomeScreen = () => {
    return (
        <SafeAreaView styles={styles.container}>
            <Navbar/>
            <RecentDrinks />
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
