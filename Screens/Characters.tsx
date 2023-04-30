import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import CharacterList from '../Components/CharacterList'
import { ScrollView } from 'react-native-gesture-handler';

export default function Characters() {
    const image = { uri: 'https://i.pinimg.com/564x/fb/9e/9a/fb9e9ac52fed2f9e63efd4ba96589606.jpg' };
    return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
    <ScrollView style={styles.container}>
        
    <View> 
      <CharacterList/>
    </View>
    </ScrollView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        paddingVertical: 10
    },
    image: {
        flex: 1,
        justifyContent: 'center',
      },
})