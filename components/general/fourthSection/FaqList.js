import { View, Text, StyleSheet, useWindowDimensions } from 'react-native'; 
import Lettering from '../../home/main/lettering';
import { COLORS, SIZES } from '../../../constants';
import CardFaq from './CardFaq';
import { FaqInfo } from '../../Data/FaqInfo';
import StyledButton from '../../home/main/StyledButton';
import { LinearGradient } from 'expo-linear-gradient';

const FaqList =()=>{
    const { height, width } = useWindowDimensions();  

    const styles = StyleSheet.create({
        container:{
           
        },
        containerList:{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: width > 900 ? 'row' : 'column', 
            //margin: 10,            
        }, 
        grediant:{
            borderRadius: 5    
        }, 
        containerLinear:{
            backgroundColor: COLORS.cardBackground,
            margin: 1,
            padding: 7,             
            paddingVertical: 10, 
            borderRadius: 5
        }, 
        styledText:{
            fontSize : SIZES.small, 
            color: COLORS.primary
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
                button={faq.id === 2 ? 
                    <StyledButton buttonText='Launche Stache' 
                    padding={5}/> : null ||                                 
                    faq.id === 3 ? 
                    <LinearGradient
                        colors={[COLORS.primary, COLORS.secondary]}
                        style={[styles.grediant]}>
                        <View style={[styles.containerLinear]}>
                            <Text style={[styles.styledText]}>https://devnet.stache.io.</Text>  
                        </View>
                    </LinearGradient>
                    // <Lettering textLettering='https://devnet.stache.io/' 
                    // fontSize={SIZES.xMedium}
                    // padding={3}
                    // border={5}
                    // padH={8}
                    // bg={COLORS.cardBackground}
                    // /> 
                    : null }


                />
            ))}
        </View>

    );
}



export default FaqList;