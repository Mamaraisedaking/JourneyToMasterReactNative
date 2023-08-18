import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

 

const PageTwo= (props) =>  {
  return (
   
    <View style={styles.container}>
     
    <Text style={styles.two}>  hey </Text>

    <Text style={styles.one}>  hey </Text>
    <Text style={styles.three}>  hey </Text>

    
    <StatusBar style="auto" />
  </View>
   
  );
}
export default PageTwo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:'center',
  
    justifyContent: 'space-around',
  },
one:{
  backgroundColor: 'yellow',
  fontSize:24,
  alignSelf:'center',
 

},
two:{
  backgroundColor: 'blue',
  fontSize:24,
  color: 'white',
  alignSelf:'center',
 
},three:{
  backgroundColor: 'red',
  fontSize:24,
  color: 'white',
  alignSelf:'center',


},

});
