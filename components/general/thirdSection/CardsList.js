import { TouchableOpacity, View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native';
import Card from './Card';
import { CardsInfo } from '../../Data/CardsInfo';
import { COLORS } from '../../../constants';
import StyledButton from '../../home/main/StyledButton';


const  CardsList = (props) => { 
  const { height, width } = useWindowDimensions();  

  const styles = StyleSheet.create({
  
    containerList: {
      backgroundColor: COLORS.background1,
      flexDirection: width > 700 ?  'row' : 'column', 
     
      // gap:15,   
    },
    calltheAction:{     
      paddingVertical:'10%',      
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems:'center',
      //gap:15      
    },
    
  });
  
  
  return(  
    <View style = {styles.containerList}>    
        
        {CardsInfo.map((card)=>(
            <Card 
              key = {card.id}
              id = {card.id}
              number = {card.cardName}
              text ={card.previewText}
              image = {card.src}
              title ={card.title}
              subtitle = {card.subtitle}
              onPress = {()=>props.onPressCard(card.id)}
              activeCard = {props.activeCardId}
              callAction = {card.id === 4 && props.activeCardId === 4 ? 
              <View style={styles.calltheAction}><StyledButton buttonText = 'Launche Stache'/></View> : null}/>         
        ))}  
    </View>

  );
}

export default CardsList;

