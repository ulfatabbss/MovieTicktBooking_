import { Dimensions, FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useRef } from 'react'
import Carousel from 'react-native-snap-carousel';
const data=[
  {
    Img:require('../assets/homePageimg/img1.png'),
    txt:'John Wick: Chapter 4',
    bg:require('../assets/homePageimg/Dbgi.png'),
    txt3:'2h 50m',
    txt4:'8.0 (1,024)',
    txt2:'With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.'

  },
  {
    Img:require('../assets/homePageimg/img2.png'),
    txt:'Shazam!',
    bg:require('../assets/homePageimg/Dbgi2.jpeg'),
    txt3:'2h 10m',
    txt4:'5.0 (1,024)',
    txt2:'Shazam! is a 2019 superhero film based on the DC Comics character of the same name. Produced by New Line Cinema, DC Films, the Safran Company, and Seven Bucks Productions, and distributed by Warner Bros. Pictures, it is the seventh installment in the DC Extended Universe (DCEU).'
  },
  {
    Img:require('../assets/homePageimg/img3.png'),
    txt:'Avengers',
    txt3:'2h 20m',
    txt4:'6.0 (1,024)',
    bg:require('../assets/homePageimg/Dbgi3.jpeg'),
    txt2:'Earth mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.'
  },
  {
    Img:require('../assets/homePageimg/img4.png'),
    txt:'Avengers 2',
    bg:require('../assets/homePageimg/Dbgi3.jpeg'),
    txt3:'2h 30m',
    txt4:'7.0 (1,024)',
    txt2:'Earth mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.'

  },
  {
    Img:require('../assets/homePageimg/img5.png'),
    txt:'Avengers 3',
    bg:require('../assets/homePageimg/Dbgi3.jpeg'),
    txt3:'2h 40m',
    txt4:'9.0 (1,024)',
    txt2:'Earth mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.'

  },
  {
    Img:require('../assets/homePageimg/img6.png'),
    txt:'Avengers 4',
    bg:require('../assets/homePageimg/Dbgi3.jpeg'),
    txt3:'2h 55m',
    txt4:'10.0 (1,024)',
    txt2:'Earth mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.'

  },
]


const HomeScreen = ({navigation}) => {
  const crouselRef=useRef(null)
 const entries=[
  {img:require('../assets/homePageimg/img1.png')},
  {img:require('../assets/homePageimg/img1.png')},
  {img:require('../assets/homePageimg/img1.png')},
  {img:require('../assets/homePageimg/img1.png')},
  {img:require('../assets/homePageimg/img1.png')},

 ]
 const  _renderItem = ({item, index}) => {
    return (
        <View style={styles.slide}>
            <Image
            style={styles.Simg}
            resizeMode='contain'
            source={item.img}>

            </Image>
        </View>
    );
  }
  const VFL=({item})=>(
    <View
    style={styles.V6}>
      <TouchableOpacity onPress={()=>navigation.navigate('MovieDetailsScreen',{Imag:item})} >
      <Image
      style={styles.fimg}
      resizeMode='contain'
      source={item.Img}>

      </Image>

      </TouchableOpacity>
      
      <Text
        style={styles.t5}>
          {item.txt}
        </Text>

    </View>
  )

  return (
    <SafeAreaView
    style={{backgroundColor:'black',flex:1}}>
      <View
      style={styles.V1}>
        <TextInput
        style={styles.ti1} placeholder='Search For Movies'placeholderTextColor={'gray'}>

        </TextInput>
        <Image
        style={styles.hpi1} resizeMode='contain' source={require('../assets/homePageimg/search.png')}>

        </Image>
        
        

      </View>
      <ScrollView
      showsVerticalScrollIndicator={false}>
      <Text
      style={styles.t1}>
        Now Playing

      </Text>
      <View
      style={styles.V2}>
      

      <Carousel
      ref={crouselRef}
              data={entries}
              layout={'default'}
              renderItem={_renderItem}
              layoutCardOffset={9}
              sliderWidth={Dimensions.get('window').width}
              itemWidth={Dimensions.get('window').width-40}
            />
      </View>
      <View
      style={styles.V3}>
        <Image
        style={styles.img1}
        resizeMode='contain'
        source={require('../assets/homePageimg/star.png')}>

        </Image>
        <Text
        style={styles.t2}>
        8.0 (1,024)
        </Text>

      </View>
      <Text
      style={styles.t3}>
        John Wick: Chapter 4

      </Text>
      <View
      style={styles.V4}>
        <View
        style={styles.V5}>
          <Text
          style={styles.t4}>
            Action

          </Text>

        </View>
        <View
        style={styles.V5}>
          <Text
          style={styles.t4}>
            Thriller

          </Text>

        </View>
        <View
        style={styles.V5}>
          <Text
          style={styles.t4}>
            Crime

          </Text>

        </View>
      </View>
      <Text
      style={styles.t1}>
        Popular

      </Text>
      <FlatList
      renderItem={VFL} data={data} horizontal showsHorizontalScrollIndicator={false}>

      </FlatList>
      
      <Text
      style={styles.t1}>
        Up Coming

      </Text>
      <FlatList
      renderItem={VFL} data={data} horizontal showsHorizontalScrollIndicator={false}>

      </FlatList>

      


      </ScrollView>
     
     
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  V1:{
    height:52,
    width:Dimensions.get('window').width-30,
    alignSelf:'center',
    borderRadius:20,
    borderColor:'gray',
    borderWidth:0.7,
    flexDirection:'row',
    marginTop:10,


  },
  ti1:{
    width:'80%',
    margin:10,
    color:'white'



  },
  hpi1:{
    height:20,
    width:20,
    alignSelf:'center'
    
  },t1:{
    
    width:125,
    color:'white',
    fontSize:20,
    fontWeight:'500',
    margin:12

  },
  t2:{
    fontSize:12,
    fontWeight:'400',
    color:'white',
    alignSelf:'center'


  },
  t3:{
    color:'white',
    fontSize:22,
    fontWeight:'500',marginTop:10,alignSelf:'center'
  },
  t4:{
    fontSize:10,
    color:'gray',alignSelf:'center'
  },
  t5:{
    fontSize:14,
    fontWeight:'400',
    color:'gray',
    alignSelf:'center'
  },
  V2:{
    flexDirection:'row',
   
    width:'100%',
  },slide:{
    width:Dimensions.get('window').width-140,height:380,alignSelf:'center',borderRadius:30
  },
  Simg:{
    height:'100%',
    width:'100%'
  },
  V3:{
    flexDirection:'row',
    justifyContent: 'center',
    height:25,
    width:'100%',
    marginTop:12

  },
  V4:{
    flexDirection:'row',
    width:Dimensions.get('window').width-150,
    marginTop:10,
    alignSelf:'center',
    
    height:23,
 
    justifyContent:'space-evenly'
  },
  V5:{
    height:'100%',
    width:48,
    borderWidth:1,
    borderColor:'gray',
    borderRadius:9,
    justifyContent:'center'
   

  },
  V6:{
    height:200,
    width:145,
    
  },
  img1:{
    height:18,
    width:18,
    alignSelf:'center',
    marginRight:10
  },
  fimg:{
    height:'90%',
    width:'100%',
  }
})