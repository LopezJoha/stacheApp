import React, { useState} from 'react';
import { ImageBackground, TouchableOpacity, Text, Image, View, TextInput, StyleSheet, useWindowDimensions} from 'react-native';
import { SIZES, COLORS } from '../../../constants';
import HeadingText from '../../../components/home/main/Heading';
import GeneralText from '../../../components/home/main/generalText';
import GradientText from '../../../components/home/main/GradientText';
import CardsList from './CardsList';
const subtitle = "Stache, similar to a smart contract wallet, is an on-chain account that acts like an agent on your behalf. Being programmable and on-chain means your Stache can do things that your wallet can't. Directly selling your NFTs is just the beginning..."
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
        bordertWidth:2, 
        borderColor:'purple'
                  
      },
      containerText:{
        width: width > 900 ? '50%': '90%',
      paddingVertical: width > 900 ? '5%':'10%', 
      justifyContent: 'center', 
      alignContent: 'center' ,
      alignSelf:'center'
        
      }, 
      title:{      
       // width: width > 900 ? '70%': '90%',
        justifyContent: 'center', 
        alignItems: 'center' , 
      }, 
      subtitle:{
        justifyContent:'center', 
        alignItems: 'center',
        //width: width < 900 ? '85%': '70%',
        flex:1, 
        paddingTop: width > 900 ? '3%':'5%',
             
      }, 
      cardListContainer:{
        //paddingHorizontal:'2.5%', 
        
        
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
      //   minHeight: 10, 
      //   minWidth: 10,
      //   borderRadius:30,        
       }
      
    });
  
    return (   
        <View style={styles.container}>        
          <View style={styles.containerText}>
            <View style={styles.title}>
                <HeadingText textAlign='center'                                               
                            beforeLettering = "Enter"  
                            differentText = <GradientText textGradient=" Stache "/> />
            </View>
            <View style={styles.subtitle}>
              <GeneralText textAlign='center' text={subtitle} />
            </View>
          </View> 

          <View style={styles.cardListContainer}>
            {<CardsList 
                  onPressCard={handlePressCard}                        
                  activeCardId={active}  
                
                /> }
          </View>
          <View style={styles.buttons}>
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
        </View> 
      </View>
    );
}



export default ThirdSection;

