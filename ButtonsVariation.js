import React from 'react';
import { Button, View,StyleSheet } from 'react-native';
import {useDispatch} from 'react-redux';
import {increment,decrement} from './store/slice/counterSlice'

const ButtonsVariation = () => {

  const dispatch = useDispatch();

const incNumber=()=>{

  dispatch(increment());
}

const decNumber=()=>{

  dispatch(decrement());
}

  return (
    <View style={styles.outerView}>
      <View style={styles.innerView}>
        <Button title='➕' onPress={()=>incNumber()} />
      </View>
      <View style={styles.innerView}>
        <Button title='➖' onPress={()=>decNumber()} />
      </View>
    </View>
  );


}

export default ButtonsVariation;


const styles = StyleSheet.create({

  outerView: {
    flexDirection: 'row'

  },
  innerView:{
    marginTop:40,
    marginHorizontal:20,
    padding:5,
    backgroundColor: '#ADD8E6',
    borderRadius: 100
  },
  button:{
   
  }

});