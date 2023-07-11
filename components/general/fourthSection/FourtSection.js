import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native'; 
import { COLORS, SIZES } from '../../../constants';
import HeadingText from '../../home/main/HeadingText';
import FaqList from './FaqList';


const FourthSection =()=>{
    return(
        <View style={styles.container}>   
                   
            <View style={styles.textContainer}>
                <HeadingText align='center'
                            size = {SIZES.xxLarge}                        
                            beforeLettering = "Frequently Asked Question"/>
            </View>
            
            <View style={styles.listContainer}>
                <FaqList/>
            </View>
              
        </View>
    );
}

const styles = StyleSheet.create({
    container:{   
        flex:1,    
        backgroundColor: COLORS.background3, 
        flexDirection: 'column', 
        
        justifyContent: 'center',
        alignItems: 'center',        

    },
    textContainer:{
        paddingTop:'10%'
    },
   
})

export default FourthSection;