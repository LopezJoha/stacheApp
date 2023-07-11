import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions, Platform } from 'react-native';
import { COLORS, SIZES } from '../../../constants';


const Heading=(props)=>{
    const { height, width } = useWindowDimensions();
    
        
    const styles = StyleSheet.create({ 
        container:{
            justifyContent:'center', 
            alignItems:'center', 
            textAlignVertical:'center', 
           
        }, 
        title: {    
            fontSize: width > 900 ? SIZES.xxxLarge : width > 600 ? SIZES.xxLarge : width < 400 ? SIZES.interMed : SIZES.large,
            color: COLORS.text2,
            justifyContent: 'center', 
            alignItems: 'center', 
            textAlign:'center'
                                   
            }
        });

    return(
        <View style={styles.container}>
            <Text style= {[styles.title,
            {textAlign:props.textAlign, 
            width:props.width, 
            lineHeight:props.lineHeight,
            alignContent: props.alignContent
            }]}> 
                {props.beforeLettering}
                {props.differentText}
                {props.afterLettering}
            </Text> 
        </View>    
    );
}


export default Heading;


