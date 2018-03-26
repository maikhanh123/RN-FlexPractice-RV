import React, { Component } from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';

export default class Example1 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.bgTop}></View>

                <View style={styles.bgBottom}></View>

                <View style={styles.body}>
                    <View style={{
                        justifyContent: 'flex-start',
                        flexDirection: 'row',
                    }}>
                        <Image source={require('../assets/charlie_puth.png')} style={styles.image} />

                        <View style={styles.bodyContent}>

                            <Text style={styles.title}>Introduction to meditation</Text>
                            <View style={{
                                justifyContent: 'flex-start',
                                flexDirection: 'row',
                            }}>
                                <View style={styles.bottomInfo}>
                                    <Image source={require('../assets/ic_time.png')} style={styles.iconTime} />
                                    <Text style={styles.textTime}>2:43</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={{
                        justifyContent: 'flex-start',
                        flexDirection: 'row',
                    }}>
                        <TouchableOpacity onPress={this.onPlay} style={styles.button}>
                            <Image source={require('../assets/ic_play.png')} style={styles.button} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.flatten({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },

    bgTop: {
        backgroundColor: '#81C784',
        flex: 1
    },

    bgBottom: {
        backgroundColor: '#F5F5F5',
        flex: 1
    },

    body: {
        width: '90%',
        height: 120,
        borderRadius: 20,
        position: 'absolute',
        backgroundColor: 'white',
        alignSelf: 'center',
        // justifyContent: 'center',
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10
    },

    image: {
        width: 100,
        height: 100,
        borderRadius: 20,
        alignSelf: 'center',
    },

    bodyContent: {
        // flex: 1,
        padding: 10,
        // left: 0,
        // justifyContent: 'flex-start',
        // flexDirection: 'row',
        justifyContent: 'space-around',
        flexDirection: 'column',


    },

    button: {
        width: 50,
        height: 50,
        alignSelf: 'center',
        marginLeft: -40,
        // position: 'relative'
    },

    title: {
        color: '#2196F3',
        fontSize: 20,
        fontWeight: '700',
        width: 200,
    },

    bottomInfo: {
        flexDirection: 'row',
        // alignItems: 'center',
        // position: 'absolute',
        // alignSelf: 'flex-end',
        marginLeft: 5,
        paddingBottom: 5
    },

    iconTime: {
        width: 30,
        height: 30,
        borderRadius: 20,
        alignSelf: 'center'
    },

    textTime: {
        color: 'gray'
    }
});