import React from 'react';
import { View, ActivityIndicator, Modal } from 'react-native';
import { Colors } from '../../constants/Colors';

const LoadingModal = ({ loadingModalVisible }) => {
    return (
        <Modal visible={loadingModalVisible} transparent={true} onRequestClose={() => { }}>
            <View style={styles.modalContainer}>
                <ActivityIndicator size="large" color={Colors.palette_secondary} />
            </View>
        </Modal>
    );
};

const styles = {
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
};

export default LoadingModal;
