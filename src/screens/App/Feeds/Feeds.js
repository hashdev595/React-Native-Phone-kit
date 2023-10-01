import {View, Text, FlatList, TouchableOpacity, Image, ScrollView} from 'react-native';
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
        <View style={styles.flatlistContainer}>
          <FlatList
            data={data}
            renderItem={({item}) => (
              <ScrollView>
                <TouchableOpacity style={styles.contentBox}>
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
              </ScrollView>
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default Feeds;
