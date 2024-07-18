/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, PermissionsAndroid } from 'react-native';
import Geolocation from '@react-native-community/geolocation';

// components
import Svginserter from '../../components/shared/Svginserter';
import * as Screen from '../../constants/Screen';
import { Colors } from '../../constants/Colors';
import LoadingModal from '../../components/shared/LoadingModal';

const width = Screen.SCREEN_WIDTH;
const height = Screen.SCREEN_HEIGHT;

// Firebase
import auth from '@react-native-firebase/auth';
import db from '@react-native-firebase/database';

const LocationPage = (props) => {
      const [loadingModalVisible, setLoadingModalVisible] = useState(false);

      const requestLocationPermission = async () => {
            try {
                  console.log('Requesting Location Permission');
                  const granted = await PermissionsAndroid.request(
                        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                        {
                              title: 'Location Permission',
                              message: 'App needs access to your location for better services.',
                              buttonNeutral: 'Ask Me Later',
                              buttonNegative: 'Cancel',
                              buttonPositive: 'OK',
                        },
                  );
                  if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                        console.log('Location permission granted');
                        getCurrentLocation();
                  } else {
                        console.log('Location permission denied');
                  }
            } catch (err) {
                  console.warn(err);
            } finally {
                  setTimeout(() => {
                        setLoadingModalVisible(false);
                        props.changeScreen('MainHome');
                  }, 1000);
            }
      };

      const getCurrentLocation = () => {
            try {
                  setLoadingModalVisible(true);

                  Geolocation.getCurrentPosition(position => {
                        const { latitude, longitude } = position.coords;
                        console.log('Latitude: ', latitude);
                        console.log('Longitude: ', longitude);
                        const user = auth().currentUser;
                        if (user) {
                              db().ref('users/' + user.uid).child('location').set({
                                    latitude: latitude,
                                    longitude: longitude,
                              });
                        }
                  });
            } catch (error) {
                  throw error;
            }
      };

      return (
            <View style={styles.cont}>
                  <View style={styles.skikbtncont}>
                        <TouchableOpacity onPress={() => { props.changeScreen('MainHome'); }}>
                              <View style={styles.skipbtn}>
                                    <View>
                                          <Text style={styles.skipTxt}>SKIP</Text>
                                    </View>
                                    <View style={{ position: 'relative', bottom: width / 390 }}>
                                          <Svginserter tag={'ArrowRight'} width={width / 14.5} height={width / 14.5} color={Colors.bg} />
                                    </View>
                              </View>
                        </TouchableOpacity>
                  </View>
                  <View style={styles.Heading}>
                        <View style={styles.WelcomeNote}>
                              <Text style={styles.Headingtxt}>Welcome{'\n'}Antriksh!</Text>
                        </View>
                        <View style={styles.LogoCont}>
                              <Image source={require('../../../assets/images/locationillustration.png')} style={styles.Logo} />
                        </View>
                        <View style={styles.AppDescription}>
                              <Text style={styles.AppDescriptionTxt}>Reduce food waste and schedule convenient pickup by setting up your delivery address.</Text>
                        </View>
                  </View>
                  <View style={styles.LocationTypesBtnCont}>
                        <View style={{ width: '90%' }}>
                              <View>
                                    <Text style={styles.SelectLocationTxt}>SELECT LOCATION</Text>
                              </View>
                        </View>
                        <View style={{ width: '100%' }}>
                              <TouchableOpacity activeOpacity={0.34} style={styles.LocationBtnCont} onPress={() => requestLocationPermission()}>
                                    <View style={{ paddingLeft: width / 20, paddingRight: width / 30 }}>
                                          <Image source={require('../../../assets/images/search-locate.png')} style={styles.LocationIcon} />
                                    </View>
                                    <View>
                                          <Text style={styles.LocationBtnTxt}>Locate Me</Text>
                                    </View>
                              </TouchableOpacity>
                        </View>
                        <View style={{ width: '100%' }}>
                              <TouchableOpacity activeOpacity={0.34} style={styles.LocationBtnCont} onPress={() => { props.changeScreen('ProvideLocation'); }}>
                                    <View style={{ paddingLeft: width / 20, paddingRight: width / 30 }}>
                                          <Image source={require('../../../assets/images/locate.png')} style={styles.LocationIcon} />
                                    </View>
                                    <View>
                                          <Text style={styles.LocationBtnTxt}>Provide Pickup Location</Text>
                                    </View>
                              </TouchableOpacity>
                        </View>
                  </View>
                  <LoadingModal loadingModalVisible={loadingModalVisible} />
            </View>
      );
};

const styles = StyleSheet.create({
      cont: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: width / 10,
            backgroundColor: Colors.body_dark,
      },
      skikbtncont: {
            width: '100%',
            position: 'relative',
            right: -width / 26,
            bottom: 5,
            flex: 0.1,
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
      },
      skipbtn: {
            opacity: 0.65,
            flexDirection: 'row',
            alignItems: 'center',
      },
      skipTxt: {
            fontFamily: 'SF-Pro-Rounded-Bold',
            fontSize: width / 20,
            color: Colors.bg,
            letterSpacing: 0.8,
      },
      LogoCont: {
            width: '100%',
            flex: 0.35,
            justifyContent: 'center',
            alignItems: 'center',
      },
      Logo: {
            width: width / 1.77,
            height: width / 2.05,
      },
      Heading: {
            flex: 0.6,
            alignItems: 'center',
      },
      WelcomeNote: {
            flex: 0.35,
            alignItems: 'center',
            justifyContent: 'center',
      },
      Headingtxt: {
            textAlign: 'center',
            color: 'white',
            opacity: 1,
            fontFamily: 'SF-Pro-Text-Regular',
            fontSize: width / 9.5,
      },
      AppDescription: {
            flex: 0.3,
            marginTop: height / 80,
            alignItems: 'center',
            justifyContent: 'center',
      },
      AppDescriptionTxt: {
            textAlign: 'center',
            color: 'white',
            opacity: 0.6,
            fontFamily: 'SF-Pro-Rounded-Medium',
            fontSize: width / 18,
      },
      LocationTypesBtnCont: {
            flex: 0.35,
            width: '100%',
            paddingHorizontal: width / 80,
            justifyContent: 'center',
            alignItems: 'center',
      },
      SelectLocationTxt: {
            color: 'white',
            opacity: 0.6,
            fontFamily: 'SF-Pro-Rounded-Bold',
            fontSize: width / 19.55,
            letterSpacing: 0.5,
      },
      LocationBtnCont: {
            marginTop: height / 40,
            flexDirection: 'row',
            alignItems: 'center',
            height: width / 5.8,
            backgroundColor: 'white',
            borderRadius: 30,
            shadowColor: '#FFFFFF',
            shadowOpacity: 0.06,
            shadowRadius: 20,
            elevation: 4,
      },
      LocationIcon: {
            width: width / 16.2,
            height: width / 16.2,
      },
      LocationBtnTxt: {
            fontSize: width / 20,
            fontFamily: 'SF-Pro-Rounded-Bold',
            color: Colors.text_dark,
            letterSpacing: 0.5,
      },
});

export default LocationPage;
