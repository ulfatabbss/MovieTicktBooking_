import { StyleSheet, Text, View,ImageBackground,TouchableOpacity,Image, Dimensions, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
const data=[
  {
    seat:require('../assets/homePageimg/seat.png')
  },
  {
    seat:require('../assets/homePageimg/seat.png')
  },
  {
    seat:require('../assets/homePageimg/seat.png')
  },
  {
    seat:require('../assets/homePageimg/seat.png')
  },
  {
    seat:require('../assets/homePageimg/seat.png')
  },
  {
    seat:require('../assets/homePageimg/seat.png')
  },
  {
    seat:require('../assets/homePageimg/seat.png')
  },
  {
    seat:require('../assets/homePageimg/seat.png')
  },
  {
    seat:require('../assets/homePageimg/seat.png')
  },
  {
    seat:require('../assets/homePageimg/seat.png')
  },
  {
    seat:require('../assets/homePageimg/seat.png')
  },
  {
    seat:require('../assets/homePageimg/seat.png')
  },
  {
    seat:require('../assets/homePageimg/seat.png')
  },
  {
    seat:require('../assets/homePageimg/seat.png')
  },
  {
    seat:require('../assets/homePageimg/seat.png')
  },
  {
    seat:require('../assets/homePageimg/seat.png')
  },  {
    seat:require('../assets/homePageimg/seat.png')
  },
  {
    seat:require('../assets/homePageimg/seat.png')
  },
  {
    seat:require('../assets/homePageimg/seat.png')
  },
  {
    seat:require('../assets/homePageimg/seat.png')
  },
  {
    seat:require('../assets/homePageimg/seat.png')
  },
  {
    seat:require('../assets/homePageimg/seat.png')
  },
  {
    seat:require('../assets/homePageimg/seat.png')
  },
  {
    seat:require('../assets/homePageimg/seat.png')
  },  {
    seat:require('../assets/homePageimg/seat.png')
  },
  {
    seat:require('../assets/homePageimg/seat.png')
  },
  {
    seat:require('../assets/homePageimg/seat.png')
  },
  {
    seat:require('../assets/homePageimg/seat.png')
  },
  {
    seat:require('../assets/homePageimg/seat.png')
  },
  {
    seat:require('../assets/homePageimg/seat.png')
  },
  {
    seat:require('../assets/homePageimg/seat.png')
  },
  {
    seat:require('../assets/homePageimg/seat.png')
  },  {
    seat:require('../assets/homePageimg/seat.png')
  },
  {
    seat:require('../assets/homePageimg/seat.png')
  },
  {
    seat:require('../assets/homePageimg/seat.png')
  },
  {
    seat:require('../assets/homePageimg/seat.png')
  },
  {
    seat:require('../assets/homePageimg/seat.png')
  },
  {
    seat:require('../assets/homePageimg/seat.png')
  },
  {
    seat:require('../assets/homePageimg/seat.png')
  },
  {
    seat:require('../assets/homePageimg/seat.png')
  },
  {
    seat:require('../assets/homePageimg/seat.png')
  },
  {
    seat:require('../assets/homePageimg/seat.png')
  },
  {
    seat:require('../assets/homePageimg/seat.png')
  },
  {
    seat:require('../assets/homePageimg/seat.png')
  },
  {
    seat:require('../assets/homePageimg/seat.png')
  },
  {
    seat:require('../assets/homePageimg/seat.png')
  },
  {
    seat:require('../assets/homePageimg/seat.png')
  },
  {
    seat:require('../assets/homePageimg/seat.png')
  },
  {
    seat:require('../assets/homePageimg/seat.png')
  },
  {
    seat:require('../assets/homePageimg/seat.png')
  },
  {
    seat:require('../assets/homePageimg/seat.png')
  },
  {
    seat:require('../assets/homePageimg/seat.png')
  },
  {
    seat:require('../assets/homePageimg/seat.png')
  },
  {
    seat:require('../assets/homePageimg/seat.png')
  },
  {
    seat:require('../assets/homePageimg/seat.png')
  },
  {
    seat:require('../assets/homePageimg/seat.png')
  },
  {
    seat:require('../assets/homePageimg/seat.png')
  },
  {
    seat:require('../assets/homePageimg/seat.png')
  },
  {
    seat:require('../assets/homePageimg/seat.png')
  },
  {
    seat:require('../assets/homePageimg/seat.png')
  },
  {
    seat:require('../assets/homePageimg/seat.png')
  },
  {
    seat:require('../assets/homePageimg/seat.png')
  },
  {
    seat:require('../assets/homePageimg/seat.png')
  },
  {
    seat:require('../assets/homePageimg/seat.png')
  },
  {
    seat:require('../assets/homePageimg/seat.png')
  },
  {
    seat:require('../assets/homePageimg/seat.png')
  },
  {
    seat:require('../assets/homePageimg/seat.png')
  },
  {
    seat:require('../assets/homePageimg/seat.png')
  },
  {
    seat:require('../assets/homePageimg/seat.png')
  },
  {
    seat:require('../assets/homePageimg/seat.png')
  },
]
const Ddata=[
  {
    date:'18',
    day:'Mon',
  },
  {
    date:'19',
    day:'Tue',
  },
  {
    date:'20',
    day:'Wed',
  },
  {
    date:'21',
    day:'Thu',
  },
  {
    date:'22',
    day:'Fri',
  },
  {
    date:'23',
    day:'Sat',
  },
  {
    date:'24',
    day:'Sun',
  },
]
const timeData=[
  {
    time:'12:00'
  },
  {
    time:'13:00'
  },
  {
    time:'14:00'
  },
  {
    time:'15:00'
  },
  {
    time:'16:00'
  },
  {
    time:'17:00'
  },
  {
    time:'18:00'
  },
  {
    time:'19:00'
  },
]

const TicketBookingScreen = ({navigation,route}) => {
  const [color,setColor]=useState(false)
  const {data1}=route.params
  const dateView=({item})=>(
    <TouchableOpacity>
       <View
    style={{height:'95%',
    width:60,alignSelf:'center',borderRadius:30,justifyContent:'center',borderWidth:0.5,
    borderColor:'white',marginRight:7,}}>
      <Text
              style={styles.tx1}>
                {item.date}

              </Text>
              <Text
              style={styles.tx2}>
               {item.day}

              </Text>

    </View>

    </TouchableOpacity>
   
  )
  const timeView=({item})=>(
    
    <TouchableOpacity>
      <View
    style={{height:40,
    width:80,alignSelf:'center',borderRadius:30,justifyContent:'center',borderWidth:0.5,
    borderColor:'gray',marginRight:7,marginTop:10}}>
      <Text
              style={styles.tx3}>
                {item.time}

              </Text>

    </View>
      
    </TouchableOpacity>
  )
  const VST=({item})=>(
    <View
    style={{margin:4,height:20,width:30,}}>
      <Image
      style={{height:15,width:22,}}
      resizeMode='contain'
      source={item.seat}>

      </Image>

    </View>
  )
  return (
   <SafeAreaView
   style={{backgroundColor:'black',flex:1}}>
    <ScrollView
    showsVerticalScrollIndicator={false}>
    <View
      style={styles.V1}>
        
        <ImageBackground
        style={styles.imb}
        resizeMode='stretch'
        source={data1.bg}>
          <TouchableOpacity onPress={()=>navigation.goBack()}>
          <Image
          style={styles.back}
          resizeMode='contain'
          source={require('../assets/homePageimg/back.png')}>

          </Image>

          </TouchableOpacity>
          <Image
          style={styles.imgbc}
          resizeMode='cover'
          source={require('../assets/homePageimg/tbsb.png')}>

          </Image>
          </ImageBackground>
          </View>
          <View
          style={styles.V2}>
          <FlatList
          renderItem={VST} data={data} numColumns={10}>

          </FlatList>

          </View>
          
          <Image
          style={styles.stimg1}
          resizeMode='contain'
         
          source={require('../assets/homePageimg/stimg.png')}>

          </Image>
          
          <View
          style={styles.V3}>
            
            <FlatList
            renderItem={dateView}
            data={Ddata}
            horizontal showsHorizontalScrollIndicator={false}></FlatList>

          </View>
          <View
          style={styles.V3}>
            
            <FlatList
            renderItem={timeView}
            data={timeData}
            horizontal showsHorizontalScrollIndicator={false}></FlatList>

          </View>
          <View
          style={styles.V6}>
            <View>
              <Text
              style={styles.tx4}>
                Total Price
              </Text>
              <Text
              style={styles.tx5}>
                $ 15.00
              </Text>
              
            </View>
            <TouchableOpacity>
            <View
            style={styles.V7}>
              <Text
              style={styles.tx6}>
                Buy Tickets

              </Text>

            </View>

            </TouchableOpacity>
            

          </View>

    </ScrollView>
    



         
         
          

   </SafeAreaView>
  )
}

export default TicketBookingScreen

const styles = StyleSheet.create({
  imb:{
    height:200,
    width:'100%',
   

  },
  V1:{
    height:200,
    width:'100%',
    

  },
  V2:{
    justifyContent:'center',
    alignSelf:'center',
    height:230,
    marginTop:15,
    width:Dimensions.get('window').width-40
  },
  back:{
    height:34,
    width:34,
    margin:10,
  },
  imgbc:{
    height:70,
    width:'100%',
    alignSelf:'flex-end',
    marginTop:76,
  },
  stimg1:{
    height:40,
    width:280,
    alignSelf:'center',
   
  },
  V3:{
    height:80,
    width:'90%',
    flexDirection:'row',
   
    alignSelf:'center',
    marginTop:10,


   
  },
  V4:{
    height:'95%',
    width:60,alignSelf:'center',borderRadius:30,justifyContent:'center',borderWidth:0.5,
    borderColor:'white',marginRight:7,
  },
  tx1:{
    fontSize:24,
    fontWeight:'500',
    color:'white',
    alignSelf:'center'
  },
  tx2:{
    fontSize:12,
    fontWeight:'500',
    color:'white',
    alignSelf:'center'

  },
  V5:{
    height:'95%',
    width:60,alignSelf:'center',borderRadius:30,justifyContent:'center',borderWidth:0.5,
    borderColor:'white',marginRight:7,backgroundColor:'background:rgba(255, 85, 36, 1)',
  },
  tx3:{
    fontSize:16,
    fontWeight:'500',
    color:'gray',
    alignSelf:'center'
  },
  V6:{
    flexDirection:'row',
    width:'90%',
    alignSelf:'center',
    height:50,
    justifyContent:'space-evenly'
  },
  V7:{
    height:'100%',
    width:140,
    borderRadius:20,
    backgroundColor:'rgba(255, 85, 36, 1)',
    justifyContent:'center'
  },
  tx4:{
    fontSize:14,
    fontWeight:'400',
    color:'rgba(115, 115, 115, 1)',alignSelf:'center'
  },
  tx5:{
    fontSize:24,
    color:'white',
    fontWeight:'500',

  },
  tx6:{
    fontSize:18,
    color:'white',
    fontWeight:'600',
    alignSelf:"center"
  }
})