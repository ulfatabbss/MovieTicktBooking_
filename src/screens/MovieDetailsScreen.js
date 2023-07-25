import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import heading from '../utilities/styles';
import Color from '../utilities/color';

const MovieDetailsScreen = ({route, navigation, item}) => {
  const {Imag} = route.params;
  return (
    <SafeAreaView style={{backgroundColor: 'black', flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.V1}>
          <ImageBackground
            style={styles.imb}
            resizeMode="stretch"
            source={Imag.bg}>
            <TouchableOpacity 
            style={styles.backT} onPress={() => navigation.goBack()}>
              <Image
                style={styles.back}
                resizeMode="contains"
                source={require('../assets/homePageimg/back2.png')}></Image>
            </TouchableOpacity>

            <Image
              style={styles.im1}
              resizeMode="contain"
              source={Imag.Img}></Image>
          </ImageBackground>
        </View>
        <View style={styles.V2}>
          <Image
            style={styles.t3}
            resizeMode="contain"
            source={require('../assets/homePageimg/t3.png')}></Image>
          <Text style={styles.tx1}>{Imag.txt3}</Text>
        </View>
        <Text style={[heading.h2, {alignSelf: 'center',marginTop:10}]}>{Imag.txt}</Text>
        <View style={styles.V6}>
          <View style={styles.V7}>
            <Text style={styles.tx3}>Action</Text>
          </View>
          <View style={styles.V7}>
            <Text style={styles.tx3}>Thriller</Text>
          </View>
          <View style={styles.V7}>
            <Text style={styles.tx3}>Crime</Text>
          </View>
        </View>
        <Text style={styles.tx4}>No way back, one way out.</Text>
        <View style={styles.V8}>
          <Image
            style={styles.img2}
            resizeMode="contain"
            source={require('../assets/homePageimg/star.png')}></Image>
          <Text style={styles.tx5}>{Imag.txt4}</Text>
          <Text style={styles.tx6}>24 March 2023</Text>
        </View>
        <Text style={styles.tx7}>{Imag.txt2}</Text>
        <Text style={[heading.h3,{marginTop:19}]}>Top Cast</Text>
        <View style={styles.V9}>
          <Image
            style={styles.d1}
            resizeMode="contain"
            source={require('../assets/homePageimg/d1.png')}></Image>
          <Image
            style={styles.d1}
            resizeMode="contain"
            source={require('../assets/homePageimg/d2.png')}></Image>
          <Image
            style={styles.d1}
            resizeMode="contain"
            source={require('../assets/homePageimg/d3.png')}></Image>
          <Image
            style={styles.d1}
            resizeMode="contain"
            source={require('../assets/homePageimg/d4.png')}></Image>
          <Image
            style={styles.d1}
            resizeMode="contain"
            source={require('../assets/homePageimg/d5.png')}></Image>
        </View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('TicketBookingScreen', {data1: Imag})
          }>
          <View style={styles.V3}>
            <Text style={styles.tx9}>Select Seats</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MovieDetailsScreen;

const styles = StyleSheet.create({
  V1: {
    height: 340,
    width: '100%',
  },
  imb: {
    height: 200,
    width: '100%',
    tintColor:Color.orange,
    backgroundColor:Color.orange
  },
  im1: {
    height: 260,
    width: '70%',
    alignSelf: 'center',
    marginTop: 70,
  },
  V2: {
    flexDirection: 'row',

    justifyContent: 'center',
    marginTop: 60,
  },
  t3: {
    height: 18,
    width: 18,
  },
  tx1: {
    fontSize: 12,
    fontWeight: '500',
    color: 'white',
    alignSelf: 'center',
    marginLeft: 10,
  },
  tx2: {
    color: 'white',
    fontSize: 24,
    fontWeight: '500',
    marginTop: 10,
    alignSelf: 'center',
  },
  V6: {
    flexDirection: 'row',
    width: Dimensions.get('window').width - 150,
    marginTop: 10,
    alignSelf: 'center',

    height: 23,

    justifyContent: 'space-evenly',
  },
  V7: {
    height: '100%',
    width: 48,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 9,
    justifyContent: 'center',
  },
  V9: {
    flexDirection: 'row',
    alignSelf: 'center',
    width: '90%',
    marginTop: 20,
    justifyContent: 'space-evenly',
  },
  tx3: {
    fontSize: 10,
    color: 'gray',
    alignSelf: 'center',
  },
  tx4: {
    fontSize: 12,
    color: 'white',
    alignSelf: 'center',
    fontStyle: 'italic',
    fontWeight: '300',
    marginTop: 15,
  },
  V8: {
    flexDirection: 'row',
    marginLeft: 30,
    height: 25,
    width: '100%',
    marginTop: 12,
  },
  img2: {
    height: 18,
    width: 18,
    alignSelf: 'center',
    marginRight: 10,
  },
  tx5: {
    fontSize: 12,
    fontWeight: '400',
    color: 'white',
    alignSelf: 'center',
  },
  tx6: {
    fontSize: 12,
    fontWeight: '500',
    color: 'white',
    alignSelf: 'center',
    marginLeft: 30,
  },
  tx7: {
    width: Dimensions.get('window').width - 30,

    color: 'white',
    fontSize: 12,
    fontWeight: '300',
    alignSelf: 'center',
    marginTop: 15,
  },
  tx8: {
    width: 125,
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
    marginTop: 19,
    marginLeft: 10,
  },
  d1: {
    height: 75,
    width: 50,
    marginRight: 20,
  },
  V3: {
    height: 40,
    width: 130,
    backgroundColor: Color.orange,
    borderRadius: 20,
    alignSelf: 'center',
    marginTop: 40,
    justifyContent: 'center',
  },
  tx9: {
    fontSize: 12,
    fontWeight: '500',
    color: 'white',
    alignSelf: 'center',
  },
  backT: {
    height: 34,
    width: 34,
    margin: 10,
    backgroundColor:Color.orange,
    borderRadius:30,
    justifyContent:'center'
  },
  back:{
    height: 20,
    width: 20,
    alignSelf:'center'
    

  }
});
