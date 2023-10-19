import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import DisplayScreen from '../DisplayScreen';

export default function MainApp() {
  return (
    <SafeAreaView style={styles.SafeAreaView} >
      <View style={styles.outerView} >
        <Text style={styles.text}>RTK Tasbeeh</Text>
        <DisplayScreen />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({

  outerView: {
    flex: 1,
    backgroundColor: '#808000',
    paddingTop: 240
  },
  text: {
    textAlign: 'center',
    fontFamily: "Times New Roman",
    fontSize: 30,
    fontWeight: 'bold',
    fontStyle: 'normal',
    marginVertical: 30,
    textDecorationLine: 'underline'
  },
  SafeAreaView:{
    flex:1
  }


});
