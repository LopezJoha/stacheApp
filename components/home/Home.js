import { View, StyleSheet, Platform} from 'react-native';
import { COLORS, icons, images, SIZES } from '../../constants';
import MainSection from '../general/firstSection/MainSection';
import SecondSection from '../general/secondSection/SecondSection';
import ThirdSection from '../general/thirdSection/ThirdSection';
import FourthSection from '../general/fourthSection/FourtSection';
import FifthSection from '../general/fifthSection/FifthSection';



const Home =()=>{ 
  return(
    <View style={styles.container}>            
      <MainSection/> 
      <SecondSection/>
      <ThirdSection/>
      <FourthSection/>
      <FifthSection />            
    </View>    
  );
}

export default Home;

const styles = StyleSheet.create({  
  container:{
    flex: 1, 
    backgroundColor: COLORS.background1,    
    height:'100%', 
    width:"100%"
  },
  screenContainer: {
    flex: 1,      
  }, 

  
});

