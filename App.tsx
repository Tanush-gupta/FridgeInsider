/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ScreenNavigator from './src/navigators/ScreenNavigator';
// import auth from '@react-native-firebase/auth';
// import firebase from '@react-native-firebase/app';

const App = () => {
    return (
        <SafeAreaProvider style={{ flex: 1 }}>
            <ScreenNavigator />
        </SafeAreaProvider>
    );
};

export default App;
