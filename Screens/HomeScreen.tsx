import { StyleSheet, Text, View, StatusBar,  useColorScheme, SafeAreaView, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import {Colors} from 'react-native/Libraries/NewAppScreen';
import CharacterList from '../Components/CharacterList';
import { ScrollView } from 'react-native-gesture-handler';
import { NavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined;
  Characters: any;
};



interface HomeScreenProps {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
}

const image = { uri: 'https://i.pinimg.com/564x/fb/9e/9a/fb9e9ac52fed2f9e63efd4ba96589606.jpg' };

export default function HomeScreen({ navigation }: HomeScreenProps) {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
        height: '100%'
      };

  return (
    
    <SafeAreaView style={backgroundStyle}>
    <StatusBar
      barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      backgroundColor={backgroundStyle.backgroundColor}
    />
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
    <ScrollView>
    <View style = {styles.container}>
      <View style={styles.headerTxtContainer}>
        <Text style = {styles.header}>Welcome to Rick and Morty!</Text>
        <Text style = {styles.subHeader}>Click the button to know more...</Text>
        {/* <CharacterList />  */}
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Characters')}>
          <Text style={styles.text}>Let's Go</Text>
        </TouchableOpacity>
      </View>
     </View>
     </ScrollView>
     </ImageBackground>
  </SafeAreaView>
 
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 500
      },
      image: {
        flex: 1,
        justifyContent: 'center',
      },
      headerTxtContainer: {
        backgroundColor: 'rgba(111, 111, 111, .6)',
        borderRadius: 10,
        padding: 25,
        borderWidth: 1,
        borderColor: 'white'
      },
      header: {
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: `monospace`,
        // color: '#808887',
        color: 'white',
        textAlign: 'center'
      }, 
      subHeader: {
        fontSize: 14,
        fontWeight: 'bold',
        fontFamily: `monospace`,
        color: 'red',
        textAlign: 'center',
        marginTop: 10
      },
      button: {
        backgroundColor: '#78377D',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginTop: 25,
        marginHorizontal: 20,
        
      },
      text: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: `monospace`,
      }
})
