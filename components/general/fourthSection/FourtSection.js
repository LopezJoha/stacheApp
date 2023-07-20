import { View, Text, TouchableOpacity, ImageBackground, StyleSheet, useWindowDimensions } from 'react-native'; 
import { COLORS, SIZES } from '../../../constants';
import Heading from '../../home/main/Heading';
import FaqList from './FaqList';
import imgBg from '../../../assets/images/linesFaq.png'

const FourthSection =()=>{
    const { height, width } = useWindowDimensions();  

    const styles = StyleSheet.create({
        container:{ 
            flex:1,  
            backgroundColor: COLORS.background3, 
            flexDirection: 'column',        
            justifyContent: 'center',
            alignItems: 'center',        
            
        },
        imgContainer:{
            position: 'absolute',      
            right  :  width > 900? -300 : -50,
            bottom: width > 900? 0: -60,
            width: width > 900? '60%':'100%',
            height: width > 900? '100%': '90%',
            resizeMode: 'center',           
            zIndex: -1,          
        }, 
        textContainer:{
            paddingTop:'20%'
        },
        listContainer:{
    
        }       
    })
    
    return(
        <View style={styles.container}>   
            <View style={styles.textContainer}>
                <Heading textAlign='center' beforeLettering = "Frequently Asked Question"/>
            </View>
             <ImageBackground source={imgBg} style={styles.imgContainer}> 
            
            </ImageBackground>
                <View style={styles.listContainer}>
                    <FaqList/>
                </View>    
        </View>
    );
}


export default FourthSection;