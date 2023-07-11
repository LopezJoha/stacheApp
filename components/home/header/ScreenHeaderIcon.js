import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

const ScreenHeaderIcon = (props) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={props.onPress}>
        <Image source={props.iconImg}
          resizeMode='contain'
          style={props.stylesImg}
        />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btnContainer:{
     alignContent:'center',
     justifyContent: 'center', 
  },
  btnImg:{

  }
});

export default ScreenHeaderIcon;