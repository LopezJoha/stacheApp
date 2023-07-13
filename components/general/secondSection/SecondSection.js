import React from 'react';
import { ImageBackground, TouchableOpacity, Text, Image, View, StyleSheet, useWindowDimensions, Platform} from 'react-native';
import HeadingText from '../../../components/home/main/Heading';
import Lettering  from '../../../components/home/main/lettering';
import { COLORS, SIZES } from '../../../constants/';
import GeneralText from '../../../components/home/main/generalText';
import { LinearGradient } from 'expo-linear-gradient';
import why2 from '../../../assets/images/why2.png'

const title = " do you need a marketplace to sell your NFTs?"
const subtitle = 'Right now, selling NFTs without a marketplace or middleman is practically impossible. If crypto is about true ownership, why is something so simple so hard?'

const SecondSection = (props) => {

  const { height, width } = useWindowDimensions();  

  const styles = StyleSheet.create({
    container:{ 
      height: width > 900 || width < 360 || height < 500 ? height : height * 75/ 100,
      backgroundColor: COLORS.background3, 
       
    },
    containerText:{        
      paddingTop: width > 900 ? '2%': '10%',
      position:'absolute',          
      top: 0, 
      left: 0, 
      right: 0, 
      bottom: 0, 
      justifyContent: 'center', 
      alignItems: 'center',
      paddingTop:'10%'
      
    },
    title:{      
      width: width > 900 ? '70%': '90%',
      justifyContent: 'center', 
      alignItems: 'center' , 
    }, 
    subtitle:{
      justifyContent:'center', 
      alignItems: 'center',
      width: width < 900 ? '85%': '70%',
      flex:1, 
      paddingTop: width > 900 ? '3%':'5%',
           
    }, 
    imageBackground: {  
      opacity: 0.8,
      width:width, 
      height: width < 700  || height < 500 ? '70%' : '100%',
      marginTop: width < 900 ? '45%' : '5%'
    },
    overlayContainer: {   
      paddingTop: '100%',    
      //paddingTop:width < 450 ? '100%': width < 900 ? '80%': '80%',
      marginTop: width < 450 ? '15%' : width > 900 ? 10: 20, 
      
    },
    absoluteContainer: {
    ...StyleSheet.absoluteFillObject, 
     position: 'absolute',
    
    },
    gradient: {
     flex:1
    },
    grediant:{
    borderRadius: width > 600 ? 15: 10,
    backgroundColor: COLORS.background1
    }
   
  });
  
  return (    
    <View style={styles.container}> 
      <ImageBackground  source={why2} style={styles.imageBackground}>       
        <View style={styles.overlayContainer}>
            <View style={styles.absoluteContainer}>
              <LinearGradient
                colors={['rgba(28, 28, 28, 0.1)', 'rgba(28, 28, 28, 1)', 'rgba(21, 21, 21, 0.3)']}
                start={{x:0, y:0}}
                end={{x: 0, y: 1}}
                style={styles.gradient}                
                />
           </View>
        </View>        
      </ImageBackground>

      <View style={styles.containerText}>     
        <View style={styles.title}>
          <HeadingText 
            differentText = <Lettering textLettering=' Why ' bg={COLORS.background3}             
            paddingLeft={15} />                                              
            afterLettering  = {title} alignContent= {'center'} textAlign= {'center'}/>
        </View>

        <View style={styles.subtitle}>
          <GeneralText text={subtitle} lineHeight={25} textAlign={'center'}/>
        </View>         
      </View>           
        
    </View>
  );
}


export default SecondSection;

 
   