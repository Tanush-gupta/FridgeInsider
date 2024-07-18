import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal, TouchableWithoutFeedback } from 'react-native';
import { MotiPressable } from 'moti/interactions';
import { Colors } from '../../constants/Colors';
import * as Screen from '../../constants/Screen';

//components
import InputBox from './InputBox';
import Svginserter from '../shared/Svginserter';

const width = Screen.SCREEN_WIDTH;
const height = Screen.SCREEN_HEIGHT;

const ChangeDetailsPopup = (props) => {
    const [newAddress, setNewAddress] = useState('');
    const [newContact, setNewContact] = useState('');
    const [newTime, setNewTime] = useState('');

    function handleDetailsChange() {
        props.setAddress(newAddress);
        props.setContact(newContact);
        props.setTime(newTime);
        props.onCancel();
    }

    return (
        <Modal visible={props.isVisible} transparent animationType="slide">
            <TouchableWithoutFeedback>
                <View style={styles.overlay}>
                    <View style={styles.popupContainer}>
                        <View style={styles.popupHeader}>
                            <Text style={styles.popupTitle}>Change Details</Text>
                            <TouchableOpacity style={styles.cancelButton} onPress={props.onCancel}>
                                {/* <AntDesign name="close" size={24} color={Colors.palette_secondary} style={{ opacity: 0.45 }} /> */}
                                <View style={styles.MenuBox}>
                                  <Svginserter tag={'MenuClose2'} />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.popupContent}>
                            <InputBox Title={'Pickup Address'} placeholder={props.Address} onChangeText={setNewAddress} value={newAddress} />
                            <InputBox Title={'Number we can call'} placeholder={props.Contact} onChangeText={setNewContact} value={newContact} />
                            <InputBox Title={'Pickup Time'} placeholder={props.Time} onChangeText={setNewTime} value={newTime} />
                        </View>
                        <View style={styles.popupFooter}>
                            <MotiPressable
                                onPress={() => { handleDetailsChange(); }}
                                style={styles.saveBtn}
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
                                <Text style={styles.saveBtnTxt}>Confirm</Text>
                            </MotiPressable>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        justifyContent: 'flex-end',
    },
    popupContainer: {
        backgroundColor: Colors.white,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingTop: height / 39.65,
        paddingHorizontal: width / 19.55,
        paddingBottom: height / 19.825,
    },
    MenuBox: {
        position: 'relative',
        top: height / 100,
        left: width / 30,
        width: width / 11.2,
        height: height / 22.65,
        color:'black'
    },
    popupHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: height / 39.65,
        paddingLeft: 0,
    },
    popupTitle: {
        fontSize: width / 16.29,
        fontFamily: 'SF-Pro-Rounded-Medium',
        color: Colors.palette_secondary,
        letterSpacing: 0.5,
    },
    cancelButton: {
        marginRight: width / 39.1,
        marginBottom: height / 79.3,
    },
    popupFooter: {
        position: 'relative',
        top: height / 99.125,
    },
    saveBtn: {
        alignItems: 'center',
        paddingVertical: height / 99.125,
        paddingHorizontal: width / 11.17,
        backgroundColor: Colors.palette_primary,
    },
    saveBtnTxt: {
        fontSize: width / 21.72,
        fontFamily: 'SF-Pro-Rounded-Bold',
        color: Colors.white,
        letterSpacing: 0.5,
    },
});

export default ChangeDetailsPopup;
