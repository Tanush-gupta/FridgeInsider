import React from "react";
import { View, Text, TextInput } from "react-native";

import { Colors } from "../../constants/Colors";
import * as Screen from "../../constants/Screen";

const width = Screen.SCREEN_WIDTH;
const height = Screen.SCREEN_HEIGHT;

const InputBox = (props) => {
    return (
        <View style={styles.InputBox}>
            <Text style={styles.InputHeadingTxt}>{props.Title}</Text>
            <View style={styles.InputTextBox}>
                <TextInput
                    style={styles.input}
                    placeholder={props.placeholder}
                    onChangeText={props.onChangeText}
                    value={props.value}
                    cursorColor={Colors.palette_secondary}
                    autoFocus={false}
                />
            </View>
        </View>
    )
}

const styles = {
    InputBox: {
        marginBottom: height / 52.86,
    },
    InputHeadingTxt: {
        fontSize: width / 21.72,
        fontFamily: 'SF-Pro-Text-Medium',
    },
    InputTextBox: {
        height: height / 15,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: width / 65.16,
        shadowColor: Colors.palette_secondary,
        elevation: 2,
    },
    input: {
        width: '100%',
        height: '100%',
        paddingHorizontal: width / 27.92,
        fontSize: width / 27.92,
        fontFamily: 'SF-Pro-Text-Regular',
    },
}

export default InputBox;