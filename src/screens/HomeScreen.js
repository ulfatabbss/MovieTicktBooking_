import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useRef} from 'react';
import Carousel from 'react-native-snap-carousel';
import {LogBox} from 'react-native';
import Color from '../utilities/color';
import heading from '../utilities/styles';
import CustomFlatList from '../components/CustomFlatList';
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();
const data1 = [
  {
    Img: require('../assets/homePageimg/img1.png'),
    txt: 'John Wick: Chapter 4',
    bg: require('../assets/homePageimg/Dbgi.png'),
    txt3: '2h 50m',

    txt4: '8.0 (1,024)',
    txt2: 'With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.',
  },
  {
    Img: require('../assets/homePageimg/img2.png'),
    txt: 'Shazam!',
    bg: require('../assets/homePageimg/Dbgi2.jpeg'),
    txt3: '2h 10m',
    txt4: '5.0 (1,024)',
    txt2: 'Shazam! is a 2019 superhero film based on the DC Comics character of the same name. Produced by New Line Cinema, DC Films, the Safran Company, and Seven Bucks Productions, and distributed by Warner Bros. Pictures, it is the seventh installment in the DC Extended Universe (DCEU).',
  },
  {
    Img: require('../assets/homePageimg/img3.png'),
    txt: 'Avengers',
    txt3: '2h 20m',
    txt4: '6.0 (1,024)',
    bg: require('../assets/homePageimg/Dbgi3.jpeg'),
    txt2: 'Earth mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.',
  },
  {
    Img: require('../assets/homePageimg/img4.png'),
    txt: 'Avengers 2',
    bg: require('../assets/homePageimg/Dbgi3.jpeg'),
    txt3: '2h 30m',
    txt4: '7.0 (1,024)',
    txt2: 'Earth mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.',
  },
  {
    Img: require('../assets/homePageimg/img5.png'),
    txt: 'Avengers 3',
    bg: require('../assets/homePageimg/Dbgi3.jpeg'),
    txt3: '2h 40m',
    txt4: '9.0 (1,024)',
    txt2: 'Earth mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.',
  },
  {
    Img: require('../assets/homePageimg/img6.png'),
    txt: 'Avengers 4',
    bg: require('../assets/homePageimg/Dbgi3.jpeg'),
    txt3: '2h 55m',
    txt4: '10.0 (1,024)',
    txt2: 'Earth mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.',
  },
];

const HomeScreen = ({navigation}) => {
  const crouselRef = useRef(null);
  const entries = [
    {
      img: require('../assets/homePageimg/img1.png'),
      tx1: 'John wick chapter 4',
    },
    {img: require('../assets/homePageimg/img1.png')},
    {img: require('../assets/homePageimg/img1.png')},
    {img: require('../assets/homePageimg/img1.png')},
    {img: require('../assets/homePageimg/img1.png')},
  ];
  const _renderItem = ({item, index}) => {
    return (
      <View style={styles.slide}>
        <Image
          style={styles.Simg}
          resizeMode="contain"
          source={item.img}></Image>
      </View>
    );
  };
 
 

  return (
    <SafeAreaView style={{backgroundColor: 'black', flex: 1}}>
      <View style={styles.V1}>
        <TextInput
          style={styles.ti1}
          placeholder="Search For Movies"
          placeholderTextColor={Color.gray}></TextInput>
        <Image
          style={styles.hpi1}
          resizeMode="contain"
          source={require('../assets/homePageimg/search.png')}></Image>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={[heading.h3]}>Now Playing</Text>
        <View style={styles.V2}>
          <Carousel
            ref={crouselRef}
            data={entries}
            layout={'default'}
            renderItem={_renderItem}
            layoutCardOffset={9}
            sliderWidth={Dimensions.get('window').width}
            itemWidth={Dimensions.get('window').width - 40}
          />
        </View>
        <View style={styles.V3}>
          <Image
            style={styles.img1}
            resizeMode="contain"
            source={require('../assets/homePageimg/star.png')}></Image>
          <Text style={[heading.h7, {alignSelf: 'center'}]}>8.0 (1,024)</Text>
        </View>
        <Text style={[heading.h2, {alignSelf: 'center'}]}>
          John Wick: Chapter 4
        </Text>
        <View style={styles.V4}>
          <View style={styles.V5}>
            <Text style={styles.t4}>Action</Text>
          </View>
          <View style={styles.V5}>
            <Text style={styles.t4}>Thriller</Text>
          </View>
          <View style={styles.V5}>
            <Text style={styles.t4}>Crime</Text>
          </View>
        </View>
        <Text style={heading.h3}>Popular</Text>
      <CustomFlatList
      data={data1} navigation={navigation}>

      </CustomFlatList>

        <Text style={heading.h3}>UP Coming</Text>
        <CustomFlatList
        data={data1} navigation={navigation}>

        </CustomFlatList>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  V1: {
    height: 52,
    width: Dimensions.get('window').width - 30,
    alignSelf: 'center',
    borderRadius: 20,
    borderColor: 'gray',
    borderWidth: 0.7,
    flexDirection: 'row',
    marginTop: 10,
  },
  ti1: {
    width: '80%',
    margin: 10,
    color: 'white',
  },
  hpi1: {
    height: 20,
    width: 20,
    alignSelf: 'center',
    tintColor:Color.orange,
  },

  t4: {
    fontSize: 10,
    color: 'gray',
    alignSelf: 'center',
  },
  t5: {
    fontSize: 14,
    fontWeight: '400',
    color: 'gray',
    alignSelf: 'center',
  },
  V2: {
    flexDirection: 'row',

    width: '100%',
  },
  slide: {
    width: Dimensions.get('window').width - 140,
    height: 380,
    alignSelf: 'center',
    borderRadius: 30,
  },
  Simg: {
    height: '100%',
    width: '100%',
  },
  V3: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 25,
    width: '100%',
    marginTop: 12,
  },
  V4: {
    flexDirection: 'row',
    width: Dimensions.get('window').width - 150,
    marginTop: 10,
    alignSelf: 'center',

    height: 23,

    justifyContent: 'space-evenly',
  },
  V5: {
    height: '100%',
    width: 48,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 9,
    justifyContent: 'center',
  },
  V6: {
    height: 200,
    width: 145,
  },
  img1: {
    height: 18,
    width: 18,
    alignSelf: 'center',
    marginRight: 10,
  },
  fimg: {
    height: '90%',
    width: '100%',
  },
});
