import { Text, View } from 'react-native';
import type { FC } from 'react';
import React, { useState } from 'react';
import { COLORS, SIZES, FONTS } from '../constants';
import { EthPrice, NFTTitle } from './Subinfo';
import type { NFTData } from './NFTCard';

type DetailsDescProps = {
  data: NFTData;
};

export const DetailsDesc: FC<DetailsDescProps> = ({ data }) => {
  const text = data.description.slice(0, 100);
  const [readMore, setReadMore] = useState(false);

  return (
    <>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <NFTTitle title={data.name} subTitle={data.creator} titleSize={SIZES.extraLarge} subTitleSize={SIZES.font} />
        <EthPrice price={data.price} />
      </View>
      <View
        style={{
          marginVertical: SIZES.extraLarge * 1.5,
        }}
      >
        <Text
          style={{
            fontSize: SIZES.font,
            fontFamily: FONTS.semiBold,
            color: COLORS.primary,
          }}
        >
          Description
        </Text>
        <View style={{ marginTop: SIZES.base }}>
          <Text
            style={{
              fontSize: SIZES.small,
              fontFamily: FONTS.regular,
              color: COLORS.secondary,
              lineHeight: SIZES.large,
            }}
          >
            {!readMore ? `${text}...` : data.description}
            <Text
              style={{
                fontSize: SIZES.small,
                fontFamily: FONTS.semiBold,
                color: COLORS.primary,
              }}
              onPress={() => setReadMore((prevState) => !prevState)}
            >
              {readMore ? ' Show Less' : ' Read More'}
            </Text>
          </Text>
        </View>
      </View>
    </>
  );
};
