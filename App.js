import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PageOne from './PageOne';
import PageTwo from './PageTwo';
 

export default function App() {
  return (
   
   <PageOne/>
  //  <PageTwo/>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:'center',
  
    justifyContent: 'space-around',
  },



},

);
