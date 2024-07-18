import React, { useState, useRef, useEffect } from 'react';
import { FlatList, StyleSheet, Text, Image, TouchableOpacity, View, TextInput, Animated } from 'react-native';
import { MotiView } from 'moti';
import { MotiPressable } from 'moti/interactions';
import Svginserter from '../../components/shared/Svginserter';
import * as Screen from '../../constants/Screen';
import { Colors } from '../../constants/Colors';
import menus from '../../components/shared/temp_data';
import Recent from '../../components/Home/Recent';
import Near_expiry from '../../components/Home/Near_expiry';
import Expired from '../../components/Home/Expired';
import Factoid from '../../components/Home/Factoid';
import Pagination from '../../components/Home/Pagination';

import auth from '@react-native-firebase/auth';
import db from '@react-native-firebase/database';

const width = Screen.SCREEN_WIDTH;
const height = Screen.SCREEN_HEIGHT;

let fact_data = [
    { heading: 'ARTICLE1', description: 'Discover the health benefits of 60 Kiwi species.', Image: '../../../assets/images/kiwi_illustration.png' },
    { heading: 'ARTICLE2', description: 'Discover the health benefits of 60 Kiwi species.', Image: '../../../assets/images/kiwi_illustration.png' },
    { heading: 'ARTICLE3', description: 'Discover the health benefits of 60 Kiwi species.', Image: '../../../assets/images/kiwi_illustration.png' },
    { heading: 'ARTICLE4', description: 'Discover the health benefits of 60 Kiwi species.', Image: '../../../assets/images/kiwi_illustration.png' },
    { heading: 'ARTICLE5', description: 'Discover the health benefits of 60 Kiwi species.', Image: '../../../assets/images/kiwi_illustration.png' },
]

const Home = (props: { showMenu: any; }) => {
    const [profile, setProfile] = useState(null);
    const [name, setName] = useState('Sajal ');
    const [temp, setTemp] = useState('');
    const [data1, setData1] = useState([]);
    const [switching, setSwitching] = useState('1');

    useEffect(() => {
        setData1(menus);
    }, []);

    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth().onAuthStateChanged((user) => {
            if (user) {
                setCurrentUser(user);
                const userId = user.uid;

                db().ref(`users/${userId}`).once('value')
                    .then((snapshot) => {
                        const userData = snapshot.val();
                        setName(userData.displayName.slice(0, userData.displayName.indexOf(' ')));
                        if (userData.profilePictureURL){
                            setProfile(userData.profilePictureURL);
                        }
                    })
                    .catch((error) => {
                        console.error('Error fetching user data:', error);
                    });
            } else {
                // User is signed out.
                setCurrentUser(null);
            }
        });

        return () => unsubscribe(); // Cleanup the subscription when the component unmounts.
    }, []);

    // Pagination functions
    const [index, setIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;

    const handleOnScroll = event => {
        Animated.event(
            [
                {
                    nativeEvent: {
                        contentOffset: {
                            x: scrollX,
                        },
                    },
                },
            ],
            {
                useNativeDriver: false,
            },
        )(event);
    };

    const handleOnViewableItemsChanged = useRef(({ viewableItems }) => {
        setIndex(viewableItems[0].index);
    }).current;

    const viewabilityConfig = useRef({
        itemVisiblePercentThreshold: 50,
    }).current;

    return (
        <MotiView style={[styles.container]}
            from={{ borderRadius: 0 }}
            animate={{ borderRadius: props.showMenu ? 35 : 0 }}
            transition={props.showMenu ? { type: 'timing', duration: 100 } : { type: 'timing', duration: 650 }}
        >
            <MotiView style={styles.profileAvatarBox}
                from={{ borderRadius: 0 }}
                animate={{ borderTopLeftRadius: props.showMenu ? 35 : 0 }}
                transition={props.showMenu ? { type: 'timing', duration: 100 } : { type: 'timing', duration: 650 }}
            >
                <MotiPressable onPress={() => { console.log('Clicked on Profile') }}
                    from={{ scale: 1 }}
                    animate={({ pressed }) => {
                        'worklet';
                        return {
                            scale: pressed ? 0.9 : 1,
                        }
                    }}>
                    <View style={styles.profileAvatar}>
                        {profile !== null ? (
                            <Image source={{ uri: profile }} style={{ width: 40, height: 40, borderRadius: 30 }} />
                        ) : (
                            <Svginserter tag={'UserProfileDefault'} width={30} height={30} />
                        )}
                    </View>
                </MotiPressable>
            </MotiView>

            <MotiView style={styles.mainContainer}>
                <View>
                    <View style={styles.header}>
                        <View style={styles.WelcomeHeaderBox}>
                            <View style={styles.WelcomeBox}>
                                <View>
                                    <Text style={styles.WelcomeHeaderTxt}>Hi {name}!</Text>
                                </View>
                                <View style={styles.WelcomeSubHeaderBox}>
                                    <Text style={styles.WelcomeSubHeaderTxt}>Welcome back</Text>
                                </View>
                            </View>
                            <View style={styles.Search_FilterContainer}>
                                <View style={styles.SearchBox}>
                                    <View style={styles.SearchIconBox}>
                                        <Svginserter tag={'SearchIcon'} width={width / 16.2} height={width / 16.2} />
                                    </View>
                                    <View>
                                        <TextInput
                                            style={styles.SearchInput}
                                            onChangeText={setTemp}
                                            value={temp}
                                            placeholder="Search food item"
                                            keyboardType="email-address"
                                            cursorColor={Colors.palette_secondary}
                                            autoFocus={false} >
                                        </TextInput>
                                    </View>
                                </View>
                                <View>
                                    <TouchableOpacity activeOpacity={0.5} style={styles.FilterIconBox} onPress={() => { console.log('Clicked on Filter') }}
                                    >
                                        <Svginserter tag={'FilterIcon'} width={width / 16.2} height={width / 16.2} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={styles.mainContent}>
                        <View style={styles.FactoidHeader}>
                            <View style={styles.Factoidheading}>
                                <Text style={styles.FactoidHeadingTxt}>Trending factoid</Text>
                            </View>
                            {/* factoid Component starts */}
                            {/* Use Horizontal List Here and use this Component for Items. */}
                            {/* I will do the designing */}
                            <FlatList
                                data={fact_data}
                                renderItem={({ item }) => <Factoid item={item} />}
                                horizontal
                                // pagingEnabled
                                bounces={false}
                                // renderToHardwareTextureAndroid
                                snapToAlignment="start"
                                showsHorizontalScrollIndicator={false}
                                onScroll={handleOnScroll}
                                onViewableItemsChanged={handleOnViewableItemsChanged}
                                viewabilityConfig={viewabilityConfig}
                            />
                            {/* factoid Component ends */}
                            <Pagination data={fact_data} scrollX={scrollX} index={index} />
                        </View>
                        <View style={styles.ListContainer}>
                            <View style={styles.ListOptions}>
                                <MotiPressable style={[(switching == '1' ? styles.button : null)]} onPress={() => {
                                    setSwitching('1');
                                }}
                                    from={{ scale: 1, opacity: 1 }}
                                    animate={({ pressed }) => {
                                        'worklet'
                                        return {
                                            scale: pressed ? 0.95 : 1,
                                            opacity: pressed ? 0.5 : 1,
                                        }
                                    }}
                                    transition={{ type: 'timing', duration: 100 }}
                                >
                                    <Text style={styles.ListHeaderTxt}>Recent</Text>
                                </MotiPressable>
                                <View style={styles.Sectiondivider} />
                                <MotiPressable style={[(switching == '2' ? styles.button : null)]} onPress={() => { setSwitching('2') }}
                                    from={{ scale: 1, opacity: 1 }}
                                    animate={({ pressed }) => {
                                        'worklet'
                                        return {
                                            scale: pressed ? 0.95 : 1,
                                            opacity: pressed ? 0.5 : 1,
                                        }
                                    }}
                                    transition={{ type: 'timing', duration: 100 }}
                                >
                                    <Text style={styles.ListHeaderTxt}>Near Expiry</Text>
                                </MotiPressable>
                                <View style={styles.Sectiondivider} />
                                <MotiPressable style={[(switching == '3' ? styles.button : null)]} onPress={() => { setSwitching('3') }}
                                    from={{ scale: 1, opacity: 1 }}
                                    animate={({ pressed }) => {
                                        'worklet'
                                        return {
                                            scale: pressed ? 0.95 : 1,
                                            opacity: pressed ? 0.5 : 1,
                                        }
                                    }}
                                    transition={{ type: 'timing', duration: 100 }}
                                >
                                    <Text style={styles.ListHeaderTxt}>Expired</Text>
                                </MotiPressable>
                            </View>

                        </View>

                        {/* Make a Component Separately for better code Structure and less headache */}
                        <View style={{ flex: 1 }}>
                            {switching == '1' ? (<Recent />) : (switching == '2' ? (<Near_expiry />) : (<Expired />))}
                        </View>
                    </View>
                </View>
            </MotiView>
        </MotiView>
    );
};


const styles = StyleSheet.create({
    container: {
        height: '100%',
        // marginTop: -50,
        backgroundColor: Colors.white,
    },
    header: {
        height: height * 0.3,
    },
    profileAvatarBox: {
        width: width,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        position: 'absolute',
        zIndex: 1000,
        paddingRight: width / 8.68,
        paddingTop: height / 15.86,
        paddingBottom: height / 79.3,
        backgroundColor: Colors.white,
    },
    profileAvatar: {
        width: width / 9.775,
        height: width / 9.775,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: Colors.bg,
        shadowColor: 'black',
        elevation: 4,
    },
    mainContainer: {
        height: height * 1.05,
    },
    WelcomeHeaderBox: {
        paddingHorizontal: width / 14.48,
        paddingTop: height / 9.913,
    },
    WelcomeBox: {
        paddingTop: height / 52.87,
        paddingLeft: width / 78.2,
    },
    WelcomeSubHeaderBox: {
        position: 'relative',
        bottom: width / 28,
    },
    WelcomeHeaderTxt: {
        fontSize: width / 10.3,
        fontFamily: 'SF-Pro-Rounded-Semibold',
        color: Colors.palette_secondary,
        letterSpacing: 0.5,
    },
    WelcomeSubHeaderTxt: {
        fontSize: width / 21.72,
        fontFamily: 'SF-Pro-Rounded-Medium',
        color: Colors.palette_gray_dark,
    },
    Search_FilterContainer: {
        height: width / 6.98,
        flexDirection: 'row',
        alignItems: 'center',
    },
    SearchBox: {
        width: width / 1.6,
        height: width / 7,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 12,
        marginLeft: width / 78.2,
        marginRight: width / 15.64,
        backgroundColor: Colors.palette_white,
    },
    SearchIconBox: {
        paddingHorizontal: width / 39.1,
    },
    SearchInputBox: {
        width: '80%',
        height: width / 7.24,
        justifyContent: 'center',
        paddingLeft: width / 39.1,
    },
    SearchInput: {
        fontSize: width / 21.72,
        fontFamily: 'SF-Pro-Rounded-Medium',
        color: Colors.palette_gray_dark,
        letterSpacing: 0.4,
        width: width / 2.11,
        height: width / 7,
    },
    FilterIconBox: {
        padding: width / 24.438,
        borderRadius: 12,
        backgroundColor: Colors.palette_secondary,
    },
    mainContent: {
        height: '67%',
        // backgroundColor:'blue',
        marginTop: 30
        // marginHorizontal: width / 65.17,
        // paddingHorizontal: width / 14.5,
    },
    FactoidHeader: {
        // marginLeft: width / 78.2,
        // paddingHorizontal: width / 14.5,
    },
    Factoidheading: {
        marginLeft: width / 78.2,
        // paddingTop: height / 19.825,
        paddingHorizontal: width / 14.5
    },
    FactoidHeadingTxt: {
        fontSize: width / 17,
        color: Colors.palette_secondary,
        fontFamily: 'SF-Pro-Rounded-Semibold',
        letterSpacing: 0.4,
    },
    ListContainer: {
        height: height * 0.09,
        paddingTop: height / 89.65,
        // marginLeft: width / 78.2,
        // marginHorizontal:width/12
        paddingHorizontal: width / 14.5,
        // borderStartColor:'blue'
    },
    ListOptions: {
        flexDirection: 'row',
        width: '100%',
        height: width / 8.69,
        alignItems: 'center',
        justifyContent: 'space-around',
        borderRadius: 12,
        backgroundColor: 'rgba(0,0,0,0.1)',
        // paddingHorizontal: width / 14.5,
    },
    ListHeaderTxt: {
        fontSize: width / 26.06,
        color: Colors.palette_secondary,
        fontFamily: 'SF-Pro-Text-Semibold',
        opacity: 0.7,
        // backgroundColor:'blue'
    },
    button: {
        // backgroundColor: '#5783',
        height: 30,
        paddingHorizontal: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'black',
        borderBottomWidth: 1.2,
        // shadowColor: 'black',
        // elevation: 10
    },
    Sectiondivider: {
        width: 1,
        height: width / 15.64,
        backgroundColor: 'rgba(0,0,0,0.35)',
    },
});

export default Home;