import React from 'react';
import { View, Text, Image } from 'react-native';
import { Colors } from '../../constants/Colors';
import * as Screen from '../../constants/Screen';

const width = Screen.SCREEN_WIDTH;
const height = Screen.SCREEN_HEIGHT;

const ProfileDisplay = () => {
    console.log('ProfileDisplay');
    return (
        <View style={styles.pointsDisplayBox}>
            <View style={styles.pointsDisplayInnerBox}>
                <View>
                    <Text style={styles.pointsEarned}>Total Points: 100</Text>
                </View>
                <View style={styles.offersAvailedBox}>
                    <View style={{ paddingBottom: 5 }}>
                        <Image source={require('../../../assets/images/party-popper.png')} style={styles.partyPopperImage} />
                    </View>
                    <View>
                        <Text style={styles.offersAvailed}>Offers Availed: 0</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = {
    pointsDisplayBox: {
        paddingHorizontal: 6,
        width: '100%',
        alignItems: 'center',
        paddingTop: height / 39.65,
        paddingBottom: height / 26.43,
    },
    pointsDisplayInnerBox: {
        width: '100%',
        height: height / 14.42,
        paddingHorizontal: width / 32.58,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(82,162,231,0.5)',
        borderRadius: 8,
    },
    pointsEarned: {
        fontSize: width / 23,
        fontFamily: 'SF-Pro-Text-Semibold',
    },
    offersAvailedBox: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    partyPopperImage: {
        width: width / 16.29,
        height: width / 16.29,
    },
    offersAvailed: {
        fontSize: width / 27.92,
        fontFamily: 'SF-Pro-Text-Semibold',
        paddingLeft: width / 130,
    },
}

export default ProfileDisplay;