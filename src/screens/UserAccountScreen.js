import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View,} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const UserAccountScreen = () => {
  return (
    <SafeAreaView
    style={{flex:1,backgroundColor:'black'}}>
      <Text
      style={styles.t1}>
        My Profile

      </Text>
     <Image
     style={styles.pimg}
     resizeMode='stretch'
     source={require('../assets/homePageimg/img1.png')}>


     </Image>
     <TouchableOpacity>
     <View
     style={styles.V1}>
      <View
       styles={styles.V2}>
       <View
       style={styles.V4}>
        <Image
        style={styles.p1}
        resizeMode='contain'
        source={require('../assets/homePageimg/p1.png')}></Image>
        <Text
        style={styles.t2}>
          Account

        </Text>

       </View>
       <Text
        style={styles.t3}>
          Edit Profile
        </Text>
        <Text
        style={styles.t3}>
          Change Password
        </Text>

      </View>
      <View
      styles={styles.V3}>
         <Image
         style={styles.pa}
         resizeMode='contain'
         source={require('../assets/homePageimg/pa.png')}>

         </Image>
        
        

      </View>

     </View>

     </TouchableOpacity>
     <TouchableOpacity>
     <View
     style={styles.V5}>
      <View
       styles={styles.V2}>
       <View
       style={styles.V4}>
        <Image
        style={styles.p1}
        resizeMode='contain'
        source={require('../assets/homePageimg/p2.png')}></Image>
        <Text
        style={styles.t2}>
          Settings

        </Text>

       </View>
       <Text
        style={styles.t3}>
         Themes
        </Text>
        <Text
        style={styles.t3}>
          Permissions
        </Text>

      </View>
      <View
      styles={styles.V3}>
         <Image
         style={styles.pa}
         resizeMode='contain'
         source={require('../assets/homePageimg/pa.png')}>

         </Image>
        
        

      </View>

     </View>

     </TouchableOpacity>
     <TouchableOpacity>
     <View
     style={styles.V5}>
      <View
       styles={styles.V2}>
       <View
       style={styles.V4}>
        <Image
        style={styles.p1}
        resizeMode='contain'
        source={require('../assets/homePageimg/p3.png')}></Image>
        <Text
        style={styles.t2}>
          Offers & Referrals

        </Text>

       </View>
       <Text
        style={styles.t3}>
         Offers
        </Text>
        <Text
        style={styles.t3}>
          Referrals
        </Text>

      </View>
      <View
      styles={styles.V3}>
         <Image
         style={styles.pa}
         resizeMode='contain'
         source={require('../assets/homePageimg/pa.png')}>

         </Image>
        
        

      </View>

     </View>

     </TouchableOpacity>
     <TouchableOpacity>
     <View
     style={styles.V5}>
      <View
       styles={styles.V2}>
       <View
       style={styles.V4}>
        <Image
        style={styles.p1}
        resizeMode='contain'
        source={require('../assets/homePageimg/p4.png')}></Image>
        <Text
        style={styles.t2}>
          About

        </Text>

       </View>
       <Text
        style={styles.t3}>
         About Movies
        </Text>
        <Text
        style={styles.t3}>
          More
        </Text>

      </View>
      <View
      styles={styles.V3}>
         <Image
         style={styles.pa}
         resizeMode='contain'
         source={require('../assets/homePageimg/pa.png')}>

         </Image>
        
        

      </View>

     </View>

     </TouchableOpacity>
    
     
    
    

    </SafeAreaView>
  )
}

export default UserAccountScreen

const styles = StyleSheet.create({
  t1:{
    fontSize:20,
    fontWeight:'500',
    color:'white',alignSelf:'center',
    marginTop:40,
  },
  pimg:{
    height:80,
    width:80,
    borderRadius:30,
    alignSelf:'center',
    marginTop:'10%',
  },
  V1:{
    flexDirection:'row',
    height:60,
    width:Dimensions.get('window').width-50,
    alignSelf:'center',
    
    
    marginTop:'20%',
    
    justifyContent:'space-between',
    alignItems:'center'
   

  },
  V2:{
    height:'100%',
    
    backgroundColor:'red'
    
    

  },
  V3:{
    height:'100%',
   
    backgroundColor:'red',
    
    
    

  },
  V4:{
    flexDirection:'row'
  },
  V5:{
    flexDirection:'row',
    height:60,
    width:Dimensions.get('window').width-50,
    alignSelf:'center',
    
    
    marginTop:'5%',
    
    justifyContent:'space-between',
    alignItems:'center'
  },
  p1:{
    height:18,
    width:18,
  },
  pa:{
    height:18,
    width:18,

  },
  t2:{
    fontSize:16,
    fontWeight:'500',
    color:'white',
    marginLeft:10,
  },t3:{
    fontSize:12,
    fontWeight:'500',
    color:'gray',
    marginLeft:28
  }
})