import React from 'react';
import { View, Text } from 'react-native';
import { Colors } from '../../constants/Colors';
import * as Screen from '../../constants/Screen';
import { Guidelines } from './temp_data';

const width = Screen.SCREEN_WIDTH;
const height = Screen.SCREEN_HEIGHT;

const PickupGuidelines = React.memo(() => {
    console.log('rendered PickupGuidelines');
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.heading}>Pickup Guidelines</Text>
            </View>
            <List />
        </View>
    );
});

const List = React.memo(() => {
    const list = [];

    const RenderItem = ({ item }) => {
        console.log('rendered PickupGuidelines List');
        return (
            <View style={styles.ListItem}>
                <View>
                    <Text style={styles.itemid}>{item.id}.</Text>
                </View>
                <View>
                    <Text style={styles.itemcontent}>{item.content}</Text>
                </View>
            </View>
        );
    };

    for (let i = 0; i < Guidelines.length; i++) {
        list.push(
            <RenderItem key={Guidelines[i].id} item={Guidelines[i]} />
        );
    }
    return <View style={styles.List}>{list}</View>;
}, (prevProps, nextProps) => {
    return true; // or false based on your comparison
});

const styles = {
    container: {
        width: width / 1.15,
        height: 'auto',
        paddingBottom: height / 52.86,
        marginTop: height / 39.65,
        borderStyle: 'dashed',
        borderWidth: width / 260.67,
        borderRadius: 20,
        borderColor: 'rgba(0,0,0,0.5)',
    },
    header: {
        paddingTop: height / 79.3,
        paddingHorizontal: 12,
    },
    heading: {
        fontSize: width / 21.72,
        fontFamily: 'SF-Pro-Text-Semibold',
        color: Colors.palette_secondary,
        opacity: 0.8,
    },
    ListItem: {
        flexDirection: 'row',
        marginTop: width / 48.875,
        marginLeft: width / 24.4375,
    },
    itemid: {
        fontSize: width / 27.93,
        fontFamily: 'SF-Pro-Text-Medium',
        color: Colors.palette_secondary,
        marginRight: width / 48.875,
    },
    itemcontent: {
        fontSize: width / 27.93,
        fontFamily: 'SF-Pro-Text-Regular',
        color: Colors.palette_secondary,

    },
}

export default PickupGuidelines;