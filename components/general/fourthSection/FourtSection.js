import { View, Text, TouchableOpacity, ImageBackground, StyleSheet, useWindowDimensions } from 'react-native'; 
import { COLORS, SIZES } from '../../../constants';
// import Heading from '../../home/main/Heading';
// import FaqList from './FaqList';
import imgBg from '../../../assets/images/linesFaq.png'

const FourthSection =()=>{
    const { height, width } = useWindowDimensions();  

    const styles = StyleSheet.create({
        container:{   
            flex:1,  
            width: width,
            height: height,   
            backgroundColor: COLORS.background3, 
            flexDirection: 'column',        
            justifyContent: 'center',
            alignItems: 'center',        
    
        },
        imgContainer:{
            position: 'absolute',
            //   opacity: 0.8,
            right  : -50,
            bottom: -60,
          width:'100%',
          height: '90%',
          zIndex: -1,
          
        }, 
        textContainer:{
            paddingTop:'10%'
        },
        listContainer:{
    
        }       
    })
    
    return(
        <View style={styles.container}>   
             <ImageBackground source={imgBg} style={styles.imgContainer}>

                    
            {/* <View style={styles.textContainer}>
                <Heading textAlign='center'                                                 
                            beforeLettering = "Frequently Asked Question"/>
            </View> */}
            
            {/* <View style={styles.listContainer}>
                <FaqList/>
            </View> */}
            </ImageBackground>         
        </View>
    );
}


export default FourthSection;