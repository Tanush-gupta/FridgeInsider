import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { MotiView } from 'moti';
import { Colors } from '../../constants/Colors';
import * as Screen from '../../constants/Screen';

// // Components
import Header from '../../components/TrashPickup/Header';
import Banner from '../../components/TrashPickup/Banner';
import PointsDisplay from '../../components/TrashPickup/PointsDisplay';
import PickupDetails from '../../components/TrashPickup/PickupDetails';
import ScheduleBtn from '../../components/TrashPickup/ScheduleBtn';
import Guidelines from '../../components/TrashPickup/Guidelines';
import Reviews from '../../components/TrashPickup/Reviews';
import ChangeDetailsPopup from '../../components/TrashPickup/ChangeDetailsPopup';

const width = Screen.SCREEN_WIDTH;

const TrashPickup = (props) => {
    const [profile, setProfile] = useState(false);
    const [Address, setAddress] = useState('House number 210, Paditaan Gali, Balipur, Pratapgarh');
    const [Contact, setContact] = useState('+91 9389341886');
    const [Time, setTime] = useState('10:00 AM - 12:00 PM');

    return (
        <MotiView
            style={styles.container}
            from={{ borderRadius: 0 }}
            animate={{ borderRadius: props.showMenu ? 35 : 0 }}
            transition={
                props.showMenu
                    ? { type: 'timing', duration: 100 }
                    : { type: 'timing', duration: 650 }
            }
        >
            <Header profile={profile} showMenu={props.showMenu} />
            <ScrollView style={{ width: '100%' }} showsVerticalScrollIndicator={false}>
                <View style={styles.main}>
                    <Banner />
                    <PointsDisplay />
                    <PickupDetails setHidewrapper={props.setHidewrapper} Address={Address} Contact={Contact} Time={Time} />
                    <ScheduleBtn setHidewrapper={props.setHidewrapper} />
                    <Guidelines />
                </View>
                <Reviews />
            </ScrollView>
            <ChangeDetailsPopup
                isVisible={props.hidewrapper}
                onCancel={() => props.setHidewrapper(false)}
                Address={Address}
                setAddress={setAddress}
                Contact={Contact}
                setContact={setContact}
                Time={Time}
                setTime={setTime}
            />
        </MotiView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: Colors.white,
    },
    main: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: width / 15.04,
    },
});

export default TrashPickup;
