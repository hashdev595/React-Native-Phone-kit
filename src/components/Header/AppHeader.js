import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {appIcons} from '../../assets';

const AppHeader = ({heading, rightlable, onpress, onPress, source}) => {
  return (
    <View style={styles.mainHeaderContainer}>
      <View style={styles.leftContainer}>
        <TouchableOpacity onPress={onpress}>
          <Image style={styles.imageStyle} source={source} />
        </TouchableOpacity>
      </View>
      <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{heading}</Text></View>
      <View style={styles.rightContainer}>
        <Text style={styles.rightTextStyle} onPress={onPress}>{rightlable}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainHeaderContainer: {
    width: '100%',
    // backgroundColor: 'red',
    height: 45,
    marginVertical: 20,
    flexDirection:'row'
  },
  headerText: {
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  },
  rightContainer: {
    // backgroundColor:'yellow',
    width: '10%',
    alignItems:'center',
    justifyContent:'center',
  },
  leftContainer: {
    width: '10%',
    // backgroundColor:'blue',
    resizeMode:'contain',
    alignItems:'center',
    justifyContent:'center',
  },
  headerContainer:{
    alignItems:'center',
    justifyContent:'center',
    width:'80%'
  },
  rightTextStyle:{
    color:'green',
    fontSize:16,
  },
  imageStyle:{
    height:20,
    width:20,
    resizeMode:'contain'
  }

});

export {AppHeader};
