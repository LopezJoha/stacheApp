import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, Platform,  useWindowDimensions } from 'react-native';
// import * as Font from 'expo-font';
import { COLORS, SIZES } from '../../../constants';


const floatTetxt = 'Help \n us build \n the future!';

const FixedElements=()=>{    
  const { height, width, scale, fontScale } = useWindowDimensions();  
  
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = ()=> {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };  

  return (
    <View style={styles.container}>     
        {/* {Platform.OS === 'web' ? ( */}
        {width > 900 ? (
        <View style={styles.buttonContainer}>    
            <TouchableOpacity
                style={[
                styles.fixedElement,
                isHovered ? styles.buttonHovered : null,
                ]}
                onPress={()=> console.log('Button pressed')}
                onMouseOver={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                >
                <ImageBackground source={ isHovered ? require('../../../assets/images/disYell.png') :require('../../../assets/images//disBlack.png')}
                    style={[styles.imageBackground]}
                    imageStyle={styles.imageStyle}
                    resizeMode="stretch">
                <View style={{paddingLeft:40, marginVertical:10, marginHorizontal:10}}>
                <Text style={styles.buttonText}>{floatTetxt}</Text>
                <TouchableOpacity style={styles.discordContainer}>
                    <Image source={require('../../../assets/images//discord2.png')}
                            style={styles.image}></Image>
                    <Text style={styles.buttonText1}>Join Discord</Text>
                </TouchableOpacity>
                </View>
            </ImageBackground>                    
            </TouchableOpacity>
        </View>   
        ) : <TouchableOpacity style={styles.containerImg2}>
                <Image source={require('../../../assets/images/discord2.png')}
                style={styles.image2}>
                </Image>
            </TouchableOpacity>
        }
    </View>
  );
}

export default FixedElements;

const styles = StyleSheet.create({
  fixedElement:{
    ...Platform.select({
      web: {        
        position: 'fixed',
        bottom: 40,
        right: 30,
        zIndex:100,       
      },       
    })    
  }, 
  imageBackground:{      
      flexDirection:'column',
      alignContent:'flex-end', 
      justifyContent:'flex-end',
     
    ...Platform.select({
      web: {        
       
      },       
    })
  }, 
  imageStyle:{
            
    ...Platform.select({
      web: {        
       
      },
    })
  }, 
  image:{
    height:12, 
    width:18, 
    alignSelf:'center'
  },
  buttonText:{    
    fontSize: 18, 
    fontWeight:400,
    color: 'white',
    height:'100%',    
    alignSelf: 'flex-end',
    textAlign:'right',
    height:'100%',
    paddingTop: 60, 
    paddingLeft: 0,
    //fontFamily:'SatochiRegular',

    ...Platform.select({
      web:{
        fontFamily:'SatoshiRegular',
      },
    })
  },
  discordContainer:{
      display:'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignContent: 'center',
      backgroundColor: COLORS.background1,
      borderColor: COLORS.text1,
      borderWidth: 1,
      borderRadius: 15,
      alignItems: "center",
      paddingVertical:'10%',
      paddingHorizontal:'5%',
      gap:5,
      width:120,      
    ...Platform.select({      
      web:{        
       
      },
    })
  },
  buttonText1:{     
    fontSize: 12, 
    color: COLORS.primary,      
    alignSelf: 'center',
    textAlign:'right',     
    ...Platform.select({
      web: {        
        fontFamily:'SatoshiRegular',         
      },
    })
  },
  containerImg2:{
    position: 'absolute',    
    right: 20,
    bottom: 20,
    zIndex:10,   
    borderColor: COLORS.text1, 
    backgroundColor:COLORS.background1,
    borderWidth:1, 
    borderRadius:100,
    padding:'2.5%', 
    justifyContent:'center', 
    alignContent:'center', 
    height:50, 
    width:50, 
    ...Platform.select({
      web: {        
        position:'fixed',    
      },
    })
  },
  image2:{
    height:25, 
    width:35,
    alignSelf:'center'
  }    
  
});

