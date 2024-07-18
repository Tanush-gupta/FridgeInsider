import React from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { Colors } from '../../constants/Colors';
import * as Screen from '../../constants/Screen';

const width = Screen.SCREEN_WIDTH;
const height = Screen.SCREEN_HEIGHT;

const CustomAlertDialog = ({ visible, title, onCancel, onConfirm }) => {
    if (!visible) {
        return null;
    }

    return (
        <Modal visible={visible} transparent={true} animationType="fade">
            <View style={styles.overlay}>
                <View style={styles.container}>
                    <Text style={styles.title}>{title}</Text>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
                            <Text style={styles.buttonText}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.confirmButton} onPress={onConfirm}>
                            <Text style={styles.buttonText}>Confirm</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: width / 19.55,
        width: '80%',
    },
    title: {
        fontSize: width / 19.55,
        fontWeight: 'bold',
        marginBottom: height / 39.65,
        textAlign: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cancelButton: {
        flex: 1,
        backgroundColor: Colors.palette_gray_dark,
        borderRadius: 5,
        padding: width / 39.1,
        marginRight: width / 39.1,
    },
    confirmButton: {
        flex: 1,
        backgroundColor: Colors.palette_primary,
        borderRadius: 5,
        padding: width / 39.1,
        marginLeft: width / 39.1,
    },
    buttonText: {
        color: '#fff',
        fontSize: width / 24.437,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default CustomAlertDialog;
