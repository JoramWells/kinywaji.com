import React from 'react'
import { Text, View, StyleSheet, StatusBar, ScrollView } from 'react-native'
import BottomNavigation from '../components/BottomNavigation'
import MoreItems from '../components/MoreItems'
import MoreItemsBanner from '../components/MoreItemsBanner'
import Navbar from '../components/Navbar'
import RecentDrinks from '../components/RecentDrinks'

const HomeScreen = () => {
    return (
        <>
            <Navbar />
            <ScrollView >
                <RecentDrinks />
                <MoreItemsBanner />
                <MoreItems />
            </ScrollView>
            <BottomNavigation/>
        </>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 24
    }
})
export default HomeScreen
