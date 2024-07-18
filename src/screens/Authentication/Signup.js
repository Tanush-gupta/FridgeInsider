import React, { useState, useMemo } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { MotiView } from 'moti';

// constants
import { Colors } from '../../constants/Colors';
import * as Screen from '../../constants/Screen';

const width = Screen.SCREEN_WIDTH;

// components
import { animateStyles, transitionConfig } from '../../components/Authentication/motiConfig';
import Mainheader from '../../components/Authentication/SignUp/Mainheader';
import InputBox from '../../components/Authentication/AuthInputBox';
import Footer from '../../components/Authentication/SignUp/Footer';
import SnackBar from '../../components/shared/Snackbar';
import LoadingModal from '../../components/shared/LoadingModal';

//Firebase Authentication
// import auth from '@react-native-firebase/auth';
import { handleSignup } from '../../Firebase/FirebaseSignup';
import { signInWithGoogle } from '../../Firebase/FirebaseGoogleAuth';

const Signup = (props) => {
      const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [confirmPass, setConfirmPass] = useState('');
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState('');
      const [success,setSuccess] = useState(false);
      const [loadingModalVisible, setLoadingModalVisible] = useState(false);

      const handleSignupPress = useMemo(
            () => async () => {
                  await handleSignup(email, password, name, confirmPass, setName, setEmail, setPassword, setConfirmPass, setLoading, setSuccess, setError, props);
            },
            [email, password, name, confirmPass, props]
      );

      const onGoogleButtonPress = useMemo(
            () => async () => {
                  const user = await signInWithGoogle(props.changeScreen, setLoadingModalVisible);
                  console.log(user);
            }, [props.changeScreen]
      );

      return (
            <MotiView
                  style={styles.lowercont}
                  from={{ translateX: width, opacity: 0 }}
                  animate={animateStyles}
                  transition={transitionConfig}
            >
                  <Mainheader onGoogleButtonPress={onGoogleButtonPress} />
                  <View>
                        <InputBox SvgName={'Account'} onChangeText={setName} value={name} placeholder={'Enter Your First Name'} />
                        <InputBox SvgName={'Email'} onChangeText={setEmail} value={email} placeholder={'Enter Your Email'} />
                        <InputBox SvgName={'Password'} onChangeText={setPassword} value={password} placeholder={'Enter Your Password'} />
                        <InputBox
                              SvgName={'ConfirmPass'}
                              onChangeText={setConfirmPass}
                              value={confirmPass}
                              password={password}
                              placeholder={'Confirm Password'}
                        />
                  </View>
                  {loading ? (
                        <ActivityIndicator style={styles.spinner} size={width / 16.29} color={Colors.palette_secondary} />
                  ) : (
                        <Footer Register={handleSignupPress} setLogin={props.setLogin} />
                  )}
                  <SnackBar error={error} setError={setError} success={success} />
                  <LoadingModal loadingModalVisible={loadingModalVisible} />
            </MotiView>
      );
};

const styles = StyleSheet.create({
      lowercont: {
            flex: 1,
            alignItems: 'center',
      },
      spinner: {
            marginVertical: width / 39.1,
      },
      snackbar: {
            marginBottom: width / 39.1,
      },
      modalContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
});

export default Signup;
