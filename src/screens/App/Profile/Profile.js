import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {AppHeader} from '../../../components';
import {appIcons, appImages} from '../../../assets';

const Profile = () => {
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
  ];

  const [button, setButton] = useState('post');

  return (
    <View style={styles.mainContainer1}>
      <AppHeader
        backgroundColor={'green'}
        heading={'Profile'}
        textColor={'white'}
        rightText={'white'}
        rightlable={'logout'}
      />
      <View style={{height: '32%', backgroundColor: 'green'}}>
        <Image
          style={{
            height: 120,
            width: 120,
            borderRadius: 60,
            alignSelf: 'center',
            position: 'absolute',
            bottom: -40,
            borderWidth: 2,
            borderColor: 'white',
            resizeMode:'contain'
          }}
          source={appImages.profile}
        />
      </View>
      <Text style={[styles.headerText, {marginTop: 40}]}>Hashim Ali</Text>
      <Text style={[styles.boldText, {marginBottom: 5}]}>
        a mantra goes here
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => {
            setButton('post');
          }}
          style={{
            display: button ? 'flex' : 'none',
            // flexDirection:'row',
            width: '48%',
            backgroundColor: button === 'post' ? '#fff' : null,
            height: '95%',
            borderRadius: 15,
            alignItems: 'center',
            justifyContent: 'center',
            // marginRight:"50%"
          }}>
          <Text style={styles.boldText}>Posts</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setButton('photo');
          }}
          style={{
            display: button ? 'flex' : 'none',
            // flexDirection:'row',
            width: '48%',
            backgroundColor: button === 'photo' ? '#fff' : null,
            height: '95%',
            borderRadius: 15,
            alignItems: 'center',
            justifyContent: 'center',
            // marginRight:"50%"
          }}>
          <Text style={styles.boldText}>Posts</Text>
        </TouchableOpacity>
      </View>
      {button === 'post' ? (
        <View style={styles.flatlistContainer}>
          <FlatList
          showsVerticalScrollIndicator={false}
            data={data}
            renderItem={({item}) => (
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
            )}
          />
        </View>
      ) : (
        <View style={{
          height:'36%',
          backgroundColor:'#f6f6f6',
          marginTop:10,
          marginHorizontal:12,
          borderRadius:8,
          // width:'100%',
          alignItems:'center',
          justifyContent:'space-between',
          alignSelf:'center'
        }}>
            <FlatList showsVerticalScrollIndicator={false} key={3} horizontal={false} numColumns={3} data={data} renderItem={({item})=> (
             
               <Image style={{height:100, width:100, backgroundColor:'green', margin:3, borderRadius:8 }} source={item.image}/>
      )} />
        </View>



      )}
    </View>
  );
};

export default Profile;
