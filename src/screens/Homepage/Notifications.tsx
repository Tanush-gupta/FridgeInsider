/* eslint-disable quotes */
import { StyleSheet, Text, TouchableOpacity, View, Image, FlatList, Modal, TouchableWithoutFeedback } from 'react-native';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { MotiView } from 'moti';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../constants/Screen";
import menus from '../../components/shared/temp_data';
import Data2 from "../../Context/Data2";
import Svginserter from '../../components/shared/Svginserter';
import * as Screen from '../../constants/Screen';


const width = Screen.SCREEN_WIDTH;
// const height = Screen.SCREEN_HEIGHT;

const Notifications = (props: { showMenu: any; }) => {
  const [notifydata,setNotifydata] = useContext(Data2);
  const [alert, setAlert] = useState(true);
  const [visible, setVisible] = useState(false);
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [multiselect, setMultiselect] = useState(false);
  const searchRef = useRef();
  console.log('notify data');
  console.log(notifydata);

  useEffect(() => {
    setData1(notifydata);
    setData2(notifydata);
  }, [notifydata]);



  var color1: any, color2: any;
  { alert ? color1 = '#52a2e7' : color2 = '#52a2e7'; };

  var textcolor1: any, textcolor2: any;
  { alert ? textcolor1 = 'white' : textcolor2 = 'white' };

  const onSelect = (idx: number) => {
    const tempdata = data1.map((item, index) => {
      if (index == idx) {
        if (item.msel == true)
          return { ...item, msel: false };
        else
          return { ...item, msel: true };
      }
      else {
        if (item.msel == true)
          return { ...item, msel: true };
        else
          return { ...item, msel: false };
      }
    });
    setNotifydata(tempdata);
    setData1(tempdata);
  }

  return (
    <MotiView style={styles.container}
      from={{ borderRadius: 0 }}
      animate={{ borderRadius: props.showMenu ? 35 : 0 }}
      transition={props.showMenu ? { type: 'timing', duration: 100 } : { type: 'timing', duration: 650 }}
    >

      {/* Filter or Cross Button Decision */}
      <View style={styles.comp1}>
        <Text style={styles.comp1Text}>Notification</Text>

        {multiselect ? (
          <TouchableOpacity
            style={styles.filter}
            onPress={() => {
              const tempdata = data1.map((item) => {
                return { ...item, msel: false };
              })
              setData1(tempdata);
              setMultiselect(false)
            }}>

            <Image
              source={require('../../../assets/images/close.png')}
              style={{ width: 16, height: 16, opacity: 0.5 }}
            />

          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.filter} onPress={() => { setVisible(true) }}>
            <Image style={{ height: 25, width: 25 }} source={require('../../../assets/images/filter.png')} />
          </TouchableOpacity>
        )}

      </View>

      {/* FilterMenu  */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          setVisible(!visible)
        }}>
        <TouchableWithoutFeedback onPress={() => { setVisible(false) }}>
          <View style={styles.filterMenu}>
            <View style={styles.filterComp}>

              <TouchableOpacity style={styles.filterComp1}
                ref={searchRef}
                onPress={() => {
                  let tempdata = data2.filter((item) => item.expire <= 0)
                  setData1(tempdata);
                  setVisible(false);
                }}>
                <Text style={styles.filterComp1Text}>Only Expired</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.filterComp1}
                ref={searchRef}
                onPress={() => {

                  let tempdata = data2.filter((item) => item.expire > 0)
                  setData1(tempdata);
                  setVisible(false)
                }}>
                <Text style={styles.filterComp1Text}>Only Fresh</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.filterComp1}
                onPress={() => {
                  let tempdata = data1.sort((a, b) => a.title > b.title ? 1 : -1)
                  setData1(tempdata);
                  setVisible(false);
                }}>
                <Text style={styles.filterComp1Text}>Sort by Name</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.filterComp1}
                onPress={() => {
                  let tempdata = data1.sort((a, b) => a.expire - b.expire)
                  setData1(tempdata)
                  setVisible(false)
                }}>
                <Text style={styles.filterComp1Text}>Sort by Expiry</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.filterComp1}
                onPress={() => {
                  let tempdata = data1.sort((a, b) => (b.id - a.id));
                  setData1(tempdata);
                  setVisible(false);
                }}>
                <Text style={styles.filterComp1Text}>Sort by Date</Text>
              </TouchableOpacity>

            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      {/* 2 Navigation Buttons */}
      <View style={styles.comp2}>
        <TouchableOpacity style={[styles.comp2a, { backgroundColor: color1 }]}
          onPress={() => { setAlert(true) }}>
          <Text style={{color: textcolor1}}>Expiry Alert</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.comp2a, { backgroundColor: color2 }]}
          onPress={() => { setAlert(false) }}>
          <Text style={{color: textcolor2}}>Garbage PickUp</Text>
        </TouchableOpacity>
      </View>

      {/* Select & Delete Menu */}
      {multiselect && (

        <View style={styles.multiselectMenu}>

          <TouchableOpacity style={styles.multiselectComp}
            onPress={() => {
              const tempdata = data1.map((item, index) => {
                return { ...item, msel: true };
              })
              setData1(tempdata);
              setData2(tempdata);
              setNotifydata(tempdata);
            }}>
            <Text>Select All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.multiselectComp, { width: 130 }]}
            onPress={() => {
              let tempdata = data1.filter((item) => item.msel == false)
              setData1(tempdata);
              setData2(tempdata);
              setNotifydata(tempdata);
            }}>
            <Text>Delete Selected</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.multiselectComp}
            onPress={() => {
              setData1([]);
              setData2([]);
              setNotifydata([]);
            }}>
            <Text>Delete All</Text>
          </TouchableOpacity>

        </View>
      )}

      {/* Expiry alert and Garbage Pickup Lists */}
      <View style={styles.container1}>
        {alert == true ? (
          <View>
            {
              data1.length == 0 ? 
              <View style={{flex:1, marginTop: 50}}>
                <Svginserter tag={'Empty_notification'} width={width} height={width}/> 
                <View style={{marginTop:-60 ,alignItems: 'center' ,}}>
                  <Text style={{fontFamily: 'SF-Pro-Rounded-Bold',}}>No Notifications</Text>
                </View>
              </View>  
              :
            <View>
              <FlatList
                data={data1}
                renderItem={({ item, index }) => {
                  let color1: string, fresh: string;
                  { item.expire <= '2' ? color1 = 'red' : color1 = 'orange' }
                  { item.expire <= '0' ? fresh = 'red' : fresh = 'green' }
                  let lastMargin;
                  { index == menus.length - 1 ? lastMargin = 60 : lastMargin = 0 }
                  return (
                    <MotiView
                      from={{ opacity: 0, translateX: 0 }}
                      animate={{ opacity: 1, translateX: 0 }}
                      transition={{ delay: index * 120 }}
                      style={{ paddingTop: 10 }}
                    >
                      <View style={styles.cornerDot}></View>
                      <TouchableOpacity style={[styles.alertItemContainer, { marginBottom: lastMargin, backgroundColor: item.msel == true ? '#e9f5f8' : 'white' }]}
                        onPress={() => (multiselect && onSelect(index))}
                        onLongPress={() => {
                          (!multiselect && onSelect(index)); setMultiselect(true)
                        }}>
                        <View style={styles.alertImg}>
                          <Image source={item.image} style={styles.alertImg1} />
                        </View>

                        <View style={{ marginLeft: 20, width: 100 }}>

                          <View style={styles.alertComp2}>
                            <Text style={[styles.alertComp2a, { color: fresh }]}>{item.expire <= '0' ? 'Expired' : 'Fresh'}</Text>
                            <View style={[styles.alertComp2b, { backgroundColor: color1 }]}></View>
                            <Text style={styles.alertComp2c}>{item.expire < '0' ? item.expire * -1 : item.expire}</Text>
                            <Text style={styles.alertComp2d}>{item.expire == '1' ? 'day' : 'days'} {item.expire <= '0' ? 'ago' : 'left'}</Text>
                          </View>

                          <View>
                            <Text style={styles.alertComp2e}>{item.title}</Text>
                          </View>

                        </View>

                        <View style={styles.alertComp3}>

                          <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.alertComp3a}> {item.time}</Text>
                          </View>

                          <View>
                            <View style={styles.alertComp3b}>
                              <Text style={{ color: '#777' }}>{item.day} {item.month}</Text>
                            </View>
                          </View>

                        </View>

                      </TouchableOpacity>
                    </MotiView>
                  )
                }}
              />
            </View> 
            }
          </View>

        ) : (

          <View style={{flex:1}}>
            <View style={{flex:1, marginTop: 50}}>
                <Svginserter tag={'Empty_notification'} width={width} height={width}/> 
                <View style={{marginTop:-60 ,alignItems: 'center' ,}}>
                  <Text style={{fontFamily: 'SF-Pro-Rounded-Bold',}}>No Notifications</Text>
                </View>
            </View>
          </View>
        )}
      </View>

    </MotiView>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  container1: {
    flex: 1,
    marginBottom: 3.8,
  },
  cornerDot: {
    backgroundColor: '#99ff99',
    position: 'absolute',
    zIndex: 2,
    right: 12,
    top: 8,
    height: 8,
    width: 8,
    borderRadius: 5
  },
  comp1: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: 46
  },
  filter: {
    position: 'absolute',
    right: 20
  },
  comp1Text: {
    fontFamily: 'SF-Pro-Rounded-Bold',
    fontSize: 18
  },
  comp2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 8,
    marginBottom: 8,
    paddingHorizontal: 10,
    // backgroundColor:'green'
  },
  comp2a: {
    width: 160,
    height: 38,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#52a2e7',
    borderWidth: 0.4,
    borderRadius: 10
  },
  multiselectMenu: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#52a2e7',
    marginLeft: 16,
    backgroundColor: 'white',
    width: SCREEN_WIDTH / 1.09,
    shadowColor: '#52a2e7',
    elevation: 5
  },
  multiselectComp: {
    width: 92,
    height: 26,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    margin: 4,
    borderWidth: 1,
    borderColor: '#52a2e7',
    borderRadius: 5
  },
  alertItemContainer:
  {
    width: SCREEN_WIDTH / 1.1,
    height: SCREEN_HEIGHT / 11,
    marginLeft: 17,
    marginTop: 0,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    // backgroundColor:'white',
    padding: 20,
    shadowColor: 'grey',
    elevation: 10
  },
  alertImg: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50
  },
  alertImg1: {
    width: 40,
    margin: 9,
    height: 40
  },
  alertComp2: {
    flexDirection: 'row',
    marginTop: 6
  },
  alertComp2a: {
    fontSize: 14,
    marginTop: -10,
    marginRight: 4,
    fontFamily: 'SF-Pro-Rounded-Bold',
  },
  alertComp2b: {
    height: 5,
    width: 5,
    borderRadius: 5
  },
  alertComp2c: {
    fontSize: 14,
    marginTop: -10,
    marginLeft: 4,
    fontFamily: 'SF-Pro-Rounded-Bold',
    color: '#89889D'
  },
  alertComp2d: {
    fontSize: 10,
    marginTop: -6,
    marginLeft: 3,
    fontFamily: 'SF-Pro-Rounded-Bold',
    color: '#89889D'
  },
  alertComp2e: {
    fontSize: 20,
    marginTop: -12,
    fontFamily: 'SF-Pro-Rounded-Bold',
    color: 'grey'
  },
  alertComp3: {
    marginLeft: 50,
    height: 60,
    width: 100,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  alertComp3a: {
    color: '#777',
    marginLeft: 50
  },
  alertComp3b: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  filterMenu: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  filterComp: {
    width: '70%',
    height: 200,
    borderRadius: 15,
    backgroundColor: '#fff',
    borderEndWidth: 5,
    borderTopWidth: 5,
    borderColor: '#52a2e7'
  },
  filterComp1: {
    width: '100%',
    height: 40,
    borderBottomWidth: 0.2,
    borderBottomColor: '#52a2e7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterComp1Text: {
    fontFamily: 'SF-Pro-Rounded-Bold',
    color: '#52a2e7'
  }
});
