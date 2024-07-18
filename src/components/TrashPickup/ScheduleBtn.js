import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { MotiPressable } from "moti/interactions";
import { Colors } from '../../constants/Colors';
import * as Screen from '../../constants/Screen';

//components
import CustomAlertDialog from './CustomAlertDialog';

const width = Screen.SCREEN_WIDTH;
const height = Screen.SCREEN_HEIGHT;

const Button = (props) => {
    const [dialogVisible, setDialogVisible] = useState(false);

    const handleCancel = () => {
        setDialogVisible(false);
    };

    const handleConfirm = () => {
        setDialogVisible(false);
        // Perform confirm action here
    };

    console.log('Schedule Button');
    return (
        <View style={styles.ScheduleBtnBox}>
            <MotiPressable style={styles.ScheduleBtn} onPress={() => { setDialogVisible(true) }}
                from={{ scale: 1, opacity: 1 }}
                animate={({ pressed }) => {
                    'worklet'
                    return {
                        scale: pressed ? 0.97 : 1,
                        backgroundColor: pressed ? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0,0.1)',
                    }
                }}>
                <Text style={styles.ScheduleBtnTxt}>Schedule</Text>
            </MotiPressable>
            <CustomAlertDialog
                visible={dialogVisible}
                title="Confirm your Pickup"
                onCancel={handleCancel}
                onConfirm={handleConfirm}
            />
        </View>
    )
};

const styles = {
    ScheduleBtnBox: {
        width: width / 1.15,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    ScheduleBtn: {
        flexDirection: 'row',
        width: width / 1.26,
        height: height / 17.62,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.1)',
    },
    ScheduleBtnTxt: {
        fontSize: width / 24.438,
        fontFamily: 'SF-Pro-Text-Semibold',
        color: Colors.palette_secondary,
        opacity: 0.85,
    },
}

export default Button;