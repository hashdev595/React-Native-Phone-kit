import {View, Text, FlatList, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {AppHeader, AppInput} from '../../../components';
import {appImages} from '../../../assets';

const Market = () => {
  const data = [
    {
      img: appImages.aroosanoir,
      name: 'Aroosanoir',
      price: '7000',
    },
    {
      img: appImages.exclusive,
      name: 'Exclusive',
      price: '6000',
    },
    {
      img: appImages.janan,
      name: 'Janan',
      price: '5000',
    },
    {
      img: appImages.jananSilver,
      name: 'Janan Silver',
      price: '4000',
    },
  ];

  return (
    <View style={styles.mainContainer1}>
      <AppHeader textColor={'black'} heading={'Market'} rightlable={'Filter'} />
      <AppInput placeholder={'Search'} />
      <View style={{height: '25%', width: '100%'}}>
        <Text style={styles.boldText}>Perfumes</Text>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={data}
          renderItem={({item}) => (
            <View
              style={{
                backgroundColor: '#f6f6f6',
                // backgroundColor:'red',
                alignItems: 'center',
                marginHorizontal: 10,
                width: 110,
                borderRadius: 10,
                borderColor: '#D3D3D3',
                borderWidth: 0.5,
              }}>
              <Image style={styles.imageStyle} source={item.img} />
              <Text>{item.name}</Text>
              <Text style={{fontWeight: '700'}}>{item.price}</Text>
            </View>
          )}
        />
      </View>
      <View style={{height: '25%', width: '100%'}}>
        <Text style={styles.boldText}>Tshirts</Text>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={data}
          renderItem={({item}) => (
            <View
              style={{
                backgroundColor: '#f6f6f6',
                // backgroundColor:'red',
                alignItems: 'center',
                marginHorizontal: 10,
                width: 110,
                borderRadius: 10,
                borderColor: '#D3D3D3',
                borderWidth: 0.5,
              }}>
              <Image style={styles.imageStyle} source={item.img} />
              <Text>{item.name}</Text>
              <Text style={{fontWeight: '700'}}>{item.price}</Text>
            </View>
          )}
        />
      </View>
      <View style={{height: '25%', width: '100%'}}>
        <Text style={styles.boldText}>Jackets</Text>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={data}
          renderItem={({item}) => (
            <View
              style={{
                backgroundColor: '#f6f6f6',
                // backgroundColor:'red',
                alignItems: 'center',
                marginHorizontal: 10,
                width: 110,
                borderRadius: 10,
                borderColor: '#D3D3D3',
                borderWidth: 0.5,
              }}>
              <Image style={styles.imageStyle} source={item.img} />
              <Text>{item.name}</Text>
              <Text style={{fontWeight: '700'}}>{item.price}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default Market;
