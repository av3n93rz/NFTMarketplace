import type { ImageSourcePropType } from 'react-native';
import { Image, StatusBar, View } from 'react-native';
import type { FC } from 'react';
import React from 'react';
import type { StackNavigationProp } from '@react-navigation/stack';
import { assets } from '../constants';
import type { RootStackParamList } from '../App';
import { CircleButton } from './CircleButton';
import type { NFTData } from './NFTCard';

type DetailsHeaderProps = {
  data: NFTData;
  navigation: StackNavigationProp<RootStackParamList, 'Details'>;
};

export const DetailsHeader: FC<DetailsHeaderProps> = ({ data, navigation }) => {
  return (
    <View
      style={{
        width: '100%',
        height: 373,
      }}
    >
      <Image
        source={data.image}
        resizeMode="cover"
        style={{
          width: '100%',
          height: '100%',
        }}
      />
      <CircleButton
        imgUrl={assets.left as ImageSourcePropType}
        handlePress={() => navigation.goBack()}
        left={15}
        top={StatusBar.currentHeight ? StatusBar.currentHeight + 10 : 10}
      />
      <CircleButton
        imgUrl={assets.heart as ImageSourcePropType}
        right={15}
        top={StatusBar.currentHeight ? StatusBar.currentHeight + 10 : 10}
      />
    </View>
  );
};
