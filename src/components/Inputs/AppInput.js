import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

import {appIcons} from '../../assets';

const AppInput = ({placeholder, lable, secureTextEntry}) => {
  const [show, setShow] = useState(false);

  return (
    <View>
      <Text
        style={[
          styles.lable,
          {
            marginTop: lable ? 18 : 0,
            marginBottom: 5,
            fontWeight: '500',
          },
        ]}>
        {lable}
      </Text>
      <View style={styles.secureInput}>
        <View style={{width: '90%'}}>
          <TextInput
          placeholderTextColor={'grey'}
            secureTextEntry={!show}
            style={styles.inputContainer}
            placeholder={placeholder}
          />
        </View>
        {secureTextEntry && (
          <View style={{width: '10%', justifyContent: 'center'}}>
            <TouchableOpacity
              onPress={() => {
                setShow(!show);
              }}>
              {show ? (
                <Image style={styles.imageStyle} source={appIcons.eye} />
              ) : (
                <Image style={styles.imageStyle} source={appIcons.eyeHide} />
              )}
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export {AppInput};

const styles = StyleSheet.create({
  inputContainer: {
    paddingLeft: 10,
    width: '100%',
    alignSelf: 'center',
  },
  lable: {
    color: 'black',
  },
  imageStyle: {
    marginRight: 30,
    height: 20,
    width: 20,
    resizeMode: 'center',
    alignSelf: 'center',
  },

  secureInput: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#F6F6F6',
    borderColor: '#B4B4B3',
    borderRadius: 8,
    borderWidth: 0.3,
  },
});
