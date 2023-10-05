import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';


const AppHeader = ({heading, rightlable, onpress, onPress, source, textColor, backgroundColor, rightText}) => {
  return (
    <View style={[styles.mainHeaderContainer,{backgroundColor:backgroundColor} ]}>
      <View style={styles.leftContainer}>
        <TouchableOpacity onPress={onpress}>
          <Image style={styles.imageStyle} source={source} />
        </TouchableOpacity>
      </View>
      <View style={styles.headerContainer}>
      <Text style={[styles.headerText,{color:textColor}]}>{heading}</Text></View>
      <View style={styles.rightContainer}>
        <Text style={[styles.rightTextStyle,{color:rightText}]} onPress={onPress}>{rightlable}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainHeaderContainer: {
    justifyContent:'space-between',
    alignItems:'center',
    width: '100%',
    backgroundColor: 'red',
    height: 50,
    // paddingVertical: 20,
    flexDirection:'row'
  },
  headerText: {
    fontSize: 30,
    color:'black',
    // textColor: textColor ? textColor: 'green',
    textAlign: 'center',
    fontWeight:'600'
  },
  rightContainer: {
    // backgroundColor:'yellow',
    width: '13%',
    alignItems:'center',
    justifyContent:'center',
  },
  leftContainer: {
    width: '13%',
    // backgroundColor:'blue',
    resizeMode:'contain',
    alignItems:'center',
    justifyContent:'center',
  },
  headerContainer:{
    alignItems:'center',
    justifyContent:'center',
    widths:'74%'
  },
  rightTextStyle:{
    color:'green',
    fontSize:16,
  },
  imageStyle:{
    height:20,
    width:20,
    resizeMode:'contain'
  },


});

export {AppHeader};
