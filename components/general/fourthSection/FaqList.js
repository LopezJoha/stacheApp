import { View, Text, StyleSheet, useWindowDimensions } from 'react-native'; 
import Lettering from '../../home/main/lettering';
import { COLORS, SIZES } from '../../../constants';
import CardFaq from './CardFaq';
import { FaqInfo } from '../../Data/FaqInfo';
import StyledButton from '../../home/main/StyledButton';


const FaqList =()=>{
    const { height, width } = useWindowDimensions();  

    const styles = StyleSheet.create({
        container:{
           
        },
        containerList:{
            width:  width > 700 ? width :'100%', 
            height:'100%',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: width > 900 ? 'row' : 'column', 
           // margin: 10,
            // gap:40, 
            //paddingHorizontal:'2.5%'
        }
    })
    return(       
        <View style={styles.containerList}>
            {FaqInfo.map((faq)=>(
            <CardFaq
                key={faq.id}
                id={faq.id}
                src={faq.src}
                title={faq.title}
                subtitle={faq.subtitle}
                // 


                />
            ))}
        </View>

    );
}



export default FaqList;