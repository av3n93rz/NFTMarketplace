import type { ImageSourcePropType } from 'react-native';
import { StyleSheet, Image, View } from 'react-native';
import type { FC } from 'react';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import { COLORS, SHADOWS, SIZES, assets } from '../constants';
import type { RootStackParamList } from '../App';
import { CircleButton } from './CircleButton';
import { EthPrice, NFTTitle, SubInfo } from './Subinfo';
import { RectButton } from './RectButton';

export type Bid = {
  id: string;
  name: string;
  price: number;
  image: ImageSourcePropType;
  date: string;
};

export type NFTData = {
  id: string;
  name: string;
  creator: string;
  price: number;
  description: string;
  image: ImageSourcePropType;
  bids: Bid[];
};

type NFTCardProps = {
  data: NFTData;
};

type HomeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;

export const NFTCard: FC<NFTCardProps> = ({ data }) => {
  const navigation = useNavigation<HomeScreenProp>();

  return (
    <View style={styles.card}>
      <View style={styles.inner}>
        <Image source={data.image} resizeMode="cover" style={styles.NFTImage} />
        <CircleButton imgUrl={assets.heart as ImageSourcePropType} right={10} top={10} handlePress={() => null} />
      </View>
      <SubInfo />
      <View style={{ width: '100%', padding: SIZES.font }}>
        <NFTTitle title={data.name} subTitle={data.creator} titleSize={SIZES.large} subTitleSize={SIZES.small} />
        <View
          style={{
            marginTop: SIZES.font,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <EthPrice price={data.price} />
          <RectButton
            minWidth={120}
            fontSize={SIZES.font}
            handlePress={() => navigation.navigate('Details', { data })}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.font,
    marginBottom: SIZES.extraLarge,
    margin: SIZES.base,
    ...SHADOWS.dark,
  },
  inner: {
    width: '100%',
    height: 250,
  },
  NFTImage: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: SIZES.font,
    borderTopRightRadius: SIZES.font,
  },
});
