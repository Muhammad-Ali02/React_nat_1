import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput, Text, View, Dimensions } from 'react-native';
import ButtonsVariation from './ButtonsVariation';
import { useSelector } from 'react-redux';

const { width, height } = Dimensions.get('screen');  //define it outside the main function

const DisplayScreen = () => {

  const counted = useSelector((state) => state.counter.value);

  // console.warn(res);



  return (
    <View style={styles.View}>
      {/* <TextInput  style={styles.text}  onChange={} /> */}
      <Text style={styles.text}>{counted}</Text>
      <ButtonsVariation />
    </View>
  )
}

export default DisplayScreen;



const styles = StyleSheet.create({

  text: {
    textAlign: 'center',
    backgroundColor: '#ADD8E6',
    paddingVertical: 15,
    width: width * 0.50,
    fontSize: 50
    // marginHorizontal:150
  },
  View: {
    alignItems: 'center',
  }

});