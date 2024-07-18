import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Colors } from '../../constants/Colors';
import * as Screen from '../../constants/Screen';

const width = Screen.SCREEN_WIDTH;
const height = Screen.SCREEN_HEIGHT;

const PickupDetails = (props) => {
    console.log('PickupDetails');
    return (
        <View style={styles.pickupDetailsBox}>
            <View style={styles.pickupDetailsHeaderBox}>
                <View style={styles.pickupDetailsHeading}><Text style={styles.pickupDetailsHeadingTxt}>Pickup Details</Text></View>
                <TouchableOpacity activeOpacity={0.45} style={styles.ChangeBtn}
                    onPress={() => { props.setHidewrapper(!props.hidewrapper) }}
                >
                    <Text style={styles.ChangeBtnTxt}>Change</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.UserDetails}>
                <View style={styles.UserBox}>
                    <View><Text style={styles.UserTitle}>Address:</Text></View>
                    <View><Text style={styles.UserSubheading}>{props.Address}</Text></View>
                </View>
                <View style={styles.UserBox}>
                    <View><Text style={styles.UserTitle}>Contact:</Text></View>
                    <View><Text style={styles.UserSubheading}>{props.Contact}</Text></View>
                </View>
                <View style={styles.UserBox}>
                    <View><Text style={styles.UserTitle}>Time:</Text></View>
                    <View><Text style={styles.UserSubheading}>{props.Time}</Text></View>
                </View>
            </View>
        </View>
    )
}

const styles = {
    pickupDetailsBox: {
        width: width / 1.2613,
        paddingBottom: height / 39.65,
    },
    pickupDetailsHeaderBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: height / 79.3,
    },
    pickupDetailsHeadingTxt: {
        color: Colors.palette_secondary,
        fontSize: width / 16.29,
        fontFamily: 'SF-Pro-Text-Semibold',
    },
    ChangeBtn: {
        width: width / 5.586,
        height: width / 13.03,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        backgroundColor: 'rgba(82, 162, 231, 0.5)',
    },
    ChangeBtnTxt: {
        fontSize: width / 27.93,
        fontFamily: 'SF-Pro-Rounded-Semibold',
        color: Colors.palette_secondary,
        opacity: 0.85,
    },
    UserBox: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingVertical: width / 130,
    },
    UserTitle: {
        width: 'auto',
        fontSize: width / 21.72,
        fontFamily: 'SF-Pro-Text-Medium',
        marginRight: width / 19.55,
        textAlign: 'right',
        width: width / 5.586,
    },
    UserSubheading: {
        width: width / 1.78,
        lineHeight: width / 15.64,
        fontSize: width / 24.438,
        fontFamily: 'SF-Pro-Text-Semibold',
        color: Colors.palette_secondary,
        opacity: .5,
    },
}

export default PickupDetails;