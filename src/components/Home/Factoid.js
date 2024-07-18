/* eslint-disable react-native/no-inline-styles */
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
// import { LinearGradient } from "expo-linear-gradient";
import LinearGradient from 'react-native-linear-gradient';
import Svginserter from '../shared/Svginserter';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../constants/Screen';
import { Colors } from '../../constants/Colors';
import React from 'react';

const Factoid = ({ item }) => {
    return (
        <View style={styles.main}>
            <View style={styles.FactContainer}>
                <LinearGradient colors={['#f9a236', '#df7325']} locations={[0, 0.8]} style={styles.FactBox}>
                    <View style={{ paddingLeft: 25 }}>
                        <View style={styles.FactheadingBox}>
                            <Text style={styles.Factheading}>{item.heading}</Text>
                        </View>
                        <View style={styles.FactContentBox}>
                            <Text style={styles.FactContentTxt}>{item.description}</Text>
                        </View>
                        <TouchableOpacity
                            activeOpacity={0.6}
                            style={styles.FactBtn}
                            onPress={() => { console.log('Clicked on Trending Read Now'); }} >
                            <View>
                                <Text style={styles.FactBtnTitle}>Read Now</Text>
                            </View>
                            <View>
                                <Svginserter tag={'ArrowRight'} width={24} height={24} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
                <View style={styles.FactImageBox}>
                    <Image source={require('../../../assets/images/kiwi_illustration.png')} style={styles.FactImage} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        width: SCREEN_WIDTH,
        alignItems: 'center',
        //   marginHorizontal:16.4,
    },
    FactContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        maxHeight: 200,
        width: SCREEN_WIDTH / 1.155,
        marginTop: SCREEN_HEIGHT / 79.3,
        borderRadius: 25,
        backgroundColor: Colors.palette_white,
        shadowColor: Colors.palette_secondary,
        elevation: 6,
        marginVertical: 10,
    },
    FactBox: {
        flex: 0.7,
        height: '100%',
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: Colors.palette_primary,
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
    },
    FactheadingBox: {
        paddingBottom: SCREEN_WIDTH / 78.2,
    },
    Factheading: {
        color: Colors.palette_white,
        fontFamily: 'SF-Pro-Rounded-Semibold',
        fontSize: SCREEN_WIDTH / 24.4375,
        letterSpacing: 1.4,
    },
    FactContentBox: {
        // paddingRight: SCREEN_WIDTH / 39.1,
        width: SCREEN_WIDTH / 2.5,
    },
    FactContentTxt: {
        color: Colors.palette_secondary,
        fontFamily: 'SF-Pro-Rounded-Medium',
        fontSize: SCREEN_WIDTH / 21.72,
    },
    FactBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start',
        paddingVertical: SCREEN_WIDTH / 99.875,
        paddingHorizontal: SCREEN_WIDTH / 26.1,
        borderRadius: 8,
        backgroundColor: 'rgba(255,255,255,0.6)',
    },
    FactBtnTitle: {
        color: Colors.palette_white,
        fontSize: SCREEN_WIDTH / 24.438,
        fontFamily: 'SF-Pro-Rounded-Semibold',
    },
    FactImageBox: {
        flex: 0.4,
        alignItems: 'center',
    },
    FactImage: {
        width: SCREEN_WIDTH / 2.589,
        height: SCREEN_WIDTH / 2.429,
    },
});

export default Factoid;
