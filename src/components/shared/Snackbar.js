/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Snackbar } from 'react-native-paper';
import * as Screen from '../../constants/Screen';

const width = Screen.SCREEN_WIDTH;

const SnackBar = ({ error, setError, success }) => {
    return (
        <Snackbar
            visible={!!error}
            onDismiss={() => setError('')}
            duration={4000}
            action={{
                label: success ? 'OK' : 'Close',
                onPress: () => setError(''),
            }}
            style={[styles.snackbar, { backgroundColor: success ? '#4caf50' : '#323232' }]}
        >
            {error}
        </Snackbar>
    );
};

const styles = {
    snackbar: {
        marginBottom: width / 39.1,
    },
};

export default SnackBar;
