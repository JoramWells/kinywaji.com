import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ActivityIndicator, FlatList, Image } from 'react-native'
import axios from 'axios'

const MoreItems = () => {
    const numColumns = 3
    const [users, setUsers] = useState([])
    const [currPage, setCurrPage] = useState(1)
    const getUsers = async () => {
        await axios.get(`https://randomuser.me/api/?page=${currPage}&results=10`)
            .then(res => setUsers([...users, ...res.data.results]))

    }

    const renderItem = ({ item }) => {
        return (
            <View style={styles.itemWrapper}>
                <Image source={{uri:item.picture.large}} style={styles.image} />
                <View style={styles.cardBody}>
                    <Text style={styles.name}>
                        {`${item.name.title} ${item.name.first} ${item.name.last}`}
                    </Text>
                    <Text style={styles.content}>
                        {item.email}
                    </Text>
                </View>
                <View style={styles.cardFooter}>
                    <Text style={styles.cardText}>
                        KSH. 1,999.00
                    </Text>

                </View>
            </View>
        )
    }


    const renderLoader = () => {
        return (
            <View>
                <ActivityIndicator size="large" color="aaa" />
            </View>
        )
    }
    const loadMoreItem = () => {
        setCurrPage(currPage + 1)
    }
    useEffect(() => {
        getUsers()
    }, [currPage])

    const navigation = useNavigation();
    return (
        <FlatList
        data= {users}
        renderItem= {renderItem}
        keyExtractor={item=>item.email}
        ListFooterComponent={renderLoader}
        onEndReached={loadMoreItem}
        onEndReachedThreshold={0}
        numColumns={numColumns}
         />
    )
}

const styles = StyleSheet.create({
    container: {},
    banner: {
        // backgroundColor:"gray",
        margin: 5,
        padding: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10


    },
    text: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    root: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 20

    },
    image: {
        width: 169,
        height: 100,
        marginRight: 16,

    },
    itemWrapper: {
        flexDirection: 'column',
        // paddingHorizontal: 16,
        // paddingVertical: 16,
        borderColor: "#ddd",
        borderWidth: 1,
        margin: 5,
        width: 170,
        borderRadius: 5,
        // shadowColor:"#000",
        // shadowOffset:{
        //     width: 0,
        //     height: 5
        // },
        // elevation:5,
        // shadowOpacity:0.1,
        // shadowRadius:8.30

    },
    content: {
        justifyContent: 'space-around',
        color: '#777'

    },
    name: {
        fontSize: 16
    },
    loader: {
        marginVertical: 16,
        alignItems: 'center'
    },
    container: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        flex: 1,
        flexGrow: 1,
        flexWrap: 'wrap',
        display: 'flex'
    },
    cardBody: {
        padding: 10,
        height: 70
    },
    cardFooter: {
        margin: 5,
    },
    cardText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#282C35'
    }
})



export default MoreItems
