import { View, Text, TouchableOpacity, Image, StyleSheet, useWindowDimensions } from 'react-native'; 
import { COLORS, SIZES } from '../../../constants';
import { LinearGradient } from 'expo-linear-gradient';

const CardFaq =(props)=>{

    const { height, width } = useWindowDimensions(); 

    const styles = StyleSheet.create({
        container:{
            height:  width > 700 ? 400 : 300, 
            width : width > 900 ? '30%' : width < 900 && width > 550 ? '95%' : '80%',
            flexDirection:'column', 
            alignContent:'space-around', 
            justifyContent:'center', 
            backgroundColor: COLORS.cardBackground,        
            borderWidth:1, 
            borderColor: COLORS.buttonBorder, 
            borderRadius: 15,              
            margin:'1.5%', 
            paddingHorizontal:'1%'

        }, 
        imageContainer:{
            width:'100%', 
            alignContent:"center",
            justifyContent: 'center',
            padding: '5%', 
            borderWidth: 2, 
            borderColor: 'red', 
            paddingTop: '13%'
        },
        image:{
            height:  width > 500 ? 70 : 50, 
            width: width > 500 ? 70 : 50, 
            alignSelf:'center',             
        },
        absoluteContainer: {
            position: 'absolute',
            height:  130, 
            width: 130,           
            left: '50%', 
            transform:[{translateX:('-50%')}],
            opacity:0.05, 
            flex:1,            
            borderRadius: '50%', 
            zIndex:-1, 
           
        },
        gredient:{
            flex:1,
            borderRadius: '50%',
            shadowColor: COLORS.text1, 
            shadowRadius: 30,
        },
        textContainer:{
            width: '100%',
            padding: '5%', 
            
            
        },
        title:{
            fontSize: width > 600 ? SIZES.interMed : SIZES.medium, 
            color: COLORS.text1, 
            textAlign:'center',
            width:'90%', 
            alignSelf:'center', 
            paddingVertical:'2.5%'
        },
        subtitle:{
            fontSize: width > 600 ? SIZES.xMedium : SIZES.small, 
            color: COLORS.lightWhite, 
            textAlign:'center',
            alignSelf:'center', 
            justifyContent:'center',
            alignItems:'center', 
        },
        containerButton:{
            justifyContent:'center',
            alignItems:'center',  
            padding:'5%'         
        }
    })
    

    const getImage = () =>{
        switch(props.id){
          case 1: return <Image source={require('../../../assets/images/cartphone.png')} style={styles.image}/>
          case 2: return <Image source={require('../../../assets/images/calendar.png')}  style={styles.image}/>
          case 3: return <Image source={require('../../../assets/images/compu.png')} style={styles.image}/>
        }
      }

    return(
        <TouchableOpacity style={styles.container} key={props.id}>
            <View style={styles.imageContainer}>
                {getImage()}
                <View style={styles.absoluteContainer}>
                  <LinearGradient                   
                    colors = {[COLORS.text1, COLORS.text1]}
                    start={{x:0, y:0}}
                    end={{x: 0, y: 1}}
                    style={styles.gredient}/>                   
                </View>                 
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

export default CardFaq;