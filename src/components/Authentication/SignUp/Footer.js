import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Colors } from '../../../constants/Colors';
import * as Screen from '../../../constants/Screen';

//components
import Button from '../../shared/Button';

const width = Screen.SCREEN_WIDTH;
const height = Screen.SCREEN_HEIGHT;

const Footer = (props) => {
    return (
        <View style={styles.footer}>
            <Button Title={'Sign-up'} BtnHighlight={styles.btnhighlight} BtnBox={styles.btnbox} BtnTxt={styles.btn} handleonPress={props.Register} />
            <TouchableOpacity onPress={() => { props.setLogin(true); }}>
                <View>
                    <Text style={styles.AccAlreadytxt}>Already have{'\n'}Account?
                        <Text style={styles.AccAlreadyLogintxt}> Login</Text>
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = {
    footer: {
        width: width,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: height / 52.87,
        paddingHorizontal: width / 9,
    },
    btnhighlight: {
        width: width / 2.6,
        height: width / 6.8,
        borderRadius: 30,
        backgroundColor: Colors.body_light,
    },
    btnbox: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: Colors.body_light,
    },
    btn: {
        fontSize: width / 23,
        fontFamily: 'SF-Pro-Rounded-Bold',
        letterSpacing: 0.8,
        color: '#FFFFFF',
    },
    AccAlreadytxt: {
        fontFamily: 'SF-Pro-Text-Medium',
        color: Colors.medium_gray,
        fontSize: width / 27,
    },
    AccAlreadyLogintxt: {
        fontFamily: 'SF-Pro-Text-Bold',
        color: Colors.dark_gray,
    },
};

export default Footer;
