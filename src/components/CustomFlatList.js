import { FlatList, Text, View,TouchableOpacity,Image } from 'react-native'
import React from 'react'


const CustomFlatList = ({navigation,data}) => {
    const MyView =({item})=>(
        <View style={{ height: 200,
            width: 145,}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('MovieDetailsScreen', {Imag: item})}>
          <Image
            style={{height: '90%',
            width: '100%',}}
            resizeMode="contain"
            source={item.Img}></Image>
        </TouchableOpacity>
  
        <Text style={{ fontSize: 14,
    fontWeight: '400',
    color: 'gray',
    alignSelf: 'center',}}>{item.txt}</Text>
      </View>
    )
  return (

    <FlatList
    renderItem={MyView}
    data={data} horizontal>
        
    </FlatList>
  )
}

export default CustomFlatList
