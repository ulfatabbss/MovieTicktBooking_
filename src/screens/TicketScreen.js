import { Dimensions, Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const TicketScreen = () => {
  return (
    <SafeAreaView
    style={{flex:1,backgroundColor:'black'}}>
      <Text
      style={styles.t1}>
        My Ticket

      </Text>
      <ScrollView
      showsVerticalScrollIndicator={false}>
      <View
      style={styles.V1}>
        <ImageBackground
        style={styles.ti1}
        resizeMode='stretch'
        source={require('../assets/homePageimg/t1.png')}>
           <Image
        style={styles.ti2}
        resizeMode='stretch'
        source={require('../assets/homePageimg/t2.png')}></Image>


        </ImageBackground>

      </View>
      <View
      style={styles.V2}>
        <View
        style={styles.V3}>
          <View>
            <Text
            style={styles.t2}>
              18
            </Text>
            <Text
            style={styles.t3}>
              Mon
            </Text>

          </View>
          <View>
            <Image
            style={styles.ti3}
            resizeMode='contain'
            source={require('../assets/homePageimg/t3.png')}>

            </Image>
            <Text
             style={styles.t3}>
              14:30
            </Text>

          </View>

        </View>
        <View
        style={styles.V4}>
          <View>
            <Text
            style={styles.t2}>
              Hall
            </Text>
            <Text
            style={styles.t3}>
              02
            </Text>

          </View>
          <View>
          <Text
            style={styles.t2}>
            Row
            </Text>
            <Text
            style={styles.t3}>
              04
            </Text>

          </View>
          <View>
          <Text
            style={styles.t2}>
              Seats
            </Text>
            <Text
            style={styles.t3}>
              23,24
            </Text>

          </View>

        </View>
        <Image
        style={styles.ti4}
        resizeMode='contain'
        source={require('../assets/homePageimg/t5.png')}>


        </Image>

      </View>

      </ScrollView>
      
      
     

    </SafeAreaView>
  )
}

export default TicketScreen

const styles = StyleSheet.create({
  t1:{
    fontSize:20,
    fontWeight:'500',
    color:'white',alignSelf:'center',
    marginTop:40,
  },
  V1:{
    height:400,
    width:Dimensions.get('window').width-130,
    alignSelf:'center',
    
    marginTop:12
  },
  ti1:{
    height:'100%',
    width:'100%'

  },
  ti2:{
    height:'50%',
    width:'100%',marginTop:200,
    
  },
  ti3:{
    height:24,
    width:24,
    marginBottom:5,
  },
  t2:{
    fontSize:24,
    fontWeight:'500',
    color:'white'
  },
  t3:{
    fontSize:10,
    fontWeight:'500',
    color:'white',
    alignSelf:'center'
  },
  V2:{
    height:200,
    width:Dimensions.get('window').width-130,
    alignSelf:'center',
    backgroundColor:'rgba(255, 85, 36, 1)',
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30,
    
  },
  V3:{
    flexDirection:'row',
    justifyContent:'space-around',
    
    width:'80%',
    
    alignSelf:'center',
    marginTop:10
  },
  V4:{
    flexDirection:'row',
    justifyContent:'space-between',
    
    width:'90%',
    
    alignSelf:'center',
    marginTop:10

  },ti4:{
    height:80,
    width:'70%',
    alignSelf:'center',
    marginTop:10

  }

  
})