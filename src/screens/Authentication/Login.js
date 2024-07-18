/* eslint-disable react-native/no-inline-styles */
import React, { useState, useMemo, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MotiView } from 'moti';

// Constants
import * as Screen from '../../constants/Screen';
import { Colors } from '../../constants/Colors';

const width = Screen.SCREEN_WIDTH;
const height = Screen.SCREEN_HEIGHT;

// Components
import { animateStyles, transitionConfig } from '../../components/Authentication/motiConfig';
import InputBox from '../../components/Authentication/AuthInputBox';
import Button from '../../components/shared/Button';
import GoogleBtn from '../../components/Authentication/LogIn/GoogleBtn';
import SnackBar from '../../components/shared/Snackbar';
import LoadingModal from '../../components/shared/LoadingModal';

// Firebase
import auth from '@react-native-firebase/auth';
import { handleLogin } from '../../Firebase/FirebaseLogin';
import { signInWithGoogle } from '../../Firebase/FirebaseGoogleAuth';

export default function Login(props) {
      const [email, onChangeEmail] = useState('');
      const [password, onChangePassword] = useState('');
      // const [loading, setLoading] = useState(false);
      const [error, setError] = useState('');
      const [initializing, setInitializing] = useState(true);
      const [user, setUser] = useState();
      const [emailVerified, setEmailVerified] = useState(false);
      const [loadingModalVisible, setLoadingModalVisible] = useState(false);

      useEffect(() => {
            const subscriber = auth().onAuthStateChanged(( user ) => {
                  setUser(user);
                  if (user && user.emailVerified === true) {
                        setEmailVerified(true);
                  }
                  if (initializing) { setInitializing(false); }
            });

            return () => subscriber(); // Unsubscribe on unmount
      }, [initializing, user]);

      useEffect(() => {
            if (!initializing && user && emailVerified) {
                  console.log('User is signed in......Currently in Login Screen UseEffect');
                  props.changeScreen('Location');
            }
      });

      const onGoogleButtonPress = useMemo(
            () => async () => {
                  const User = await signInWithGoogle(props.changeScreen, setLoadingModalVisible);
                  setUser(User);
                  console.log(User);
            }, [props.changeScreen]
      );

      const handleLoginPress = useMemo(() => () =>
            handleLogin(email, password, props.changeScreen, setLoadingModalVisible, setError),
            [email, password, props]
      );

      return (
            <MotiView style={styles.lowercont} from={{ translateX: -width, opacity: 0 }} animate={animateStyles} transition={transitionConfig} >
                  <View style={styles.InputBoxes}>
                        <InputBox SvgName={'Email'} onChangeText={onChangeEmail} value={email} placeholder={'Enter Your Email'} />
                        <InputBox SvgName={'Password'} onChangeText={onChangePassword} value={password} placeholder={'Enter Your Password'} />
                  </View>
                  <View style={styles.forgotPassBox}>
                        <TouchableOpacity style={{ alignSelf: 'flex-start' }} onPress={() => props.setForgotpass(true)}>
                              <Text style={styles.forgotpasstext}>Forgot Password?</Text>
                        </TouchableOpacity>
                  </View>
                  <View style={{ alignItems: 'center' }}>
                        <Button
                              Title={'Login'}
                              BtnHighlight={styles.btnhighlight}
                              BtnBox={styles.btnbox}
                              BtnTxt={styles.btntxt}
                              handleonPress={handleLoginPress}
                        />
                        <View style={styles.SeparatorBox}>
                              <View style={styles.lineSeparator} />
                              <Text style={styles.Or_Separator}>Or</Text>
                              <View style={styles.lineSeparator} />
                        </View>
                        <GoogleBtn handleonPress={onGoogleButtonPress} />
                  </View>
                  <SnackBar error={error} setError={setError} />
                  <LoadingModal loadingModalVisible={loadingModalVisible} />
            </MotiView>
      );
}

const styles = StyleSheet.create({
      lowercont: {
            width,
            alignItems: 'center',
      },
      InputBoxes: {
            paddingTop: height / 22,
      },
      forgotPassBox: {
            width: width / 1.28,
            paddingLeft: width / 60,
            paddingTop: width / 80,
      },
      forgotpasstext: {
            fontFamily: 'SF-Pro-Text-Semibold',
            color: Colors.body_dark,
            fontSize: width / 27.9,
      },
      btnhighlight: {
            width: width / 1.28,
            height: width / 6.4,
            alignSelf: 'center',
            borderRadius: 30,
            margin: height / 25,
      },
      btnbox: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 30,
            backgroundColor: Colors.body_light,
      },
      btntxt: {
            fontSize: width / 23,
            fontFamily: 'SF-Pro-Rounded-Bold',
            letterSpacing: 0.8,
            color: '#FFFFFF',
      },
      SeparatorBox: {
            flexDirection: 'row',
            alignItems: 'center',
            position: 'relative',
            bottom: height / 158,
      },
      lineSeparator: {
            backgroundColor: '#000000',
            width: width / 4,
            height: width / 195.5,
            borderRadius: 10,
            marginHorizontal: width / 22,
      },
      Or_Separator: {
            fontSize: width / 21.5,
            fontFamily: 'SF-Pro-Rounded-Bold',
      },
      spinner: {
            marginVertical: height / 10,
      },
});
