import { Image, ImageSourcePropType, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { CircleButton } from './Button';
import { assets } from '../constants';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App';
import { NFTData } from './NFTCard';

type DetailsHeaderProps = {
  data: NFTData;
  navigation: StackNavigationProp<RootStackParamList, 'Details'>
}

const DetailsHeader: FC<DetailsHeaderProps> = ({ data, navigation }) => {
  return (
    <View style={{
      width: '100%',
      height: 373
    }}>
      <Image
        source={data.image}
        resizeMode='cover'
        style={{
          width: '100%',
          height: '100%',
        }}
      />
      <CircleButton
        imgUrl={assets.left}
        handlePress={() => navigation.goBack()}
        left={15}
        top={StatusBar.currentHeight ? StatusBar.currentHeight + 10: 10}
      />
      <CircleButton
        imgUrl={assets.heart}
        right={15}
        top={StatusBar.currentHeight ? StatusBar.currentHeight + 10: 10}
      />
    </View>
  )
}

export default DetailsHeader