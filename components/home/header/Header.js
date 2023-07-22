import React from 'react';
import { View, Image, StyleSheet, Platform, useWindowDimensions } from 'react-native';
import ScreenHeaderIcon from './ScreenHeaderIcon';
import  logo from '../../../assets/images/logo.png';
import logo2 from '../../../assets/images/logo2.png'
import StyledButton from '../main/StyledButton';
import {COLORS, SIZES} from '../../../constants'

const Header = (props) => {
  const { height, width, scale, fontScale } = useWindowDimensions();   
  
  function Link(){
    if(Platform.OS === "web"){
      window.open('https://app.stache.io/', '_blank')
    }
  } 

  const styles = StyleSheet.create({  
    container:{
      display: width < 310 ? 'none' : 'flex',
      height: width > 600 ? '10%' : 40,
      position: width > 900 ? 'fixed' :'absolute',
      left: 0,
      right: 0,
      top: 0,
      width: width,
      justifyContent:'space-between', 
      alignItems:'center', 
      flexDirection:'row',
      backgroundColor: 'transparent',
      paddingHorizontal:'2.5%',
      padding:  width > 900 ? 20: 0,
      marginTop:40,
      zIndex:100,  
    },
    logoImg:{
      height: width > 600 ? 50 : 30,
      width: width > 600? 150 : 110,                               
       
    }, 
    extraStyles:{
      height:10, 
      padding:'0.2%',      
    }
  });

  return (
    <View style={styles.container}>        
        <ScreenHeaderIcon iconImg={ logo } stylesImg={styles.logoImg}/>
        <StyledButton buttonText={'Launch Stache'}  extraStyles={styles.extraStyles} onPress={()=>Link()}/>        
    </View>
  );
}



export default Header;