import { TouchableOpacity, View, Text, ImageBackground, Image, StyleSheet, useWindowDimensions } from 'react-native';
import { COLORS, SIZES } from "../../../constants";
import { LinearGradient } from 'expo-linear-gradient';



const  Card = (props)=> {
  const { height, width } = useWindowDimensions();

const styles = StyleSheet.create({
  container:{
    margin: width > 700? 10: 5.5,
        
  },
  textNumber:{
    fontSize: SIZES.large,
    color: COLORS.primary,
    position: 'absolute', 
    top: width > 700 || props.id === props.activeCard ? '5%': '30%',  
    left:  width > 700 &&  props.id === props.activeCard ? '3%' :  width > 700 &&  props.id !== props.activeCard ? '40%':'5%', 
    zIndex:10          
  },  
  text1Container:{
    display: props.id === props.activeCard ? 'none': 'flex', 
    alignContent: width > 700 ? 'center' : 'flex-end', 
    justifyContent:  'center', 
    height: width> 900 ? '100%' : '60%', 
    paddingLeft: width > 900 ? 0 : width > 500 ? '15%':'20%', 
    paddingTop: width > 500 ? '7%' : '10%',        
  },   
  text:{
    fontSize: width > 700 ? SIZES.xMedium : SIZES.xxMedium, 
    color: 'white', 
    maxWidth:  width > 900 ? '70%': '95%',  
    textAlign: 'center',    
    alignSelf:  width > 700 ? 'center' : 'flex-start'        
  },  
  absoluteContainer: {
    ...StyleSheet.absoluteFillObject, 
    opacity:0.9,
    maxWidth: props.id === 3 ? '100%' : '98%', 
     height:'100%',
   // marginBottom:'10%', 
   marginTop:'10%'
   
  },
  imgContainer:{
    display: props.id === props.activeCard ? 'flex' : 'none',
    width: '100%',
    height: props.id === 4 ? "40%" : '60%',
    alignContent: 'center', 
    justifyContent:'center', 
    margin: props.id === 3 ? 0 : 10,
  }, 
  image: {     
    height:  props.id === 4 ? '70%': "98%",
    width: props.id === 4 ? '65%':"100%",
    resizeMode: width > 600  || props.id === 3 ? 'cover' :'contain' , 
    alignSelf:'center', 
    
  },
  gradient:{
    flex:1.5
  },
  gredient: {   
  borderRadius:20,
  flex:1, 
  },  
  textContainer:{
    width: '100%', 
    height:'35%',  
    paddingHorizontal : '5%'
  },
  title:{
    display: props.id === props.activeCard ? 'flex': 'none', 
    fontSize: width > 900 ? SIZES.medium : SIZES.xxxMedium,
    fontWeight: 500,
    color: 'white', 
    textAlign:'center', 
    alignSelf: props.id === 4 ? 'center' : 'flex-start', 
    paddingBottom: '3%'
  }, 
  subtitle:{
    display: props.id === props.activeCard ? 'flex': 'none', 
    fontSize: width > 700 ? SIZES.xMedium : SIZES.small,
    color: 'white',    
    alignSelf: props.id === 4 ? 'center' : 'flex-start'
  },
  activeCard : {
    flex: 1,
    backgroundColor: COLORS.cardBackground,    
    flexDirection: 'column',  
    borderRadius:20,
    margin: 2,    
    minHeight:  width > 700 ? 400 : 400, 
    maxWidth : width > 700 ? 560 : '100%'
  },
  inactiveCard : {
    backgroundColor: COLORS.cardBackground,       
    flexDirection: 'column',     
    borderRadius:20,    
    margin: 2,    
    minHeight: width > 700 ?  400 : 100, 
    minWidth: width > 700 ? 160 : '95%', 
    
    
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
                <View style={styles.absoluteContainer}>
                  <LinearGradient
                    colors={['rgba(27, 26, 26, 0.1)', 'rgba(27, 26, 26, 1)', 'rgba(27, 26, 26, 1)']}
                    start={{x:0, y:0}}
                    end={{x: 0, y: 1}}
                    style={styles.gradient}/>                   
                </View> 
            </View>

            <View style={[styles.textContainer]}>      
              <Text style={[styles.title]}>{props.title}</Text>             
              {props.callAction}
              <Text style={[styles.subtitle]}>{props.subtitle}</Text> 
          </View>   
        </TouchableOpacity>  
      </LinearGradient>
    </View>    
  );
}

export default Card;

