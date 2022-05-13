import { Text, TouchableOpacity } from 'react-native';
import type { FC } from 'react';
import React from 'react';
import type { SHADOWS } from '../constants';
import { COLORS, FONTS, SIZES } from '../constants';

type PartialShadowType = Partial<typeof SHADOWS.dark>;

type RectButtonProps = {
  handlePress?: () => void;
  fontSize: number;
  minWidth: number;
};

export const RectButton: FC<RectButtonProps & PartialShadowType> = ({ minWidth, fontSize, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.extraLarge,
        minWidth: minWidth,
        padding: SIZES.small,
        ...props,
      }}
      onPress={handlePress}
    >
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: fontSize,
          color: COLORS.white,
          textAlign: 'center',
        }}
      >
        Place a bid
      </Text>
    </TouchableOpacity>
  );
};
