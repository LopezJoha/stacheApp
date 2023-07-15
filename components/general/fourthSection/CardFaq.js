import { View, Text, TouchableOpacity, Image, StyleSheet, useWindowDimensions } from 'react-native'; 
import { COLORS, SIZES } from '../../../constants';
import { LinearGradient } from 'expo-linear-gradient';

const CardFaq =(props)=>{

    const { height, width } = useWindowDimensions(); 

    const styles = StyleSheet.create({
        container:{
            height:  width > 700 ? 400 : 300, 
             width : width > 700 ? '30%' : '95%',
            flexDirection:'column', 
            alignContent:'space-around', 
            justifyContent:'center', 
            backgroundColor: COLORS.cardBackground,        
            borderWidth:1, 
            borderColor: COLORS.buttonBorder, 
            //borderRadius: 15,              
            //paddingHorizontal:'2%'
        }, 
        imageContainer:{
             width:'100%', 
             height: '30%', 
            alignItems:"flex-start",
            justifyContent: 'center', 
           
        
        },
        image:{
            height:  width > 700 ? 70 : 60, 
            width: width > 700 ? 70 : 60, 
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
        absoluteContainer: {
            // ...StyleSheet.absoluteFillObject, 
            // opacity:0.9,
            //maxWidth: props.id === 3 ? '100%' : '98%', 
            //  height:'100%',
            //  width: '100%', 
           // marginBottom:'10%', 
          // marginTop:'10%', 
        },
        gredient:{
            // flex:1.5
          },
        textContainer:{
            height: '30%',
            paddingTop:'2.5%',
            //gap:10, 
            margin:5       
        },
        title:{
            fontSize: width > 900 ? SIZES.xxxLarge : width > 600 ? SIZES.xxLarge : width < 400 ? SIZES.interMed : SIZES.large, 
            color: COLORS.primary, 
            textAlign:'center',
            width:'90%', 
            alignSelf:'center', 
            paddingHorizontal:'1.5%'
        },
        subtitle:{
            fontSize: width > 600 ? SIZES.xxMedium : SIZES.xMedium, 
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
    

    const getImage = () => {
        switch(props.id){
          case 1: return <Image 
                            source={require('../../../assets/images/cart&phone.png')} 
                            style={styles.image}
                          />
          case 2: return <Image 
                            source={require('../../../assets/images/calendar.png')} 
                            style={styles.image}
                          />
          case 3: return <Image 
                            source={require('../../../assets/images/compu.png')} 
                            style={styles.image}
                          />
          
        }
      }
    return(
        <TouchableOpacity style={styles.container} key={props.id}>
            <View style={styles.imageContainer}>
                {getImage()}
                <View style={styles.absoluteContainer}>
                  <LinearGradient
                    colors={['rgba(27, 26, 26, 0.1)', 'rgba(27, 26, 26, 1)', 'rgba(27, 26, 26, 1)']}
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