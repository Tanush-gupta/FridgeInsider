import React from 'react';
import { StyleSheet } from 'react-native';
import { MotiPressable } from 'moti/interactions';
import Svginserter from '../shared/Svginserter';
import { Colors } from '../../constants/Colors';
import * as Screen from '../../constants/Screen';

const width = Screen.SCREEN_WIDTH;

const MenuWrapper = ({wrap, setWrap,wrapAnim, setWrapAnim }) => {
      return (
            <MotiPressable
            onPress={() => {
                  setWrap(!wrap);
                  if (wrapAnim === true){
                        setTimeout(()=>{
                              setWrapAnim(false);
                        },460);
                  }
                  else {
                        setWrapAnim(!wrapAnim);
                  }
            }}
            style={[styles.container]}
            from={{ rotateZ: '-270deg' }}
            animate={wrap ? {rotateZ: '-270deg'} : {rotateZ: '0deg'}}
            transition={{
                  translateY:{
                        type: 'timing',
                        duration: 400,
                  },
                  type: 'timing',
                  delay: wrap ? 0 : 400,
                  duration: 450,
            }}
            >
                  <Svginserter tag={'MenuWrapper'} width={width / 11.17} height={width / 11.17} color={Colors.white} />
            </MotiPressable>
      );
};

const styles = StyleSheet.create({
      container: {
            width: width / 6.3,
            height: width / 6.3,
            borderRadius: 25,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: Colors.palette_secondary,
      },
});

export default MenuWrapper;
