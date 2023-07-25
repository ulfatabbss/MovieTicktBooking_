import { StyleSheet, Text, TextInput, View,Image,Dimensions, ScrollView, FlatList} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Color from '../utilities/color'
const data=[
  {
    Img:require('../assets/homePageimg/img1.png'),
    txt:'John Wick'
  },
  {
    Img:require('../assets/homePageimg/img2.png'),
    txt:'Shazam! '
  },
  {
    Img:require('../assets/homePageimg/img3.png'),
    txt:'Avengers'
  },
  {
    Img:require('../assets/homePageimg/img4.png'),
    txt:'Avengers 2'
  },
  {
    Img:require('../assets/homePageimg/img5.png'),
    txt:'Avengers 3'
  },
  {
    Img:require('../assets/homePageimg/img6.png'),
    txt:'Avengers 4'
  },
]

const SearchScreen = () => {
  const FLV=({item}) => (
    <View
    style={styles.FV}>
      <Image
      style={styles.fimg}
      resizeMode='contain'
      source={item.Img}>

      </Image>
      <Text
      style={styles.fti}>
        {item.txt}

      </Text>

    </View>
  )
  return (
   <SafeAreaView
   style={{flex:1,backgroundColor:'black'}}>
    <View
      style={styles.V1}>
        <TextInput
        style={styles.ti1} placeholder='Search For Movies'placeholderTextColor={'gray'}>

        </TextInput>
        <Image
        style={styles.hpi1} resizeMode='contain' source={require('../assets/homePageimg/search.png')}>

        </Image>
      </View>
      <View
      style={{alignSelf:'center'}}>
      <FlatList
        renderItem={FLV}
        data={data} numColumns={'2'} />

      </View>
       
  

   </SafeAreaView>
  )
}

export default SearchScreen

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
    marginBottom:15


  },
  ti1:{
    width:'80%',
    margin:10,
    color:'white'



  },
  hpi1:{
    height:20,
    width:20,
    alignSelf:'center',
    tintColor:Color.orange,
    
  },
  FV:{
    height:270,
   width:Dimensions.get('window').width/2-6,
   marginBottom:10,
   
   
  },
  fimg:{
    height:250,
    width:'100%',
    alignSelf:'center',
    borderRadius:20,
    
    
  },
  fti:{
    fontSize:16,
    fontWeight:'500',
    color:'white',
    alignSelf:'center'

  }
})