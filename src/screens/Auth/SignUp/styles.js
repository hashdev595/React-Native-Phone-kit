import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer1: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  mainContainer2:{
    marginHorizontal:12
  },
  headerContainer: {
    flexDirection:'row',
    height: 40,
    marginVertical: 6,
    // backgroundColor:'yellow'
  },
  headerText: {
    fontWeight:'600',
    fontSize:30,
    color:'black',
    textAlign:'center',
    textAlignVertical:'center'
    
  },
  touchableText: {
    color: '#5DB075',
    textAlign:'center',
    fontSize:20,
    
    
  },
  regularText:{
    fontSize:16,
    textAlign:'center',
  }
});

export {styles};
