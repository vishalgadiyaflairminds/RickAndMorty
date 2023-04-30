import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useQuery } from '@apollo/client';
import { GET_CHARACTERS } from '../Services/graphQL/Queries/characters';

interface Character {
    id: string;
    name: string;
    image: string;
  }
  
  interface CharactersData {
    characters: {
      results: Character[];
    };
  }

export default function CharacterList() {

    const { loading, error, data } = useQuery<CharactersData>(GET_CHARACTERS);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  console.log(data?.characters.results, "---------31")

  return (
    <View >
       {data?.characters.results.map((character: any) => (
        <TouchableOpacity key={character.id} style={styles.card}>
          <Image source={{ uri: character.image }} style={styles.image} resizeMode="cover"  />
          <Text style={styles.text}>{character.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}


const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    margin: 10,
  },
  image: {
    height: 200,
    borderRadius: 5
  }, 
  text: {
    position: 'absolute',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius:5,
    fontWeight: 'bold',
    fontFamily: `monospace`,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: '#fff',
    padding: 10,
  },
})