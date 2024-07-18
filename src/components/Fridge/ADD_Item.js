import { Modal, Text, View, TextInput, StyleSheet, TouchableWithoutFeedback, TouchableOpacity, Image, FlatList, StatusBar } from "react-native";
import { Colors } from '../../constants/Colors';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../constants/Screen";
import { useContext, useEffect, useRef, useState } from "react";
import Data1 from '../../Context/Data1';
import Data2 from '../../Context/Data2';
import menus from "../shared/temp_data";

const ADD_ITEM = ({ visible, setVisible }) => {
    const [gdata, setGdata] = useContext(Data1);
    const [notifydata, setNotifydata] = useContext(Data2);
    const [search1, setSearch1] = useState('');
    const [search2, setSearch2] = useState('');
    const [search3, setSearch3] = useState('');
    const [clicked1, setClicked1] = useState(false);
    const [clicked2, setClicked2] = useState(false);
    const [clicked3, setClicked3] = useState(false);

    const [selectedValue1, setSelectedValue1] = useState('');
    const [selectedValue2, setSelectedValue2] = useState('');
    const [selectedValue3, setSelectedValue3] = useState('');

    const categories = ["Fruits", "Vegetables", "Beverages", "Meat & Chicken", "Fish & Sea Food", "Dairy & Eggs", "Cereal Food", "Others"];
    const expiries = ["0", "1", "2", "3", "4", "5", "6"];
    const [categoryData, setCategoryData] = useState(categories);
    const [nameData, setNameData] = useState([]);
    const [oldNameData, setOldNameData] = useState([]);
    const [expireData, setExpireData] = useState(expiries);
    const searchRef = useRef();

    useEffect(() => {
        let tempData1 = [];
        menus.map((item, index) => {
            if (item.type == selectedValue1)
                tempData1.push(item.title);
        })
        setNameData(tempData1);
        setOldNameData(tempData1);
    }, [selectedValue1]);


    const onSearch1 = search1 => {
        if (search1 !== '') {
            let tempData = categoryData.filter(item => {
                return item.toLowerCase().indexOf(search1.toLowerCase()) > -1;
            });
            setCategoryData(tempData);
        } else {
            setCategoryData(categories);
        }
    };

    const onSearch2 = search2 => {
        if (search2 !== '') {
            let tempData = nameData.filter(item => {
                return item.toLowerCase().indexOf(search2.toLowerCase()) > -1;
            });
            setNameData(tempData);
        } else {
            setNameData(oldNameData);
        }
    };

    const onSearch3 = search3 => {
        if (search3 !== '') {
            let tempData = expireData.filter(item => {
                return item.toLowerCase().indexOf(search3.toLowerCase()) > -1;
            });
            setExpireData(tempData);
        } else {
            setExpireData(expiries);
        }
    };


    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={() => {
                setVisible(!visible)
            }}>

            <TouchableWithoutFeedback onPress={() => { setVisible(false) }}>
                <View style={styles.formMenu}>
                    <View style={styles.formComp}>

                        {/* Category Selection */}
                        <View style={{ width: '94%', zIndex: clicked1 ? 2 : 1 }}>
                            <TouchableOpacity
                                style={{
                                    width: '90%',
                                    height: 50,
                                    borderRadius: 10,
                                    borderWidth: 0.5,
                                    alignSelf: 'center',
                                    marginTop: 10,
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    paddingLeft: 15,
                                    paddingRight: 15,
                                }}
                                onPress={() => {
                                    setClicked1(!clicked1);
                                }}>
                                <Text style={{ fontWeight: '600' }}>
                                    {selectedValue1 == '' ? 'Select Category' : selectedValue1}
                                </Text>
                                {clicked1 ? (
                                    <Image
                                        source={require('../../../assets/images/upload.png')}
                                        style={{ width: 20, height: 20 }}
                                    />
                                ) : (
                                    <Image
                                        source={require('../../../assets/images/dropdown.png')}
                                        style={{ width: 20, height: 20 }}
                                    />
                                )}
                            </TouchableOpacity>
                            {clicked1 ? (
                                <View
                                    style={{
                                        flex:1,
                                        position: 'absolute',
                                        elevation: 5,
                                        marginTop: 70,
                                        height: 280,
                                        alignSelf: 'center',
                                        width: '90%',
                                        backgroundColor: '#fff',
                                        borderRadius: 10,
                                    }}>
                                    <TextInput
                                        placeholder="Search.."
                                        value={search1}
                                        ref={searchRef}
                                        onChangeText={txt => {
                                            onSearch1(txt);
                                            setSearch1(txt);
                                        }}
                                        style={{
                                            width: '90%',
                                            height: 50,
                                            alignSelf: 'center',
                                            borderWidth: 0.2,
                                            borderColor: '#8e8e8e',
                                            borderRadius: 7,
                                            marginTop: 12,
                                            paddingLeft: 20,
                                        }}
                                    />

                                  <View>
                                    <FlatList
                                        showsVerticalScrollIndicator={true}
                                        data={categoryData}
                                        renderItem={({ item, index }) => {
                                            return (
                                                <TouchableOpacity
                                                    style={{
                                                        width: '85%',
                                                        alignSelf: 'center',
                                                        height: 50,
                                                        justifyContent: 'center',
                                                        borderBottomWidth: 0.5,
                                                        borderColor: '#8e8e8e',
                                                    }}
                                                    onPress={() => {
                                                        setSelectedValue1(item);
                                                        setClicked1(!clicked1);
                                                        onSearch1('');
                                                        setSearch1('');
                                                    }}>
                                                    <Text style={{ fontWeight: '600' }}>{item}</Text>
                                                </TouchableOpacity>
                                            );
                                        }}
                                    />
                                  </View>  
                                </View>
                            ) : null}
                        </View>

                        {/* Name Selection */}
                        <View style={{ width: '94%', zIndex: clicked2 ? 2 : 1 }}>
                            <TouchableOpacity
                                style={{
                                    width: '90%',
                                    height: 50,
                                    borderRadius: 10,
                                    borderWidth: 0.5,
                                    alignSelf: 'center',
                                    marginTop: 10,
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    paddingLeft: 15,
                                    paddingRight: 15,
                                }}
                                onPress={() => {
                                    setClicked2(!clicked2);
                                }}>
                                <Text style={{ fontWeight: '600' }}>
                                    {selectedValue2 == '' ? 'Select Name' : selectedValue2}
                                </Text>
                                {clicked2 ? (
                                    <Image
                                        source={require('../../../assets/images/upload.png')}
                                        style={{ width: 20, height: 20 }}
                                    />
                                ) : (
                                    <Image
                                        source={require('../../../assets/images/dropdown.png')}
                                        style={{ width: 20, height: 20 }}
                                    />
                                )}
                            </TouchableOpacity>
                            {clicked2 ? (
                                <View
                                    style={{
                                        position: 'absolute',
                                        elevation: 5,
                                        marginTop: 70,
                                        height: 280,
                                        alignSelf: 'center',
                                        width: '90%',
                                        backgroundColor: '#fff',
                                        borderRadius: 10,
                                    }}>
                                    <TextInput
                                        placeholder="Search.."
                                        value={search2}
                                        ref={searchRef}
                                        onChangeText={txt => {
                                            onSearch2(txt);
                                            setSearch2(txt);
                                        }}
                                        style={{
                                            width: '90%',
                                            height: 50,
                                            alignSelf: 'center',
                                            borderWidth: 0.2,
                                            borderColor: '#8e8e8e',
                                            borderRadius: 7,
                                            marginTop: 12,
                                            paddingLeft: 20,
                                        }}
                                    />

                                    <FlatList
                                        showsVerticalScrollIndicator={true}
                                        data={nameData}
                                        renderItem={({ item, index }) => {
                                            return (
                                                <TouchableOpacity
                                                    style={{
                                                        width: '85%',
                                                        alignSelf: 'center',
                                                        height: 50,
                                                        justifyContent: 'center',
                                                        borderBottomWidth: 0.5,
                                                        borderColor: '#8e8e8e',
                                                    }}
                                                    onPress={() => {
                                                        setSelectedValue2(item);
                                                        setClicked2(!clicked2);
                                                        onSearch2('');
                                                        setSearch2('');
                                                    }}>
                                                    <Text style={{ fontWeight: '600' }}>{item}</Text>
                                                </TouchableOpacity>
                                            );
                                        }}
                                    />
                                </View>
                            ) : null}
                        </View>

                        {/* Expiry Selection */}
                        <View style={{ width: '94%', zIndex: clicked3 ? 2 : 1 }}>
                            <TouchableOpacity
                                style={{
                                    width: '90%',
                                    height: 50,
                                    borderRadius: 10,
                                    borderWidth: 0.5,
                                    alignSelf: 'center',
                                    marginTop: 10,
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    paddingLeft: 15,
                                    paddingRight: 15,
                                }}
                                onPress={() => {
                                    setClicked3(!clicked3);
                                }}>
                                <Text style={{ fontWeight: '600' }}>
                                    {selectedValue3 == '' ? 'Select Expiry' : selectedValue3}
                                </Text>
                                {clicked3 ? (
                                    <Image
                                        source={require('../../../assets/images/upload.png')}
                                        style={{ width: 20, height: 20 }}
                                    />
                                ) : (
                                    <Image
                                        source={require('../../../assets/images/dropdown.png')}
                                        style={{ width: 20, height: 20 }}
                                    />
                                )}
                            </TouchableOpacity>
                            {clicked3 ? (
                                <View
                                    style={{
                                        position: 'absolute',
                                        elevation: 5,
                                        marginTop: 70,
                                        height: 280,
                                        alignSelf: 'center',
                                        width: '90%',
                                        backgroundColor: '#fff',
                                        borderRadius: 10,
                                    }}>
                                    <TextInput
                                        placeholder="Search.."
                                        value={search3}
                                        ref={searchRef}
                                        onChangeText={txt => {
                                            onSearch3(txt);
                                            setSearch3(txt);
                                        }}
                                        style={{
                                            width: '90%',
                                            height: 50,
                                            alignSelf: 'center',
                                            borderWidth: 0.2,
                                            borderColor: '#8e8e8e',
                                            borderRadius: 7,
                                            marginTop: 12,
                                            paddingLeft: 20,
                                        }}
                                    />

                                    <FlatList
                                        showsVerticalScrollIndicator={true}
                                        data={expireData}
                                        renderItem={({ item, index }) => {
                                            return (
                                                <TouchableOpacity
                                                    style={{
                                                        width: '85%',
                                                        alignSelf: 'center',
                                                        height: 50,
                                                        justifyContent: 'center',
                                                        borderBottomWidth: 0.5,
                                                        borderColor: '#8e8e8e',
                                                    }}
                                                    onPress={() => {
                                                        setSelectedValue3(item);
                                                        setClicked3(!clicked3);
                                                        onSearch3('');
                                                        setSearch3('');
                                                    }}>
                                                    <Text style={{ fontWeight: '600' }}>{item}</Text>
                                                </TouchableOpacity>
                                            );
                                        }}
                                    />
                                </View>
                            ) : null}
                        </View>

                        <TouchableOpacity style={styles.button} onPress={() => {
                            let flag = false;
                            const monthNames = ["January", "February", "March", "April", "May", "June",
                                    "July", "August", "September", "October", "November", "December"
                                ];
                                const now = new Date();
                                let time1 = now.getHours() + ":" + now.getMinutes();
                                let month1 = monthNames[now.getMonth()];

                            gdata.map((item, index) => {
                                if (item.type == selectedValue1 && item.title == selectedValue2) {
                                    console.log('Item already Present..')
                                    flag = true;
                                }
                            })
                            if (flag == false) {
                                let img = '';
                                menus.map((item, index) => {
                                    if (item.type == selectedValue1 && item.title == selectedValue2) {
                                        img = item.image;
                                    }
                                })
                                
                                let tempData = {
                                    id: Date.now(),
                                    type: selectedValue1,
                                    title: selectedValue2,
                                    cnt: 1,
                                    expire: selectedValue3,
                                    day: now.getDate(),
                                    when_added: '2',
                                    month: month1,
                                    time: time1,
                                    msel: false,
                                    image: img
                                }
                                setGdata([...gdata, tempData]);
                                setNotifydata([...notifydata, tempData]);
                            }
                            setVisible(false);
                        }}>
                            <Text style={styles.buttontxt}>ADD ITEM</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    formMenu: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.05)',
    },
    formComp: {
        width: '60%',
        maxHeight: '100%',
        borderRadius: 15,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'black',
        elevation: 10,
        borderColor: '#52a2e7',
        paddingVertical: 16
    },
    button: {
        width: SCREEN_WIDTH / 2,
        height: SCREEN_WIDTH / 7,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 18,
        marginTop: 10,
        backgroundColor: '#52a2e7',
        shadowColor: 'black',
        elevation: 10,
    },
    buttontxt: {
        color: 'white',
        fontFamily: 'SF-Pro-Rounded-Medium',
        fontSize: 20
    }
});


export default ADD_ITEM;