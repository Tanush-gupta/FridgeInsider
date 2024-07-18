/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, ImageBackground, TouchableOpacity, TouchableHighlight } from 'react-native';
import Lottie from 'lottie-react-native';
// import { Feather } from '@expo/vector-icons';
import Svginserter from '../../components/shared/Svginserter';
import * as Screen from '../../constants/Screen';
import { Colors } from '../../constants/Colors';

const width = Screen.SCREEN_WIDTH;
const height = Screen.SCREEN_HEIGHT;

export default function ProvideLocation(props) {
      return (
            <View style={styles.container}>
                  <View style={styles.statusBar} />
                  <View style={styles.LogoBox}>
                        <ImageBackground source={require('../../../assets/images/blurlocationillustration.png')} style={styles.LogoBlurImg} />
                  </View>
                  <View style={styles.MapViewBox}>
                        <View style={styles.BackBtnBox}>
                              <TouchableOpacity activeOpacity={0.75} onPress={() => { props.changeScreen('Location'); }} style={styles.BackBtn}>
                                    <View style={styles.BackIcon}>
                                          <Svginserter tag={'Back'} width={width / 14.5} height={width / 14.5} style={{ color: 'black', marginBottom: width / 250 }} />
                                    </View>
                                    <View style={styles.BackBtnTxtBox}>
                                          <Text style={styles.BackBtnTxt}>Back</Text>
                                    </View>
                              </TouchableOpacity>
                        </View>
                        <ScrollView style={styles.MapView}>
                              <ScrollView horizontal>
                                    <Image source={require('../../../assets/images/map.png')} />
                              </ScrollView>
                        </ScrollView>
                        <View style={styles.AddressBg}>
                              <View style={styles.AddressBox}>
                                    <View style={styles.AddressDetails}>
                                          <View>
                                                <Image source={require('../../../assets/images/homeIcon.png')} style={styles.HomeIcon} />
                                          </View>
                                          <View style={styles.address}>
                                                <View style={styles.addressHead}>
                                                      <Text style={styles.addressHeadTxt}>Paltan Bazaar</Text>
                                                </View>
                                                <View style={styles.addressSubHead}>
                                                      <Text style={styles.addressSubHeadTxt}>House Number 510, Pratapgarh, Uttar Pradesh</Text>
                                                </View>
                                          </View>
                                    </View>
                                    <View>
                                          <TouchableHighlight style={styles.ConfirmLocationHighlightBox} onPress={() => { props.changeScreen('MainHome'); }}>
                                                <View style={styles.ConfirmLocationbtnbox}>
                                                      <View>
                                                            <Lottie source={require('../../../assets/animation/lottie_location.json')} autoPlay={true} loop={true} style={styles.LocationLottie} />
                                                      </View>
                                                      <View style={{ position: 'relative', right: width / 30 }}>
                                                            <Text style={styles.ConfirmLocationbtntext}>Confirm Location</Text>
                                                      </View>
                                                </View>
                                          </TouchableHighlight>
                                    </View>
                              </View>
                        </View>
                  </View>
            </View>
      );
}

const styles = StyleSheet.create({
      container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: Colors.body_dark,
      },
      statusBar: {
            width: width,
            height: 30,
            backgroundColor: Colors.blur,
      },
      LogoBox: {
            flex: 0.13,
            width: width,
            alignItems: 'center',
      },
      LogoBlurImg: {
            width: width,
            height: width / 3,
      },
      MapViewBox: {
            flex: 0.87,
            width: width,
            borderRadius: 30,
            backgroundColor: '#f3f5f6',
            zIndex: 2,
      },
      BackBtnBox: {
            position: 'absolute',
            top: height / 40,
            left: width / 25,
            zIndex: 3,
      },
      BackBtn: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: width / 60,
            paddingLeft: width / 50,
            paddingRight: width / 30,
            borderRadius: 25,
            backgroundColor: 'white',
      },
      BackBtnTxt: {
            fontFamily: 'SF-Pro-Rounded-Semibold',
            fontSize: width / 20,
            color: 'black',
      },
      MapView: {
            flex: 0.68,
            borderRadius: 30,
            marginTop: width / 12,
      },
      AddressBg: {
            flex: 0.32,
            width: width,
            backgroundColor: 'white',
      },
      AddressBox: {
            flex: 1,
            position: 'relative',
            bottom: 20,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            backgroundColor: 'white',
            paddingHorizontal: width / 35,
      },
      AddressDetails: {
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: width / 10,
            paddingTop: width / 25,
      },
      HomeIcon: {
            width: width / 14,
            height: width / 14,
      },
      address: {
            paddingLeft: width / 25,
      },
      addressHeadTxt: {
            fontFamily: 'SF-Pro-Text-Semibold',
            letterSpacing: 0.5,
            fontSize: width / 21,
      },
      addressSubHeadTxt: {
            fontFamily: 'SF-Pro-Text-Medium',
            letterSpacing: 0.5,
            fontSize: width / 28,
            color: Colors.text_gray_light,
      },
      ConfirmLocationHighlightBox: {
            width: width / 1.38,
            height: width / 6.4,
            alignSelf: 'center',
            borderRadius: 30,
            margin: height / 25,
      },
      ConfirmLocationbtnbox: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 30,
            backgroundColor: Colors.body_dark,
      },
      LocationLottie: {
            width: width / 6,
            height: width / 6,
      },
      ConfirmLocationbtntext: {
            fontSize: width / 19,
            fontFamily: 'SF-Pro-Rounded-Heavy',
            color: 'white',
            paddingHorizontal: width / 30,
            letterSpacing: 0.5,
      },
});
