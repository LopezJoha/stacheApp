import React, { useState }from 'react';
import { TouchableOpacity, Text, StyleSheet, useWindowDimensions, Platform } from 'react-native';
import { COLORS, SIZES } from '../../../constants';

const StyledButton = (props) => {
  const { height, width } = useWindowDimensions(); 

  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = ()=> {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };  

  
  const styles = StyleSheet.create({
    btnContainer: {  
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignContent: 'center',
      borderColor: COLORS.text1,
      borderWidth: 1,
      borderStyle :'solid',
      borderRadius: width > 600 ? 15: 10,
      paddingHorizontal: width > 600 ? 15: 10, 
      paddingVertical: width > 600 ? 13 : 11,   
      width: 130
      },
    btnImg: {
      alignSelf: 'center'   
    },
    btnText: {   
      fontSize: SIZES.small,         
      alignSelf:'center'           
    },    
  });

  return (
    <TouchableOpacity style={[styles.btnContainer, 
                      isHovered ? ({backgroundColor: COLORS.text1}) : 
                                  ({backgroundColor: COLORS.buttonBackground})]}    
                onMouseOver={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onPress={()=>{ props.onPress()}}>
        {props.image}
       <Text style={[styles.btnText, 
                      isHovered ? ({color: COLORS.buttonBackground}) : 
                                  ({color:COLORS.text1})
       ]}>{props.buttonText}</Text>
        
    </TouchableOpacity>
  )
}

export default StyledButton;

