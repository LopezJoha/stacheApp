import { TouchableOpacity, View, Text, ImageBackground, Image, StyleSheet, useWindowDimensions } from 'react-native';
import { COLORS, SIZES } from "../../../constants";
import { LinearGradient } from 'expo-linear-gradient';



const  Card = (props)=> {
  const { height, width } = useWindowDimensions();

const styles = StyleSheet.create({
  container:{
    margin: width > 700? 10: 5,
        
  },
  textNumber:{
   // fontFamily: 'SatoshiRegular',
    fontSize: width > 600 ? SIZES.xxLarge : width < 400 ? SIZES.interMed : SIZES.large,
    color: COLORS.primary,
    position: 'absolute', 
    top: width > 700 || props.id === props.activeCard ? '7%': '25%',  
    left:  width > 700 &&  props.id === props.activeCard ? '30%' : '10%', 
      
  },  
  text1Container:{
    display: props.id === props.activeCard ? 'none': 'flex', 
    width: '80%', 
    alignContent: 'center',
    justifyContent: width > 900 ? 'center' : 'flex-start', 
    borderColor: 'red', 
    borderWidth: 2, 
  },   
  text:{
    //fontFamily: 'SatoshiRegular',
    fontSize: width > 700 ? SIZES.xxMedium : SIZES.xMedium, 
    color: 'white', 
    maxWidth:  width > 900 ? '70%': '95%',  
    textAlign:  width > 900 ?'center' : 'left',
    
    //alignSelf:'center', 
    borderColor: 'violet', 
    borderWidth: 2, 
    
  },  
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundRepeat:'no-repeat',
    backgroundPosition: 'top',
    backgroundSize: 'cover',
    margin:20, 
    width:'100%' , 
    height:'50%'      
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
  imgContainer:{
    width: '100%', 
    height:'60%',
  }, 
  image: { 
    display: props.id === props.activeCard ? 'flex' : 'none',
    height: "98%",
    width: "100%",
    resizeMode: width < 600 ?  'contain' : "cover"
  },
  gradient:{
    flex:1
  },
  gredient: {   
  borderRadius:20,
  flex:1, 
  },  
  textContainer:{
    width: '100%', 
    height:'40%',
   // paddingTop: '50%',
   // padding: 20,
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
  activeCard : {
    flex: 1,
    backgroundColor: COLORS.cardBackground,    
    flexDirection: 'column',  
    borderRadius:20,
    margin: 2,    
    minHeight:  width > 700 ? 400 : 400, 
    maxWidth : width > 700 ? 550 : '100%'
  },
  inactiveCard : {
    backgroundColor: COLORS.cardBackground,       
    flexDirection: 'column',     
    borderRadius:20,    
    margin: 2,    
    minHeight: width > 700 ?  400 : 100, 
    minWidth: width > 700 ? 150 : '95%'
  },  
});

  const getImage = () => {
    switch(props.id){
      case 1: return <Image 
                        source={require("../../../assets/images/ex-1.png")} 
                        style={styles.image}
                      />
      case 2: return <Image 
                        source={require("../../../assets/images/ex-2.png")} 
                        style={styles.image}
                      />
      case 3: return <Image 
                        source={require("../../../assets/images/ex-3.png")} 
                        style={styles.image}
                      />
      case 4: return <Image 
                        source={ width >  600 ? require("../../../assets/images/logoBig.png") :
                        require("../../../assets/images/logo.png")      } 
                        style={styles.image}
                      />
    }
  }

console.log("props image: ", props.image);

  return(     
    <View style={styles.container}>
      <LinearGradient
        colors={[props.id === props.activeCard ? COLORS.primary : COLORS.buttonBorder,
                props.id === props.activeCard ? COLORS.secondary : COLORS.buttonBorder]}
          style={[styles.gredient, 
          {flex: props.id === props.activeCard ? 4 : 1}
          ]}>

        <TouchableOpacity style={[props.id === props.activeCard ? styles.activeCard: styles.inactiveCard,]} 
                        onPress={props.onPress}>  
            
            <Text style={[styles.textNumber]}>{props.number}</Text>
            
            <View style={styles.text1Container}>
              <Text style={[styles.text]}>{props.text}</Text>
            </View>
            <View style={styles.imgContainer}>            
              {getImage()}
            </View>

            <View style={[styles.textContainer,
            //{paddingTop : props.id === 4 ? '30%': '50%'}
            ]}>      
            <Text style={[styles.title, 
                        {display: props.id === props.activeCard ? 'flex': 'none',
                        // fontSize: props.id === 4 ? 21 : SIZES.medium,
                        // fontWeight: props.id === 4 ? 100 : 600,
                        // alignSelf: props.id === 4 ? 'center' : 'center',
                        //maxWidth:  props.id === 4 ? '80%': '100%'
                        }]}>{props.title}
            </Text>             
            {props.callAction}
            <Text style={[styles.subtitle,
                    {display: props.id === props.activeCard ? 'flex': 'none',
                    fontSize: props.id === 4 ? 19 : SIZES.xxMedium,
                    alignSelf: props.id === 4 ? 'center' : 'flex-start'
                    }]}>{props.subtitle}
            </Text> 
          </View>         

           
    
        
          {/* 
          <View style={[styles.overlay,
                        {backgroundImage: props.id === props.activeCard ? props.image : '', 
                        backgroundSize: props.id === 4 ?   '50%' : 'contain',
                        margin: props.id === 3 ? 0 : 20,
                        marginTop: props.id === 4 ? 70 : 20
                        }]}>          
          </View>   */}
                
          {/* <View style={styles.absoluteContainer}>
                <LinearGradient
                colors={['rgba(27, 26, 26, 0.1)', 'rgba(27, 26, 26, 1)', 'rgba(27, 26, 26, 1)']}
                  start={{x:0, y:0}}
                  end={{x: 0, y: 1}}
                  style={styles.gradient}
                />                   
          </View>  */}

          
            
        </TouchableOpacity>  
      </LinearGradient>
    </View>
    
  );
}




export default Card;

