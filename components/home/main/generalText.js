import React from 'react';
import {  Text, View, StyleSheet, useWindowDimensions } from 'react-native';
import { COLORS, SIZES } from '../../../constants'


const  GeneralText = (props) => {
  const { height, width } = useWindowDimensions();

  const styles = StyleSheet.create({
    textContainer: {   
      flex:1    
    },    
    text: {
      color: COLORS.white,
      fontSize: width > 600 ? SIZES.xxMedium : SIZES.xMedium,  
      textAlign:'center'         
    },  
  });

  return (
    <View style= {[styles.textContainer]}>
        <Text style={[styles.text, {fontWeight: props.fWeight, textAlign:props.textAlign, lineHeight:props.lineHeight}]}>{props.text}</Text>
    </View> 
  );
}

export default GeneralText;






