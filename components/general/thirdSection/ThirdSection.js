import React, { useState} from 'react';
import { ImageBackground, TouchableOpacity, Text, Image, View, TextInput, StyleSheet, useWindowDimensions} from 'react-native';
import { SIZES, COLORS } from '../../../constants';
import HeadingText from '../../../components/home/main/Heading';
import GeneralText from '../../../components/home/main/generalText';
import GradientText from '../../../components/home/main/GradientText';
import CardsList from './CardsList';
const subtitle = "Stache is a smart account that acts like an agent on your behalf. Being programmable and \n on-chain means your Stache can do things that your wallet can't. Directly selling your NFTs \n is just the beginning..."
import { LinearGradient } from 'expo-linear-gradient';


const miniButtons = [1, 2, 3, 4];

const ThirdSection = () => {
  const { height, width } = useWindowDimensions();     
  const [active, setActive] = useState(1);  
       
    function handlePressCard(id){
      setActive(id);        
    }

    const styles = StyleSheet.create({    
      container:{
        backgroundColor: COLORS.background1,
        alignContent: 'center', 
        justifyContent: 'center',
        //height: width < 900  || height < 500 ? height *2 : height, 
        height: height*2, 
        width: width
                  
      },
      containerText:{
        maxWidth: '65%',
        alignSelf:'center',
       gap:'12%', 
       paddingBottom:'5%', 
        
      }, 
      cardListContainer:{
        paddingHorizontal:'2.5%', 
        
        
      },
      buttons:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin:40
      },
      innerButtons:{
        width:'12%',
        flexDirection: 'row',
        paddingHorizontal:'1%',
        marginBottom:'5%',
        height: 20    
      },
      general:{
        minHeight: 10, 
        minWidth: 10,
        borderRadius:30,        
      }
      
    });
  
    return (   
        <View style={styles.container}>        
          {/* <View style={styles.containerText}>
              <HeadingText align='center'
                           size = {SIZES.xxLarge}                        
                           beforeLettering = "Enter"  
                           differentText = <GradientText textGradient=" Stache "/>
                                                                
              />
              <GeneralText align='center'
                           text={subtitle} />
          </View>  */}
          <View style={styles.cardListContainer}>
            {<CardsList 
                  onPressCard={handlePressCard}                        
                  activeCardId={active}  
                
                /> }
          </View>
          {/* <View style={styles.buttons}>
              <View style={[styles.innerButtons]}>
                {miniButtons.map((index)=>(
                  <LinearGradient key={index}
                    colors={[active === index ? COLORS.primary : COLORS.buttonBorder,
                            active === index ? COLORS.secondary : COLORS.buttonBorder]}                  
                    style={[styles.general,
                    {flex: active === index ? 3 : .3, } 
                    ]}
                >
                  <TouchableOpacity key={index} style={{width:'100%', height:'100%', borderRadius:50}} onPress={()=>handlePressCard(index)}/>
                </LinearGradient>  
                ))}   
            </View>
        </View> */}
      </View>
    );
}



export default ThirdSection;

