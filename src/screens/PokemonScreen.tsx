import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Text, View} from 'react-native';
import {RootStackParams} from '../navigator/Navigator';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> {}

export const PokemonScreen = ({navigation, route}: Props) => {
  const {simplePokemon, color} = route.params;

  return (
    <View>
      <Text style={{color}}>
        {simplePokemon.name} - {color}
      </Text>
    </View>
  );
};
