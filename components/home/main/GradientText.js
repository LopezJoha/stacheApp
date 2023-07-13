import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, useWindowDimensions } from 'react-native';
import { COLORS, SIZES } from '../../../constants';

const GradientText=(props)=>{
    const { height, width } = useWindowDimensions();    
    const styles = StyleSheet.create({
        styledText:{
            fontSize:width > 900 ? SIZES.xxxLarge : width > 600 ? SIZES.xxLarge : width < 400 ? SIZES.interMed : SIZES.large,
            color: COLORS.primary,            
        }
    });
    return(       
        <Text style={[styles.styledText]}>
           {props.textGradient} 
        </Text>
    );
}



export default GradientText;

