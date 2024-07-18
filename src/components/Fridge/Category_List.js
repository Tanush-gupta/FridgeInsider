import {useContext, useRef} from 'react';
import { Modal, Text, View, StyleSheet, TouchableWithoutFeedback, FlatList, TouchableOpacity, Image } from "react-native";
import { Colors } from '../../constants/Colors';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../constants/Screen";
import { useEffect, useState } from "react";
import { MotiView } from "moti";
import Data1 from '../../Context/Data1';
import Svginserter from '../../components/shared/Svginserter';

const height = SCREEN_HEIGHT;
const width = SCREEN_WIDTH;

const Category_List = ({ type1, image1, visible, setVisible}) => {

    const [gdata,setGdata] = useContext(Data1);
    const [data1, setData1] = useState(gdata); 
    const [cnt1,setCnt1] = useState(0);
      
    useEffect(() => {
        let tempdata = [];
        gdata.map((item) => {
            if(item.type == type1)
              tempdata.push(item);
        });
        setData1(tempdata);
        setCnt1(tempdata.length);
    }, [gdata,type1]);
    
    const deleteItemById = id => {
       const filteredData2 = gdata.filter(item => item.id !== id);
       const filteredData = data1.filter(item => item.id !== id);
       setData1(filteredData);
       setGdata(filteredData2);
    }

    return (
        <Modal
            animationType="fade"
            transparent={false}
            visible={visible}
            onRequestClose={() => {
                setVisible(false);
            }}>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => { setVisible(false) }}>
                    <View style={styles.backButton}>
                        {/* <Ionicons name="chevron-back" size={24} color="black" /> */}
                        <Image source={require('../../../assets/images/back1.png')} style={{marginRight:4, width: width/30, height: width/30}} />
                        <Text style={{fontFamily:'SF-Pro-Rounded-Semibold',}}>Back</Text>
                    </View>
                </TouchableOpacity>

                <View style={styles.IntroBox}>
                    <View style={styles.IntroSubHeaderBox}>
                        <Text style={styles.IntroHeaderTxt}>{type1}</Text>
                    </View>
                    <View style={styles.IntroSubHeaderBox}>
                        <Text style={styles.IntroSubHeaderTxt}>{cnt1} Items</Text>
                    </View>
                    <View style={{flex:1,position:'absolute',right:30,top:40}}>
                      <Image source={image1} style={{ width: 120, height: 120}} />
                    </View>
                </View>


                {
                  data1.length == 0 ?
                  <View style={{flex:1}}>
                    <Svginserter tag={'Empty_notification'} width={width} height={width}/> 
                    <View style={{marginTop:-60 ,alignItems: 'center' ,}}>
                    <Text style={{fontFamily: 'SF-Pro-Rounded-Bold',}}>No {type1} </Text>
                    <Text style={{fontFamily: 'SF-Pro-Rounded-Bold',marginTop:-13,text:'muted',color:'#D3D3D9'}}>add some {type1} in fridge</Text>
                    </View>
                  </View>  
                  :

                  <View style={{ height: height / 1.5 }}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        numColumns={2}
                        data={data1}
                        renderItem={({ item, index }) => {
                            let color1: string;
                            { item.expire <= 2 ? color1 = 'red' : color1 = 'orange' }
                            return (
                                <MotiView
                                    from={{ opacity: 0, translateX: -40 }}
                                    animate={{ opacity: 1, translateX: 0 }}
                                    transition={{ delay: index * 200 }}
                                >
                                    <TouchableOpacity style={[styles.CategoriesComp, {
                                        height: index % 4 == 1 || index % 4 == 2 ? SCREEN_WIDTH / 2.5 : SCREEN_WIDTH / 2,
                                        marginTop: (index % 4 == 3) && (index != 0) ? -27 : 10,
                                        justifyContent:'space-between'
                                    }]}
                                    >

                                    <View style={styles.CategoriesComp1}>

                                        <View style={styles.CategoriesComp1a}>
                                            <Image source={item.image} style={{ width: 40, margin: 9, height: 40 }} />
                                        </View>

                                        <View style={styles.CategoriesComp1b}>

                                            <Text style={styles.CategoriesComp1b1}>
                                                {item.title}
                                            </Text>
                                            <Text style={styles.CategoriesComp1b2}>
                                                {item.cnt} {item.cnt > '1' ? 'Items' : 'Item'}
                                            </Text>
                                            <View style={{ flexDirection: 'row', marginTop: 6 }}>
                                                <View style={{ backgroundColor: color1, height: 8, width: 8, borderRadius: 5 }}></View>
                                                <Text style={{ fontSize: 14, marginTop: -10, marginLeft: 4, fontFamily: 'SF-Pro-Rounded-Bold', color: '#89889D' }}>{item.expire}</Text>
                                                <Text style={{ fontSize: 10, marginTop: -6, marginLeft: 3, fontFamily: 'SF-Pro-Rounded-Bold', color: '#89889D' }}>{item.expire == 1 ? 'day' : 'days'} left</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.CardBottom}>
                                      {/* add substract buttons   */}
                                      <View style={styles.addSubUpper}>
                                        <View style={styles.addSubLower}>
                                          <TouchableOpacity onPress={()=>{
                                            item.cnt-=1;
                                            setGdata([...gdata,item.cnt]);
                                            if(item.cnt == 0)
                                              deleteItemById(item.id);
                                          }}>
                                            <Image source={require('../../../assets/images/minus.png')} style={{ width: width/15, height: width/15}} />
                                          </TouchableOpacity> 
                                          <Text>{item.cnt}</Text> 
                                          <TouchableOpacity 
                                           onPress={()=>{
                                            item.cnt+=1; 
                                            setGdata([...gdata,item.cnt]);
                                          }}>
                                            <Image source={require('../../../assets/images/plus.png')} style={{ width: width/15, height: width/15}} />                                          
                                          </TouchableOpacity>  
                                        </View>
                                      </View>
                                      {/* Delete button */}
                                      <View style={styles.deleteButton}>
                                        <TouchableOpacity onPress={() => deleteItemById(item.id)}>
                                          <Image source={require('../../../assets/images/trash.png')} style={{ width: width/12, height: width/12}} />                                        
                                        </TouchableOpacity>
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
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    backButton: {
        height: 40,
        width: 100,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    IntroBox: {
        paddingTop: height / 12,
        paddingLeft: width / 78.2,
        paddingBottom: height / 15,
    },
    IntroSubHeaderBox: {
        position: 'relative',
        bottom: width / 28,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 24,
        width:180
    },
    IntroHeaderTxt: {
        fontSize: width / 10.3,
        fontFamily: 'SF-Pro-Rounded-Semibold',
        color: Colors.palette_secondary,
        letterSpacing: 0.5,
    },
    IntroSubHeaderTxt: {
        fontSize: width / 21.72,
        fontFamily: 'SF-Pro-Rounded-Medium',
        color: Colors.palette_gray_dark,
        marginTop: -15,
    },
    CategoriesComp: {
        width: SCREEN_WIDTH / 2.5,
        marginLeft: 24,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        flexDirection: 'column',
        paddingTop:10,
        shadowColor: 'black',
        elevation: 10
    },
    CategoriesComp1:{
        flexDirection:'row',
        // backgroundColor:'black',
        alignItems:'center'
    },
    CategoriesComp1a: {
        backgroundColor: 'white',
        shadowColor: '#213a7c',
        elevation: 8,
        borderRadius: 100,
        marginLeft:8
    },
    CategoriesComp1b:{
        flex:1,
        alignItems:'flex-end',
        paddingRight:8
    },
    CategoriesComp1b1: {
        fontSize: 16,
        marginTop: 2,
        fontFamily: 'SF-Pro-Rounded-Bold',
        color: 'grey'
    },
    CategoriesComp1b2: {
        fontSize: 12,
        marginTop: -2 - 3 - 4,
        fontFamily: 'SF-Pro-Rounded-Bold',
        color: Colors.palette_gray_dark
    },
    CardBottom:{
        flexDirection:'row',
        marginBottom:4,
        justifyContent:'space-between',
        alignItems:'center',
        height:40
    },
    addSubUpper:{
        flex:0.55,
        marginLeft:8,
        padding:2,
        backgroundColor:'white',
        shadowColor:'black',
        elevation:3,
        borderRadius:16,
        height:28
    },
    addSubLower:{
        flexDirection:'row',
        justifyContent:'space-around',
    },
    deleteButton:{
        flex:0.25,
        alignItems:'center',
        justifyContent:'center'
    }
});


export default Category_List;
