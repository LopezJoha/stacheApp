import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'; 
import Lettering from '../../home/main/lettering';
import { COLORS, SIZES } from '../../../constants';
import CardFaq from './CardFaq';
import { FaqInfo } from '../../Data/FaqInfo';
import StyledButton from '../StyledButton';

const FaqList =()=>{
    return(
        <View style={styles.container}>
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

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundImage:'url(../../../assets/images/linesFaq.png)',
        backgroundRepeat:'no-repeat',
        backgroundPosition: 'right',
        backgroundSize:'center',         
        paddingVertical:'10%'
    },
    containerList:{
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row', 
    gap:40, 
    paddingHorizontal:'2.5%'
    }
})

export default FaqList;