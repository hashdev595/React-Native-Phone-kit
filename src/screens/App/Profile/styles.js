import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    mainContainer1: {
        flex: 1,
        backgroundColor: '#fff',

        // paddingHorizontal:12,
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
     
      contentContainer: {
        flexDirection: 'row',
      },
      headerContainer :{
        backgroundColor:'green',
        // alignItems:'center',
        // flexDirection:'row',
        justifyContent:'center',
        height:'30%',
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
    
      contentContainer: {
        flexDirection: 'row',
      },
      touchableText: {
        color: '#5DB075',
        // textAlignVertical: 'center',
        fontSize:18,
      },
      imageStyle:{
        height:70,
        width:70,
        resizeMode:'contain'
      },
      boldText:{
        fontSize:16,
        fontWeight:"600",
        color:'black',
        textAlign:'center'
      },
      imageContainer:{
        width:100,
        height:80,
        borderRadius:10,
        backgroundColor:'red',
      },
      buttonContainer:{
        justifyContent:'space-between',
        flexDirection:'row',
        borderWidth:0.5,
        borderColor:'grey',
        width:'80%',
        borderRadius:15,
        backgroundColor:'#f6f6f6',
        height:50,
        alignSelf:'center',
        // justifyContent:'center',
        alignItems:'center'
        

      },
      flatlistContainer: {
        flexGrow: 1,
        paddingHorizontal:12,
        height:'40%',
        marginTop:10
       
      },
      secondHeaderText: {
        color: 'black',
        fontSize: 19,
        fontWeight: '600',
      },
      contentBox:{
        flexDirection:'row',
        width:'100%',
      
      }
})
export {styles}