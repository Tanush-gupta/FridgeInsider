/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text } from 'react-native';
import { MotiPressable } from 'moti/interactions';
import LinearGradient from 'react-native-linear-gradient';
import Svginserter from '../../components/shared/Svginserter';
import { Colors } from '../../constants/Colors';
import * as Screen from '../../constants/Screen';

const width = Screen.SCREEN_WIDTH;
const height = Screen.SCREEN_HEIGHT;

const Banner = () => {
    console.log('Banner');
    return (
        <MotiPressable style={{ width: '100%', borderRadius: 32 }} onPress={() => { console.log('Clicked on Banner'); }}
            from={{ scale: 1 }}
            animate={({ pressed }) => {
                'worklet';
                return {
                    scale: pressed ? 0.98 : 1,
                };
            }}
            transition={{
                type: 'timing',
                duration: 150,
            }}>
            <LinearGradient colors={['#adc275', '#7e973c']} locations={[0, 1]} style={styles.banner}>
                <View style={styles.bannerHeadingBox}>
                    <View>
                        <Text style={styles.bannerHeadingTxt}>Join our recycling program and earn rewards.</Text>
                    </View>
                    <View>
                        <Text style={styles.bannerSubHeadingTxt}>With you we will help ecology</Text>
                    </View>
                </View>
                <View style={styles.bannerImage}>
                    <Svginserter tag={'Bannerillustration'} width={width / 2.594} height={height / 6.72} />
                </View>
            </LinearGradient>
        </MotiPressable>
    );
};

const styles = {
    banner: {
        width: '100%',
        height: height / 5.29,
        flexDirection: 'row',
        borderRadius: 12,
    },
    bannerHeadingBox: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: width / 15.64,
        paddingBottom: height / 52.86,
    },
    bannerHeadingTxt: {
        width: '70%',
        fontFamily: 'SF-Pro-Text-Bold',
        fontSize: width / 17.8,
        color: Colors.palette_secondary,
        opacity: 0.8,
        textAlign: 'left',
    },
    bannerSubHeadingTxt: {
        paddingTop: width / 78.2,
        fontSize: width / 30.07,
        fontFamily: 'SF-Pro-Text-Medium',
        textAlign: 'left',
        opacity: 0.55,
    },
    bannerImage: {
        position: 'absolute',
        right: 0,
        alignSelf: 'center',
    },
};

export default Banner;
