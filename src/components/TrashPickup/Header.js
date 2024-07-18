import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { MotiView } from "moti";
import { MotiPressable } from "moti/interactions";
import Svginserter from '../../components/shared/Svginserter';
import { Colors } from '../../constants/Colors';
import * as Screen from '../../constants/Screen';

const width = Screen.SCREEN_WIDTH;
const height = Screen.SCREEN_HEIGHT;

const Header = ({ profile, showMenu }) => {
    return (
        <View style={styles.header}>
            <View style={styles.headerheading}>
                <Text style={styles.headerheadingTxt}>Trash Pickup</Text>
            </View>
            <MotiView style={styles.profileAvatarBox}
                from={{ borderRadius: 0 }}
                animate={{ borderTopLeftRadius: showMenu ? 35 : 0 }}
                transition={showMenu ? { type: 'timing', duration: 100 } : { type: 'timing', duration: 650 }}
            >
                <MotiPressable onPress={() => { console.log('Clicked on Profile') }}
                    from={{ scale: 1 }}
                    animate={({ pressed }) => {
                        'worklet'
                        return {
                            scale: pressed ? 0.9 : 1,
                        }
                    }}>
                    <View style={styles.profileAvatar}>
                        {profile ? <Image source={require('../../../assets/images/tomato.png')} style={{ width: width / 9.775, height: width / 9.775 }} /> : <Svginserter tag={'UserProfileDefault'} width={width / 9.9775} height={width / 9.9775} />}
                    </View>
                </MotiPressable>
            </MotiView>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        alignItems: 'center',
        paddingTop: height / 15.86,
        paddingBottom: height / 39.65,
    },
    headerheading: {
        marginTop: width / 78.2,
    },
    headerheadingTxt: {
        color: Colors.palette_secondary,
        fontSize: width / 19.55,
        fontFamily: 'SF-Pro-Rounded-Semibold',
    },
    profileAvatarBox: {
        position: 'absolute',
        zIndex: 100,
        right: 0,
        paddingRight: width / 8.68,
        paddingTop: height / 15.86,
        paddingBottom: height / 79.3,
    },
    profileAvatar: {
        width: width / 9.775,
        height: width / 9.775,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: Colors.bg,
        shadowColor: 'black',
        elevation: 4,
    },
});

export default Header;