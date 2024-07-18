import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { MotiView } from 'moti';
import { MotiPressable } from 'moti/interactions';
import NavigationIcon from './NavigationIcon';
import MenuWrapper from './MenuWrapper';
import { Colors } from '../../constants/Colors';
import * as Screen from '../../constants/Screen';

const width = Screen.SCREEN_WIDTH;
const height = Screen.SCREEN_HEIGHT;

const TabBar = ({ state, descriptors, navigation }: any) => {
      const [tab, setTab] = useState('Home');
      const [wrap, setWrap] = useState(true);
      const [wrapAnim, setWrapAnim] = useState(true);
    //   console.log(wrap, wrapAnim);
      return (
            <View>
                  <MotiView style={[styles.mainContainer, !wrapAnim ? { shadowColor: Colors.black, elevation: 6 } : { width: 10 }]}
                        from={{
                              translateX: 0,
                              width: 10,
                        }}
                        animate={wrap ? { translateX: -width / 2.88 } : { width: width / 1.245 }}
                        transition={{
                              translateX: {
                                    type: 'timing',
                                    delay: wrap? 600 : 0,
                                    duration: 400,
                              },
                              scaleX: {
                                    type: 'timing',
                                    delay: 400,
                                    duration: 350,
                              },
                              width: {
                                    type: 'timing',
                                    duration: 1000,
                              },
                        }}>
                        {state.routes.map((route: any, index: number) => {
                              if (route.name == "MenuWrapper") {
                                    return (
                                          <View key={index} style={styles.mainItemContainer}>
                                                <MenuWrapper wrap={wrap} setWrap={setWrap} wrapAnim={wrapAnim} setWrapAnim={setWrapAnim} />
                                          </View>
                                    );
                              }
                              const { options } = descriptors[route.key];
                              const label =
                                    options.tabBarLabel !== undefined ? options.tabBarLabel
                                          : options.title !== undefined ? options.title : route.name;

                              const isFocused = state.index === index;
                              const onPress = () => {
                                    const event = navigation.emit({
                                          type: 'tabPress',
                                          target: route.key,
                                    });
                                    if (!isFocused && !event.defaultPrevented) navigation.navigate(route.name);

                                    if (label == "Home") setTab("Home");
                                    else if (label == "Notifications") setTab("Notifications");
                                    else if (label == "Fridge") setTab("Fridge");
                                    else if (label == "TrashPickup") setTab("TrashPickup");
                              };
                              return (
                                    <MotiView key={index} style={[styles.mainItemContainer, label == "MenuWrapper" ? null : { paddingVertical: 5 }, wrap ? { display: 'none' } : { display: 'flex' }]}
                                          from={{ scale: 0 }}
                                          animate={wrapAnim ? { scale: 0 } : { scale: 1 }}
                                          transition={wrap ? { type: 'timing', delay: 0 } : { type: 'spring', delay: 300 + index * 100 }}>
                                          {label == "Home" ? (
                                                <MotiView style={styles.MovingBg}
                                                      from={{
                                                            translateX: 0,
                                                      }}
                                                      animate={{
                                                            transform: [
                                                                  tab == "Fridge" ? { translateX: width / 6.256 }
                                                                        : tab == "Notifications" ? { translateX: width / 2.079 }
                                                                              : tab == "TrashPickup" ? { translateX: width / 1.56 } : { translateX: 0 },
                                                            ]
                                                      }}
                                                      transition={{
                                                            type: 'timing',
                                                            duration: 300,
                                                      }}
                                                />)
                                                : null}
                                          <MotiPressable onPress={onPress}
                                                from={{
                                                      scale: 0,
                                                }}
                                                animate={({ pressed }) => {
                                                      'worklet'

                                                      return {
                                                            opacity: pressed ? 0.6 : 1,
                                                            scale: pressed ? 0.8 : 1,
                                                      }
                                                }}
                                                transition={{
                                                      type: 'timing',
                                                      duration: 100,
                                                }}
                                                style={styles.iconContainerBox}>
                                                <View style={styles.iconContainer}>
                                                      <NavigationIcon route={label} isFocused={isFocused} />
                                                </View>
                                          </MotiPressable>
                                    </MotiView>
                              );
                        })}
                  </MotiView>
            </View>
      );
}

const styles = StyleSheet.create({
      mainContainer: {
            position: 'absolute',
            bottom: height / 31.72,
            alignSelf: 'center',
            flexDirection: 'row',
            borderRadius: 25,
            backgroundColor: Colors.white,
      },
      mainItemContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
      },
      MovingBg: {
            position: 'absolute',
            zIndex: -1,
            width: width / 8.31,
            height: width / 8.31,
            borderRadius: width / 26.07,
            backgroundColor: Colors.palette_secondary,
      },
      iconContainerBox: {
            borderRadius: 15,
            padding: 2,
            zIndex: 1,
      },
      iconContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
      },
});

export default TabBar; 