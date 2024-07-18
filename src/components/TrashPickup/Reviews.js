/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Svginserter from '../shared/Svginserter';
import { Colors } from '../../constants/Colors';
import * as Screen from '../../constants/Screen';
import { reviews } from './temp_data';

const width = Screen.SCREEN_WIDTH;
const height = Screen.SCREEN_HEIGHT;

const Rating = ({ rate }) => {
    const stars = [];
    for (let i = 0; i < rate; i++) {
        console.log('star');
        stars.push(<View style={styles.stars} key={`star-${i}`}><Svginserter tag={'Star_filled'} width={14} height={14} /></View>);
    }
    for (let i = 0; i < 5 - rate; i++) {
        console.log('empty star');
        stars.push(<View style={styles.stars} key={`empty-star-${i}`}><Svginserter tag={'Star_empty'} width={14} height={14} /></View>);
    }
    return <View style={styles.ratingBox}>{stars}</View>;
};

const RenderItem = ({ item }) => {
    console.log('rendered');
    return (
        <View style={styles.List}>
            <View style={styles.NameHead}>
                <View style={[styles.ReviewProfile, { backgroundColor: item.profile }]}>
                    <Text style={styles.ReviewProfileLetter}>{item.name.slice(0, 1)}</Text>
                </View>
                <Text style={styles.ReviewName}>{item.name}</Text>
            </View>
            <View style={styles.rate_dateBox}>
                <Rating rate={item.rating} />
                <Text style={styles.ReviewDate}>{item.date}</Text>
            </View>
            <View>
                <Text style={styles.ReviewComment}>{item.comment}</Text>
            </View>
        </View>
    );
};

const List = React.memo(() => {
    console.log('rendered list');
    const reviewList = [];
    for (let i = 0; i < 3; i++) {
        reviewList.push(<RenderItem key={reviews[i].id} item={reviews[i]} />);
    }
    return <View style={{ marginBottom: 80 }}>{reviewList}</View>;
}, (prevProps, nextProps) => {
    // Memo comparison logic
    return true; // or false based on your comparison
});

const Reviews = () => {
    console.log('rendered Reviews');
    return (
        <View style={styles.Review}>
            <View style={styles.ReviewHeader}>
                <Text style={styles.ReviewHeading}>Ratings and reviews</Text>
                <TouchableOpacity style={{ marginRight: width / 48.875, opacity: 0.6 }} onPress={() => { console.log('Ratings and Reviews Button Pressed'); }}>
                    <Image source={require('../../../assets/images/right-arrow.png')} style={{width: 24, height: 24}} />
                </TouchableOpacity>
            </View>
            <List />
        </View>
    );
};

const styles = StyleSheet.create({
    Review: {
        flex: 1,
        marginTop: height / 31.72,
        width: '100%',
        paddingHorizontal: width / 12.22,
    },
    ReviewHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    ReviewHeading: {
        fontSize: width / 21.72,
        fontFamily: 'SF-Pro-Rounded-Semibold',
        color: Colors.palette_secondary,
        opacity: 0.9,
        letterSpacing: 0.5,
    },
    List: {
        width: '100%',
        paddingVertical: height / 99.125,
    },
    NameHead: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: width / 78.2,
    },
    ReviewProfile: {
        width: width / 11.17,
        height: width / 11.17,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    ReviewProfileLetter: {
        fontSize: width / 19.55,
        color: Colors.palette_white,
        fontFamily: 'SF-Pro-Rounded-Semibold',
    },
    ReviewName: {
        fontSize: width / 24.438,
        fontFamily: 'SF-Pro-Text-Medium',
        color: Colors.palette_secondary,
        marginLeft: width / 39.1,
    },
    rate_dateBox: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: width / 78.2,
    },
    ratingBox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: width / 39,
    },
    stars: {
        marginRight: width / 130,
    },
    ReviewDate: {
        fontSize: width / 32.58,
        fontFamily: 'SF-Pro-Text-Regular',
        color: Colors.palette_secondary,
        letterSpacing: 0.7,
    },
    ReviewComment: {
        width: '95%',
        fontSize: width / 27.92,
        fontFamily: 'SF-Pro-Text-Regular',
        textAlign: 'left',
    },
});

export default Reviews;
