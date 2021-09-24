import React from 'react'
import { View, Text, StatusBar, StyleSheet } from 'react-native'

const ProductScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Product Details</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        marginTop:StatusBar.currentHeight
    }
})

export default ProductScreen
