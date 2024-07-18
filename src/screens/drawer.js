import React from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Svginserter from '../components/shared/Svginserter';
import * as Screen from '../constants/Screen';
import { Colors } from '../constants/Colors';

const width = Screen.SCREEN_WIDTH;
const height = Screen.SCREEN_HEIGHT;

import { signOutFromGoogle } from '../Firebase/FirebaseGoogleAuth';

const drawer_list = [
    { icon: require('../../assets/images/avatar1.png'), title: 'Profile' },
    { icon: require('../../assets/images/graph1.png'), title: 'Contribution Graph'},
    { icon: require('../../assets/images/faq1.png'), title: 'FAQs' },
    { icon: require('../../assets/images/about1.png'), title: 'About Us' },
    { icon: require('../../assets/images/settings1.png'), title: 'Settings' },
];

const renderItem = ({ item, index }) => {
    // console.log('Drawer Item is rendered');
    return (
        <View style={styles.ListItemContent}>
            <TouchableOpacity
                activeOpacity={0.45}
                style={styles.ListItem}
                onPress={() => {
                    // console.log(item.title + ' Btn is clicked');
                }}
            >
                <View>
                    <Image style={{height:width / 16,width:width / 16}} source={item.icon}/>
                </View>
                <View style={styles.ListTitleBox}>
                    <Text style={styles.ListTitle}>{item.title}</Text>
                </View>
            </TouchableOpacity>
            {index === drawer_list.length - 1 ? null : (
                <View style={styles.underline} />
            )}
        </View>
    );
};

const Drawer = React.memo((props) => {
    // console.log('Drawer is rendered');

    return (
        <View style={styles.container}>
            <TouchableOpacity
                activeOpacity={0.35}
                onPress={() => {
                    props.setShowMenu(false);
                }}
            >
                <View style={styles.MenuBox}>
                    <Svginserter tag={'MenuClose'} />
                </View>
            </TouchableOpacity>
            <View style={styles.List}>
                <FlatList
                    data={drawer_list}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                />

                <TouchableOpacity 
                    style={styles.LogoutBox}
                    onPress={() => {
                        signOutFromGoogle(props);
                    }}>
                    <View>
                        <Image style={{height:width / 16,width:width / 16}} source={require('../../assets/images/logout1.png')}/>
                    </View>
                    <View>
                        <Text style={styles.LogoutTxt}>LogOut</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}, () => {
    // Memo comparison logic
    return true; // or false based on your comparison
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.body_light2,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    MenuBox: {
        position: 'relative',
        top: height / 11.3,
        left: width / 15.6,
        width: width / 11.2,
        height: height / 22.65,
    },
    List: {
        marginTop: height / 7.93,
        marginLeft: width / 19.55,
    },
    ListItemContent: {
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        marginLeft: width / 19.55,
    },
    ListItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 18,
        paddingBottom: 18,
    },
    ListTitleBox: {
        paddingLeft: width / 19.55,
    },
    ListTitle: {
        color: 'white',
        fontSize: width / 22,
        fontFamily: 'SF-Pro-Rounded-Semibold',
        letterSpacing: 0.7,
    },
    underline: {
        width: width / 2.9,
        height: height / 1400,
        marginLeft: width / 8.9,
        borderRadius: 30,
        backgroundColor: 'white',
    },
    LogoutBox: {
        marginLeft: width / 19.55,
        marginBottom: height / 11.3,
        flexDirection: 'row',
        alignItems: 'center',
    },
    LogoutTxt: {
        fontSize: width / 19.55,
        paddingLeft: 20,
        fontFamily: 'SF-Pro-Rounded-Bold',
        color: 'white',
    },
});

export default Drawer;
