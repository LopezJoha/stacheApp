import React, { useState }from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Platform} from 'react-native'; 
import { COLORS, SIZES } from '../../../constants';
import Heading from '../../home/main/Heading';
import StyledButton from '../../home/main/StyledButton';


const FifthSection =()=>{
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = ()=> {
        setIsHovered(true);
    };
    const handleMouseLeave = () => {
        setIsHovered(false);
    };  

    function Link2(){
        if(Platform.OS === "web"){
          window.open('https://discord.com/invite/shyrW3CmTB', '_blank')
        }
    } 

    return(
        <View style={styles.container}>
            <View>
                <Heading textAlign='center' beforeLettering = "Join our awesome community!"/>
            </View>
            <View style={styles.imageContainer} onMouseOver={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <StyledButton image={<Image source={ isHovered ? require('../../../assets/images/discordBlack.png')
                    : require('../../../assets/images/discord2.png')}
                                        style={styles.image}></Image>} 
                                        buttonText='Join Discord'
                                        alignS='center'
                                        padding={5}
                                        onPress={()=>Link2()}
                                        />
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container:{        
        backgroundColor: COLORS.footer, 
        flexDirection: 'column', 
        paddingVertical:'8%', 
        justifyContent:'center', 
        alignContent:'center'
        
    },
    imageContainer:{        
        justifyContent:'center', 
        alignContent:'center', 
        paddingVertical:'5%', 
        alignSelf:'center'
    }, 
    image:{
        alignSelf:'center', 
        height:15, 
        width:20
    }
})

export default FifthSection;