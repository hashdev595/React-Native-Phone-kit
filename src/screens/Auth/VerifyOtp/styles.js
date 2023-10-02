import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer1: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  mainContainer2:{
    flex:1,
    marginHorizontal:12
  },
  headerContainer: {
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
    fontSize:19
    
  },
  plainText: {
    marginBottom:10,
      color:'black',
      textAlign:'center',
      fontSize:16
  },
  otpContainer:{
    flexDirection:'row',
    height:100,
    width:'60%',
    alignItems:'center',
    justifyContent:'space-between',
    alignSelf:'center'
    // marginVertical:100,
  },
  boldText:{
    fontSize:20,
    fontWeight:'600',
    color:'black',
    textAlign:'center',
    marginTop:10
  },
  inputStyle:{
    height:60,
    width:40,
    borderRadius:20,
    backgroundColor:'#F6F6F6',
    borderWidth:0.5,
    borderColor:'grey'
  }
 
})
export {styles};
