import { TouchableOpacity, View, Text, ImageBackground, StyleSheet, useWindowDimensions } from 'react-native';
import { COLORS, SIZES } from "../../../constants";
import { LinearGradient } from 'expo-linear-gradient';



const  Card = (props)=> {
  const { height, width } = useWindowDimensions();

const styles = StyleSheet.create({
  container:{
    width: width, 
    height: height
  },
  textNumber:{
   // fontFamily: 'SatoshiRegular',
    fontSize: width > 900 ? SIZES.xxxLarge : width > 600 ? SIZES.xxLarge : width < 400 ? SIZES.interMed : SIZES.large,
    color: COLORS.primary,
    position: 'absolute', 
    top:'7%',  
    zIndex:10     
  },     
  text:{
    //fontFamily: 'SatoshiRegular',
    fontSize: width > 600 ? SIZES.xxMedium : SIZES.xMedium, 
    color: 'white', 
    maxWidth:  width > 900 ? '70%': '90%',  
    textAlign: 'center',
    alignContent: 'center',
    justifyContent: 'center', 
    alignSelf:'center'
  },  
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundRepeat:'no-repeat',
    backgroundPosition: 'top',
    backgroundSize: 'cover',
    margin:20,        
  },
  absoluteContainer: {
    position: 'absolute',
    bottom:0,
    left: 0,
    right: 0,
    width:'100%', 
    height:'45%',
    marginBottom:'10%'    
  },
  gradient:{
    flex:1
  },
  gredient: {   
  //borderRadius:20,
  //flex:1
  },  

  textContainer:{
  ...StyleSheet.absoluteFillObject,
    width: '100%', 
    height:'50%',
    paddingTop: '50%',
    padding: 20,
    //gap:10
  },
  title:{
    fontFamily: 'SatoshiRegular',
    fontSize: SIZES.medium,
    fontWeight: 600,
    color: 'white', 
    textAlign:'center'
  }, 
  subtitle:{
    //fontFamily: 'SatoshiRegular',
    fontSize: SIZES.xxMedium,
    color: 'white',    
  },
  activeCard :  {
    //fontFamily: 'SatoshiRegular',
    backgroundColor: COLORS.cardBackground,
   // flex: 4,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',      
    borderRadius:20,
    //minHeight: 450 ,
    //padding:'2.5%',
    //margin: 2, 
    width: width > 900 ? 450 : '90%', 
    height: 200
  },
  inactiveCard : {
    backgroundColor: COLORS.cardBackground,
    //flex: 1,    
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',      
    borderRadius:20,
    //minHeight: 450,
    //padding:'2.5%',
    margin: 2, 
   width: width > 900 ? 450 : '100%', 
   height: 200
  },  
});

  return(     
    <View style={{flex:1, margin:5, borderWidth:2, borderColor:'violet'}}>
      <LinearGradient
        colors={[props.id === props.activeCard ? COLORS.primary : COLORS.buttonBorder,
        props.id === props.activeCard ? COLORS.secondary : COLORS.buttonBorder]}
        style={[styles.gredient, 
        {flex: props.id === props.activeCard ? 3 : 1}]}>

        <TouchableOpacity style={[props.id === props.activeCard ? styles.activeCard: styles.inactiveCard,]} 
                        onPress={props.onPress}>     
          {/* <Text style={[styles.textNumber,
                      {left: props.id === props.activeCard ? '5%': 0}
                     ]}>
                      {props.number}
          </Text>           */}
          {/* <Text style={[styles.text, 
                      {display: props.id === props.activeCard ? 'none': 'flex'}
                      ]}>
                      {props.text}
          </Text>          */}
        
          {/* <View style={[styles.overlay,
                        {backgroundImage: props.id === props.activeCard ? props.image : '', 
                        backgroundSize: props.id === 4 ?   '50%' : 'contain',
                        margin: props.id === 3 ? 0 : 20,
                        marginTop: props.id === 4 ? 70 : 20
                        }]}>          
          </View>  */}
                
          {/* <View style={styles.absoluteContainer}>
                <LinearGradient
                colors={['rgba(27, 26, 26, 0.1)', 'rgba(27, 26, 26, 1)', 'rgba(27, 26, 26, 1)']}
                  start={{x:0, y:0}}
                  end={{x: 0, y: 1}}
                  style={styles.gradient}
                />                   
          </View> */}

          {/* <View style={[styles.textContainer, 
                        {paddingTop : props.id === 4 ? '30%': '50%'}]}>      
            <Text style={[styles.title, 
                        {display: props.id === props.activeCard ? 'flex': 'none',
                        fontSize: props.id === 4 ? 21 : SIZES.medium,
                        fontWeight: props.id === 4 ? 100 : 600,
                        alignSelf: props.id === 4 ? 'center' : 'center',
                        maxWidth:  props.id === 4 ? '80%': '100%'
                        }]}>{props.title}                        
            </Text>
               
             {props.callAction}   
            

            <Text style={[styles.subtitle,
                     {display: props.id === props.activeCard ? 'flex': 'none',
                     fontSize: props.id === 4 ? 19 : SIZES.xxMedium,
                     alignSelf: props.id === 4 ? 'center' : 'flex-start'}
                      ]}>{props.subtitle}
            </Text>                  
          </View> */}
        </TouchableOpacity>  
      </LinearGradient>
    </View>
    
  );
}




export default Card;

