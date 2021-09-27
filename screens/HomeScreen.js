import React from 'react'
import { Text, View, StyleSheet, StatusBar, ScrollView } from 'react-native'
import Banner from '../components/Banner'
import BottomNavigation from '../components/BottomNavigation'
import MoreItems from '../components/MoreItems'
import Navbar from '../components/Navbar'
import RecentDrinks from '../components/RecentDrinks'

const HomeScreen = () => {
    return (
        <>
            <Navbar />
            <ScrollView >
                <RecentDrinks title={'Recent drinks'} />
                <RecentDrinks title={'Wines'} />
                <RecentDrinks title={'Whisky'} />
                <RecentDrinks title={'Spirits'} />
                <RecentDrinks title={'Beer'} />
                <RecentDrinks title={'Food Bar'} />
                <Banner title="More Drinks for you" />
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
