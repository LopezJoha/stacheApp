import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, 
        ImageBackground, SafeAreaView, ScrollView, Platform, 
        StatusBar, Dimensions, useWindowDimensions} from 'react-native';
import { loadAsync } from 'expo-font';
import { COLORS, SIZES } from './constants';
import Header from './components/home/header/Header';
import FixedElements from './components/home/fixed/FixedElements';
import Home from './components/home/Home';
import SecondSection from './components/general/secondSection/SecondSection';

// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;


export default function App() {
  
  const { height, width } = useWindowDimensions();

  const [banano, setBanano]= useState(true);     

  useEffect(() => {
    const loadFonts = async () => {
      await loadAsync({
        'SatoshiRegular': require('./assets/fonts/Satoshi-Regular.ttf')        
      });
    }

    loadFonts();
  }, []);

  useEffect(()=>{
    const getData = async()=>{
      fetch('https://prandom-data-api.com/api/v2/users?size=2&is_xml=true')
        .then((res)=>{
          return res.json(); 
        }).then((mango)=>{
          console.log(mango)})
        .catch((err)=>{
          console.log('Esto es el error Revisar:  ' + err)
        })
        .finally(()=>{

        })
    }
    getData();
  },[])

  
  const styles = StyleSheet.create({
    mainContainer:{
      width: width, 
      height: height, 
      backgroundColor: COLORS.background1, 
      ...Platform.select({
        web: {  
          overflow:'hidden'
        },
      }),
    },
    container:{
      marginTop: 90,
      backgroundColor: COLORS.background1, 
      width:'100%', 
      height:'80%', 
     
      ...Platform.select({
        web: {  
          marginTop: 0,
          marginBottom: 0,
          paddingTop:70,
        },
      }),
    }
   
    
  });

  return (
    <SafeAreaView style={styles.mainContainer}>    
      <StatusBar barStyle="dark-content" backgroundColor="white"/>      
      <Header/>   
      <ScrollView style={styles.container} 
       showsVerticalScrollIndicator={Platform.select({
          web: false, 
          default: false
        })}>
        <Home/>
       
        
      </ScrollView>
      <FixedElements/>
    </SafeAreaView>  
  );
}



