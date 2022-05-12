import { StyleSheet, Image, View, ImageSourcePropType } from 'react-native'
import React, { FC } from 'react'
import { useNavigation } from '@react-navigation/native';
import { COLORS, SHADOWS, SIZES, assets } from '../constants';
import { CircleButton } from './Button';
import { SubInfo } from './Subinfo';

type Bid = {
    id: string;
    name: string;
    price: number;
    image: ImageSourcePropType;
    date: string;
}

type NFTCardProps = {
  data: {
    id: string;
    name: string;
    creator: string;
    price: number;
    description: string;
    image: ImageSourcePropType;
    bids: Bid[];
  }
}

const NFTCard: FC<NFTCardProps> = ({ data }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.card}>
      <View style={styles.inner}>
        <Image
          source={data.image}
          resizeMode='cover'
          style={styles.NFTImage}
        />
        <CircleButton
          imgUrl={assets.heart}
          right={10}
          top={10}
          handlePress={() =>{}}        
        />
      </View>
      <SubInfo/>
    </View>
  )
}

export default NFTCard

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.font,
    marginBottom: SIZES.extraLarge,
    margin: SIZES.base,
    ...SHADOWS.dark
  },
  inner: {
    width: '100%',
    height: 250
  },
  NFTImage: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: SIZES.font,
    borderTopRightRadius: SIZES.font,
  }
})