import { useState } from 'react';
import { View, Text, Image, ScrollView, SafeAreaView, StyleSheet, ImageBackground, TouchableOpacity, Platform} from 'react-native';
import { COLORS, icons, images, SIZES } from '../../constants';
import ScreenHeaderIcon from './header/ScreenHeaderIcon';
import StyledButton from './main/StyledButton';
import MainSection from '../general/firstSection/MainSection';
/*import SecondSection from '../general/secondSection/SecondSection';
import ThirdSection from '../general/thirdSection/ThirdSection';
import FourthSection from '../general/fourthSection/FourtSection';
import FifthSection from '../general/fifthSection/FifthSection';
'*/
const floatTetxt = 'Help \n us build \n the future!';

const Home= ()=>{


    

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // const renderHeaderLeft = () => (
  //     <View style={{ paddingLeft: '25%', paddingTop: 70 }}>
  //         <ScreenHeaderIcon iconUrl={images.logo}/>
  //     </View>
  //   );
          
  // const renderHeaderRight = () => (
  //   <View style={{ paddingRight: '3%', paddingTop: '7%' }}>
  //     <StyledButton buttonText = 'Launch Stache'/>
  //   </View>
  // );   
      

    return(
    <SafeAreaView style={styles.container}>
      
       {/*<Stack.Screen
          options={{                
              headerStyle : {
                backgroundColor: COLORS.background1,
                height:100, 
                                          
                },
              headerShadowVisible: false, 
              headerLeft : renderHeaderLeft,
              headerRight: renderHeaderRight,
              headerTitle: "",                                        
          }}
        />*/}

      <View style={styles.screenContainer}>
        {/* <TouchableOpacity
                  style={[
                  styles.fixedElement,
                  isHovered ? styles.buttonHovered : null,
                  ]}
                  onPress={() => console.log('Button pressed')}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  >
                  <ImageBackground source={isHovered ? require('../../assets/images/disYell.png') : 
                                                       require('../../assets/images/disBlack.png')}
                                    style={[styles.imageBackground]}
                                    imageStyle={styles.imageStyle}
                  >
                  <Text style={styles.buttonText}>{floatTetxt}</Text>
                  <View style={{paddingLeft:65}}>
                    <StyledButton image={<Image source={require('../../assets/images/discord.png')}
                                            style={styles.image}></Image>} 
                                            buttonText='Join Discord'
                                            alignS='center'
                                            width ={100}
                                            padding={0}
                    />
                  </View>
                  </ImageBackground>
                  
              </TouchableOpacity> */}
              <MainSection/> 

            {/* <ScrollView showsHorizontalScrollIndicator={false}>         
              <MainSection/> 
              <SecondSection/>
              <ThirdSection/>
              <FourthSection/>  
              <FifthSection /> 
            </ScrollView> */}
            
        </View>
      
    </SafeAreaView>
        
    );
}

const styles = StyleSheet.create({  
  container:{
    flex: 1, 
    backgroundColor: COLORS.background1,
    ...Platform.select({
      web: {  
        backgroundColor: COLORS.background1,
        flex:1,
      },
    }),
    
  },
  screenContainer: {
    flex: 1,
    overflow: 'hidden',
    ...Platform.select({
      web: { 
        
        backgroundColor: COLORS.background1,
        flexDirection:'column'
      },
    }),
  },
  imageBackground:{
    flexDirection:'column',
    alignContent:'flex-end', 
    justifyContent:'flex-end',     
  },  
  imageStyle:{

  },
  buttonText: {
   // fontFamily:'SatoshiRegular',
    fontSize: 20, 
    color: 'white',
    height:'90%',    
    alignSelf: 'flex-end',
    textAlign:'right',
    //lineHeight:'150%',
    paddingTop: 60, 
    paddingLeft: 110,
   
  },
  fixedElement: {
    position: 'fixed',
    bottom: 50,
    right: 40,
    backgroundColor: 'transparent',   
    zIndex:10,    
  },  

  
});

export default Home;