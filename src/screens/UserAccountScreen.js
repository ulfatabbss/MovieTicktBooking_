import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import heading from '../utilities/styles';
import Color from '../utilities/color';

const UserAccountScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
      <Text style={[heading.h3, {alignSelf: 'center'}]}>My Profile</Text>
      <Image
        style={styles.pimg}
        resizeMode="stretch"
        source={require('../assets/homePageimg/img1.png')}></Image>
      <TouchableOpacity>
        <View style={styles.V1}>
          <View styles={styles.V2}>
            <View style={styles.V4}>
              <Image
                style={styles.p1}
                resizeMode="contain"
                source={require('../assets/homePageimg/p1.png')}></Image>
              <Text style={[heading.h5, {marginLeft: 10}]}>Account</Text>
            </View>
            <Text style={[heading.h7, {marginLeft: 28, color: Color.gray}]}>
              Edit Profile
            </Text>
            <Text style={[heading.h7, {marginLeft: 28, color: Color.gray}]}>
              Change Password
            </Text>
          </View>
          <View styles={styles.V3}>
            <Image
              style={styles.pa}
              resizeMode="contain"
              source={require('../assets/homePageimg/pa.png')}></Image>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.V5}>
          <View styles={styles.V2}>
            <View style={styles.V4}>
              <Image
                style={styles.p1}
                resizeMode="contain"
                source={require('../assets/homePageimg/p2.png')}></Image>
              <Text style={[heading.h5, {marginLeft: 10}]}>Settings</Text>
            </View>
            <Text style={[heading.h7, {marginLeft: 28, color: Color.gray}]}>
              Themes
            </Text>
            <Text style={[heading.h7, {marginLeft: 28, color: Color.gray}]}>
              Permissions
            </Text>
          </View>
          <View styles={styles.V3}>
            <Image
              style={styles.pa}
              resizeMode="contain"
              source={require('../assets/homePageimg/pa.png')}></Image>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.V5}>
          <View styles={styles.V2}>
            <View style={styles.V4}>
              <Image
                style={styles.p1}
                resizeMode="contain"
                source={require('../assets/homePageimg/p3.png')}></Image>
              <Text style={[heading.h5, {marginLeft: 10}]}>
                Offers & Referrals
              </Text>
            </View>
            <Text style={[heading.h7, {marginLeft: 28, color: Color.gray}]}>
              Offers
            </Text>
            <Text style={[heading.h7, {marginLeft: 28, color: Color.gray}]}>
              Referrals
            </Text>
          </View>
          <View styles={styles.V3}>
            <Image
              style={styles.pa}
              resizeMode="contain"
              source={require('../assets/homePageimg/pa.png')}></Image>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.V5}>
          <View styles={styles.V2}>
            <View style={styles.V4}>
              <Image
                style={styles.p1}
                resizeMode="contain"
                source={require('../assets/homePageimg/p4.png')}></Image>
              <Text style={[heading.h5, {marginLeft: 10}]}>About</Text>
            </View>
            <Text style={[heading.h7, {marginLeft: 28, color: Color.gray}]}>
              About Movies
            </Text>
            <Text style={[heading.h7, {marginLeft: 28, color: Color.gray}]}>
              More
            </Text>
          </View>
          <View styles={styles.V3}>
            <Image
              style={styles.pa}
              resizeMode="contain"
              source={require('../assets/homePageimg/pa.png')}></Image>
          </View>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default UserAccountScreen;

const styles = StyleSheet.create({
  pimg: {
    height: 80,
    width: 80,
    borderRadius: 30,
    alignSelf: 'center',
    marginTop: '10%',
  },
  V1: {
    flexDirection: 'row',
    height: 60,
    width: Dimensions.get('window').width - 50,
    alignSelf: 'center',

    marginTop: '20%',

    justifyContent: 'space-between',
    alignItems: 'center',
  },
  V2: {
    height: '100%',
    backgroundColor: 'red',
  },
  V3: {
    height: '100%',

    backgroundColor: 'red',
  },
  V4: {
    flexDirection: 'row',
  },
  V5: {
    flexDirection: 'row',
    height: 60,
    width: Dimensions.get('window').width - 50,
    alignSelf: 'center',

    marginTop: '5%',

    justifyContent: 'space-between',
    alignItems: 'center',
  },
  p1: {
    height: 18,
    width: 18,
  },
  pa: {
    height: 18,
    width: 18,
  },
});
