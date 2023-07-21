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
            marginTop:'15%'       
            
        },
        imgContainer:{
            ...StyleSheet.absoluteFillObject,
            borderWidth:2, 
            borderColor:'red',            
            // position: 'absolute',  
            // right:-300,    
            // bottom: -60,
            // top:15, 
            // width: width > 900? '70%':'100%',
            // height: width > 900? '103%': '90%',
            // resizeMode: 'cover',           
            zIndex: -1,   
                   

        }, 
        img:{
        height: '100%', 
        width:'50%', 
        borderWidth:2, 
        borderColor:'blue',
        },
        textContainer:{
           
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
                <ImageBackground source={imgBg} style={styles.img}/> 
            </View>
            <View style={styles.listContainer}>
                <FaqList/>
            </View>    
        </View>
    );
}


export default FourthSection;