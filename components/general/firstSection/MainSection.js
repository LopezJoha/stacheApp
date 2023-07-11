import React, {useState} from 'react';
import { ImageBackground, TouchableOpacity, Text, Image, View, StyleSheet, Platform, Dimensions, useWindowDimensions } from 'react-native';
import Heading from '../../home/main/Heading';
import StyledButton from '../../home/main/StyledButton';
import GeneralText from '../../home/main/generalText';
import GradientText from '../../home/main/GradientText';
import { COLORS, SIZES } from "../../../constants";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const MainSection = (props) => {  
  const { height, width } = useWindowDimensions();  
  
  const [isHovered, setIsHovered] = useState(false);
  
  const handleMouseEnter = ()=> {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };  
  const styles = StyleSheet.create({  
    mainContainer: {    
      flex:1,
      backgroundColor: COLORS.background1, 
      flexDirection: 'column',  
      marginTop :  width > 900 ? '3%' : 0      
    },
    wrapper:{
      flexDirection: width > 900 ? 'row': 'column',       
    },
    bgImage:{
      position:'absolute', 
      bottom:width > 900 ? -60 : -300,
      left:0, 
      right:0,
      width: width, 
      height:height, 
      zIndex:-1,
      
    },
    container1:{     
      height: width > 900 || height < 520 || width < 350 ? height : height/2,       
      width: width > 900 ? width/2 : '100%',
      flexDirection:'column',
      justifyContent:'space-around', 
      alignContent: width > 600 ? 'flex-start' :'center',
      paddingHorizontal: width > 900 ?  0: '5%',
      paddingLeft: '2.5%',      
      gap:  width > 900 ? 10: 5,     

    },  
    title:{
      flex:width > 900 ? 1.5 : width < 500 ? 2 : 3,    
      paddingTop: width > 900 ? '15%': 0,
      justifyContent:'center', 
      alignContent:width > 600 ? 'flex-start' :'center', 
    },
    subtitle:{
      flex: width > 900 ? 1 : width < 500 ? 2 : 2, 
      paddingTop: width > 900 ?'5%' : 0, 
      justifyContent:'center', 
      alignContent:'center',
      width: width > 900 ? '117%' : '100%',
      textAlign: width > 900 ? 'left': 'center',
    },
    launchButton:{ 
      display: width < 221 ? 'none' : 'flex',      
      justifyContent : 'center', 
      alignContent:width > 600 ? 'flex-start' : 'center' ,
      paddingBottom: width > 900 ?  '10%': 0,
    },
    button2:{
      height:50, 
      borderWidth:1, 
      borderColor:COLORS.text1,
      backgroundColor:COLORS.cardBackground,
      borderRadius:10, 
      paddingHorizontal:width > 240 ? '30%': '5%',
      justifyContent:'center', 
       alignContent:'center'
    }, 
    text2:{ 
    color:COLORS.text1, 
    fontSize: SIZES.small,
    alignSelf: 'center'
    },
    container2:{     
      height: width > 900 || height < 600 ?  height : height/2,
      width: width > 900 ? width/2 : '100%',               
    },
    mainImage:{     
    
    }, 
    calltheAction:{
      width:'100%',
      paddingTop: 40,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      // alignItems:'center',
      alignContent: 'center',
      gap:5
    }, 
    faqContainer:{   
      flex: 1,
      // alignItems: 'center',
      alignContent:'center',
      justifyContent: 'center',       
    },
    containerFAQ: {    
        
      // alignItems: 'center',
      alignContent:'center',
      justifyContent: 'center',
      alignContent: 'space-around',
      borderWidth: 2, 
      borderColor: 'transparent', 
      padding:50
    },
    buttonContainer: {
      position: 'absolute',
      alignSelf: 'center',
      flexDirection: 'row',
      borderWidth: 0.5, 
      borderColor: COLORS.buttonBorder, 
      backgroundColor: COLORS.background1, 
      borderRadius:25, 
     
    },
    button: {
      width: 110,
      height: 45,    
      backgroundColor: isHovered ? COLORS.buttonBorder:  COLORS.buttonBackground,
      // alignItems: 'center',
      alignContent:'center',
      justifyContent: 'center',
      borderRadius:25,     
      margin:1,
    },
    textFAQ:{
      color: isHovered ?  COLORS.text1 : COLORS.buttonText,
      //fontFamily: 'SatoshiRegular',
      fontSize: SIZES.small +1, 
      fontWeight: '700', 
      alignSelf:'center'
    }  
  });

  return (    
    <View style={styles.mainContainer}>
      <View style={styles.wrapper}>
        <View style={styles.container1}>
          <View style={styles.title}>
            <Heading  beforeLettering = "Build Your"  
                      differentText = <GradientText textGradient= " NFT Empire: "/> 
                      afterLettering  = "Create, Customize, and Curate"   
                      textAlign = {width > 900? 'flex-start' : 'center'}                      
            />
          </View> 
          <View style={styles.subtitle}>
            <GeneralText text= 'Experience the first-ever platform that hands you the reins to your personal NFT shop. Say goodbye to marketplace fees and restrictions. Curate your unique collection and connect directly with buyers for a more social trading experience.'
              textAlign = {width > 800? 'flex-start' : 'center'}     
              lineHeight={27}
            /> 
          </View>

          <View style={styles.launchButton} > 
              {width > 600 ? (<StyledButton buttonText = 'Launch Stache'/>):
              (<TouchableOpacity style={styles.button2}>
                    <Text style={styles.text2}>Launch Stache</Text>
                </TouchableOpacity>
              )}
          </View>           
        </View> 

        <ImageBackground source={require('../../../assets/images/intro.png')} resizeMode="contain"
          style={styles.container2} >       
        </ImageBackground> 

      </View>

      <View style={styles.containerFAQ}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} >
            <Text style={styles.textFAQ}>FAQ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}  >
            <Text style={styles.textFAQ}>Join Discord</Text>
          </TouchableOpacity>
        </View>
      </View> 

      <ImageBackground source={require('../../../assets/images/introBg.png')} resizeMode="center"
        style={styles.bgImage}>          
      </ImageBackground>

    </View>  
  
  ); 

}

export default MainSection;


              
              
