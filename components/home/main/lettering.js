import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, useWindowDimensions, Platform} from 'react-native';
import { COLORS, SIZES } from '../../../constants';
import { LinearGradient } from 'expo-linear-gradient';


const Lettering=(props)=>{

  const { height, width } = useWindowDimensions();    
  
  const styles = StyleSheet.create({
    
    grediant:{     
      borderRadius: width > 600 ? 15: 10, 
      alignContent:'center'
    },
    containerLinear:{                       
      margin:1,    
      borderRadius: width > 600 ? 15: 10,
      
    },
    styledText: {        
      fontSize: width > 900 ? SIZES.xxxLarge : width > 600 ? SIZES.xxLarge : SIZES.xLarge,
      color: COLORS.primary     
            
    }
  });

  return(
    <View style={{paddingLeft: props.paddingLeft}}>  
      <LinearGradient
          colors={[COLORS.primary, COLORS.secondary]}
          style={[styles.grediant]}
      ><View
          style={[styles.containerLinear, 
          { backgroundColor:props.bg, 
            paddingVertical:props.padH, 
            alignContent: props.alignContent
            }]}>
          <Text style={[styles.styledText, 
          {padding:props.padding, 
          textAlign:props.textAlign,
          lineHeight:props.lineHeight
          }]}>{props.textLettering}</Text>    

        </View>
      </LinearGradient>
      </View>
  );
}

export default Lettering;