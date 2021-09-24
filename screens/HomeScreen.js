import React from 'react'
import {  Text,View, StyleSheet, StatusBar } from 'react-native'
import Navbar from '../components/Navbar'
import RecentDrinks from '../components/RecentDrinks'

const HomeScreen = () => {
    return (
        <View >
            <Navbar/>
            <RecentDrinks />
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:24
    }
})
export default HomeScreen
