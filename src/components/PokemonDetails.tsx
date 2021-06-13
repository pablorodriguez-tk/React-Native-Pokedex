import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import {View} from 'react-native';
import {FullPokemon} from '../interfaces/pokemonInterfaces';
import {FadeInImage} from './FadeInImage';

interface Props {
  pokemon: FullPokemon;
}

export const PokemonDetails = ({pokemon}: Props) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{...StyleSheet.absoluteFillObject}}>
      {/* Types y peso*/}
      <View style={{...styles.container, marginTop: 370}}>
        <Text style={styles.title}>Types</Text>
        <Text style={styles.title}>
          <View style={{flexDirection: 'row'}}>
            {pokemon.types.map(({type}) => (
              <Text
                key={type.name}
                style={{...styles.regularText, marginRight: 10}}>
                {type.name}
              </Text>
            ))}
          </View>
        </Text>

        {/* Peso */}
        <Text style={styles.title}>weight</Text>
        <Text style={styles.regularText}>{pokemon.weight} Kg</Text>
      </View>
      {/* Types */}
      <View style={styles.container}>
        <Text style={styles.title}>Sprites</Text>
      </View>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <FadeInImage
          uri={pokemon.sprites.front_default}
          style={styles.basicSprite}
        />
        <FadeInImage
          uri={pokemon.sprites.back_default}
          style={styles.basicSprite}
        />
        <FadeInImage
          uri={pokemon.sprites.front_shiny}
          style={styles.basicSprite}
        />
        <FadeInImage
          uri={pokemon.sprites.back_shiny}
          style={styles.basicSprite}
        />
      </ScrollView>

      {/* Habilidades */}
      <View style={styles.container}>
        <Text style={styles.title}>Base abilities</Text>
        <View style={{flexDirection: 'row'}}>
          {pokemon.abilities.map(({ability}) => (
            <Text
              key={ability.name}
              style={{...styles.regularText, marginRight: 10}}>
              {ability.name}
            </Text>
          ))}
        </View>
      </View>
      {/* Moves */}
      <View style={styles.container}>
        <Text style={styles.title}>Moves</Text>
        <View style={{flexWrap: 'wrap', flexDirection: 'row'}}>
          {pokemon.moves.map(({move}) => (
            <Text
              key={move.name}
              style={{...styles.regularText, marginRight: 10}}>
              {move.name}
            </Text>
          ))}
        </View>
      </View>
      {/* Stats */}
      <View style={styles.container}>
        <Text style={styles.title}>Stats</Text>
        <View>
          {pokemon.stats.map((stat, i) => (
            <View key={stat.stat.name + i} style={{flexDirection: 'row'}}>
              <Text
                style={{...styles.regularText, marginRight: 10, width: 150}}>
                {stat.stat.name}
              </Text>
              <Text style={{...styles.regularText, fontWeight: 'bold'}}>
                {stat.base_stat}
              </Text>
            </View>
          ))}
        </View>

        {/* Sprite final */}
        <View style={{marginBottom: 20, alignItems: 'center'}}>
          <FadeInImage
            uri={pokemon.sprites.front_default}
            style={styles.basicSprite}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  regularText: {
    fontSize: 17,
  },
  basicSprite: {
    width: 100,
    height: 100,
  },
});
