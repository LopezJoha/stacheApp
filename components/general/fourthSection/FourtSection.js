import { View, Text, TouchableOpacity, Image, StyleSheet, useWindowDimensions } from 'react-native'; 
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
            alignContent: 'center',                  
            paddingBottom:'3%'
        },
        imgContainer:{
            ...StyleSheet.absoluteFillObject,
            zIndex: -1,    
            overflow:'hidden'          
        }, 
        img:{
            height:'110%',
            width:'35%',             
            alignSelf:'flex-end', 
            transform: width > 900 ? [{rotate: '45deg'}] : [{rotate: '0deg'}] ,
            
        }, 
        textContainer:{
            paddingTop:'7%', 
            paddingBottom: '3%'
        },
        listContainer:{
           
        }       
    })
    
    return(
        <View style={styles.container}>   
            <View style={styles.textContainer}>
                <Heading textAlign='center' beforeLettering = "Frequently Asked Question"/>
            </View>
            <View style={styles.imgContainer}>
                <Image source={imgBg} style={styles.img}/> 
            </View>
            <View style={styles.listContainer}>
                <FaqList/>
            </View>    
        </View>
    );
}


export default FourthSection;