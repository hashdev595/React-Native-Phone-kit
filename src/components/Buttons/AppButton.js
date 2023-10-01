import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

const AppButton = ({onpress, name}) => {
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity onPress={onpress} style={styles.buttonStyle}>
        <Text style={styles.buttonText}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export {AppButton};

const styles = StyleSheet.create({
  mainContainer: {marginTop: 180},
  buttonStyle: {
    marginVertical: 18,
    width: '100%',
    backgroundColor: '#5DB075',
    alignSelf: 'center',
    height: 51,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
});
