import { View, Text, TouchableOpacity, Image, ImageBackground, StyleSheet } from 'react-native'; 
import { COLORS, SIZES } from '../../../constants';


const CardFaq =(props)=>{
    return(
        <TouchableOpacity style={styles.container} key={props.id}>
            <View style={styles.imageContainer}>
                <ImageBackground source={props.src} style={styles.image}>
                    <View style={styles.imageStyle}></View>                    
                </ImageBackground>
            </View> 
            <View style={styles.textContainer}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.subtitle}>{props.subtitle}</Text>
            </View>

            <View style={styles.containerButton}>
                {props.button}
            </View>           
            
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        height:450, 
        flex:1,
        flexDirection:'column', 
        alignContent:'space-around', 
        justifyContent:'center', 
        backgroundColor: COLORS.cardBackground,        
        borderWidth:1, 
        borderColor: COLORS.buttonBorder, 
        borderRadius: 15,              
        paddingHorizontal:'2%'
    }, 
    imageContainer:{
        width:'100%', 
        height: '30%', 
        alignItems:"flex-start",
        justifyContent: 'center', 
        padding:'20%',
        shadowColor: 'red',
    
    },
    image:{
        height:75, 
        width:75, 
        alignSelf:'center', 
        alignContent:'center', 
        justifyContent:'center', 
    },
    imageStyle:{
        width:40, 
        height:40,
        borderRadius: 30,
        shadowColor:COLORS.primary, 
        shadowRadius: 75,
        elevation: 4, 
        alignSelf:'center'
   
    },
    textContainer:{
        height: '30%',
        paddingTop:'2.5%',
        gap:10,        
    },
    title:{
        fontSize: SIZES.middle, 
        color: COLORS.primary, 
        textAlign:'center',
        width:'90%', 
        alignSelf:'center', 
        paddingHorizontal:'1.5%'
    },
    subtitle:{
        fontSize: SIZES.xxMedium, 
        fontWeight:500,
        color: COLORS.lightWhite, 
        textAlign:'center',
        padding:'1.5%'
    },
    containerButton:{
        flex:0.5, 
        justifyContent:'center',
        alignItems:'center', 
        paddingTop:'10%',
        marginTop: '5%'
    }
})

export default CardFaq;