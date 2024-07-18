/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import HomeNavigator from '../../navigators/HomeNavigator';
import Drawer from '../drawer';
import Svginserter from '../../components/shared/Svginserter';
import { MotiView } from 'moti';
import * as Screen from '../../constants/Screen';
import Data1 from '../../Context/Data1';
import Data2 from '../../Context/Data2';

const width = Screen.SCREEN_WIDTH;
const height = Screen.SCREEN_HEIGHT;

const Main_home = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  const [gdata, setGdata] = useState([]);
  const [notifydata, setNotifydata] = useState([]);

  const Opendrawer = () => {
    setShowMenu(true);
  };

  return (
    <Data1.Provider value={[gdata,setGdata]}>
     <Data2.Provider value={[notifydata,setNotifydata]}>
      <View style={{ flex: 1}}>
        <Drawer setShowMenu={setShowMenu} changeScreen={props.changeScreen} />
        <MotiView style={styles.container}
          from={{ scale: 1, translateX: 0 }}
          animate={showMenu ? { scale: 0.75, translateX: width / 1.2 } : { scale: 1, translateX: 0 }}
          transition={{ type: 'timing', duration: 550 }} >

          <MotiView style={styles.Main_homeShadow}
            from={{ scale: 1, translateX: 0 }}
            animate={showMenu ? { scale: 1, translateX: -width / 8.75 } : { scale: 1, translateX: 0 }}
            transition={{ type: 'timing', duration: 650 }} />

          <MotiView style={styles.menucontainer}
            from={{ rotateX: '0deg', rotateY: '0deg' }}
            animate={showMenu ? { rotateZ: '90deg', translateX: -width / 20.05 } : { rotateX: '0deg', rotateY: '0deg', rotateZ: '0deg', translateX: 0 }}
            transition={{ type: 'timing', duration: 350 }} >

            <TouchableOpacity onPress={Opendrawer}>
              <View style={{marginTop: -28, height: width / 13.03, width: width / 13.03 }}>
                <Svginserter tag={'Menu'} style={styles.menuBurger} />
              </View>
            </TouchableOpacity>

          </MotiView>

          <HomeNavigator showMenu={showMenu} />

        </MotiView>
      </View>
     </Data2.Provider>
    </Data1.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    shadowColor: 'black',
    elevation: 20,
  },
  Main_homeShadow: {
    height: height - height / 12,
    position: 'absolute',
    top: height / 40,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 40,
    backgroundColor: 'rgba(255,255,255,0.32)',
  },
  menucontainer: {
    flexDirection: 'row',
    position: 'absolute',
    top: height / 23.67,
    left: width / 39.1,
    zIndex: 1,
    margin: width / 19.55,
  },
  menuBurger: {
    height: width / 13.03,
    width: width / 13.03,
  },
});
export default Main_home;
