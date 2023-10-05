import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {AppInput} from '../../../components';

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

const Feeds = () => {
  return (
    <View style={styles.mainContainer1}>
      <View style={styles.mainContainer2}>
        <View style={styles.headerContainer}>
          <View style={{width: '15%'}}></View>
          <View style={{width: '70%'}}>
            <Text style={styles.headerText}>Feeds</Text>
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
            // <ScrollView>
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
            // {/* </ScrollView> */}
          )}
        />
      </View>
    </View>
  );
};

export default Feeds;
