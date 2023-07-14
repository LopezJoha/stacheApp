import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, useWindowDimensions } from 'react-native'; 
import Lettering from '../../home/main/lettering';
import { COLORS, SIZES } from '../../../constants';
import CardFaq from './CardFaq';
import { FaqInfo } from '../../Data/FaqInfo';
import StyledButton from '../StyledButton';


const FaqList =()=>{
    const { height, width } = useWindowDimensions();  

    const styles = StyleSheet.create({
        container:{
                     
            // paddingVertical:'10%',
        //   opacity: 0.8,
          width:width, 
        height: width < 700  || height < 500 ? '70%' : '100%',
        //   marginTop: width < 900 ? '45%' : '5%'
        },
        containerList:{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row', 
        margin: 10,
        // gap:40, 
        paddingHorizontal:'2.5%'
        }
    })
    return(       
        <View style={styles.containerList}>
            {FaqInfo.map((faq)=>(
                <CardFaq
                    key={faq.id}
                    src={faq.src}
                    title={faq.title}
                    subtitle={faq.subtitle}
                    button={faq.id === 2 ? <StyledButton buttonText='Launche Stache' 
                            padding={5}/> : null || 
                            
                            faq.id === 3 ? <Lettering textLettering='https://devnet.stache.io/' 
                            size={SIZES.xxMedium}
                            padding={5}
                            border={10}
                            padH={8}
                            bg={COLORS.cardBackground}
                            /> : null }
                    
                />
            ))}
        </View>

    );
}



export default FaqList;