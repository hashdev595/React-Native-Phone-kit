import {StyleSheet} from 'react-native';

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
  headerContainer :{
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'space-between'
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
    fontSize:18,
    
    
  },
});

export {styles};
