import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';
import React, {useEffect} from 'react';
import {AppInput} from '../../../components';
import firestore from '@react-native-firebase/firestore';
import {firebase} from '@react-native-firebase/app';
import database from '@react-native-firebase/database';
import Icon from 'react-native-vector-icons/Ionicons';
import {appIcons} from '../../../assets';

const data = [
  {
    id: 1,
    heading: 'heading',
    content:
      "He'll want to use your yacht, and I don't want this thing smelling like fish.",
    image: appIcons.personIcon,
  },
  {
    id: 2,
    heading: 'heading',
    content:
      "He'll want to use your yacht, and I don't want this thing smelling like fish.",
    image: appIcons.personIcon,
  },
  {
    id: 3,
    heading: 'heading',
    content:
      "He'll want to use your yacht, and I don't want this thing smelling like fish.",
    image: appIcons.personIcon,
  },
  {
    id: 4,
    heading: 'heading',
    content:
      "He'll want to use your yacht, and I don't want this thing smelling like fish.",
    image: appIcons.personIcon,
  },
  {
    id: 5,
    heading: 'heading',
    content:
      "He'll want to use your yacht, and I don't want this thing smelling like fish.",
    image: appIcons.personIcon,
  },
  {
    id: 6,
    heading: 'heading',
    content:
      "He'll want to use your yacht, and I don't want this thing smelling like fish.",
    image: appIcons.personIcon,
  },
  {
    id: 7,
    heading: 'heading',
    content:
      "He'll want to use your yacht, and I don't want this thing smelling like fish.",
    image: appIcons.personIcon,
  },
  {
    id: 8,
    heading: 'heading',
    content:
      "He'll want to use your yacht, and I don't want this thing smelling like fish.",
    image: appIcons.personIcon,
  },
  {
    id: 9,
    heading: 'heading',
    content:
      "He'll want to use your yacht, and I don't want this thing smelling like fish.",
    image: appIcons.personIcon,
  },
  {
    id: 10,
    heading: 'heading',
    content:
      "He'll want to use your yacht, and I don't want this thing smelling like fish.",
    image: appIcons.personIcon,
  },
];

const Conversation = ({navigation}) => {
  return (
    <View style={styles.mainContainer1}>
      <View style={styles.mainContainer2}>
        <View style={styles.headerContainer}>
          <View style={{width: '15%'}}></View>
          <View style={{width: '70%'}}>
            <Text style={styles.headerText}>Chats</Text>
          </View>
          <View style={{width: '15%'}}>
            <Text style={styles.touchableText}>Filter</Text>
          </View>
        </View>
        <AppInput placeholder={'Search'} />
        <FlatList
          contentContainerStyle={{
            flexGrow: 1,
            marginTop: 10,
            marginBottom: '40%',
          }}
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={({item, index}) => (
            <TouchableOpacity
              style={[
                styles.contentBox,
                {
                  marginBottom: item.id === data.length ? '8%' : '2%',
                },
              ]}
              onPress={() => {}}>
              <Image
                style={styles.imageStyle}
                source={item.image}
                resizeMode={'contain'}
              />
              <View style={{width: '85%'}}>
                <Text style={styles.secondHeaderText}>{item.heading}</Text>
                <Text style={[styles.plainText, {textAlign: 'justify'}]}>
                  {item.content}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
        <TouchableOpacity onPress={()=>{navigation.navigate('Contacts')}} style={styles.addChat}>
          <Icon name="chatbubbles-outline" size={50} color="green" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Conversation;

const styles = StyleSheet.create({
  mainContainer1: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainContainer2: {
    flex: 1,
    marginHorizontal: 12,
    backgroundColor: '#fff',
  },

  headerText: {
    fontWeight: '600',
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  flatlistContainer: {
    flexGrow: 1,
  },
  contentContainer: {
    flexDirection: 'row',
  },
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  plainText: {
    color: 'black',
    fontSize: 16,
  },
  secondHeaderText: {
    color: 'black',
    fontSize: 19,
    fontWeight: '600',
  },
  imageStyle: {
    height: 50,
    width: 50,
  },
  contentBox: {
    flexDirection: 'row',
    width: '100%',
  },
  touchableText: {
    color: '#5DB075',
    // textAlignVertical: 'center',
    fontSize: 18,
  },
  addChat: {
    backgroundColor: 'white',
    borderColor: 'green',
    borderWidth: 5,
    borderRadius: 90,
    width: '20%',
    height: '9%',
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
