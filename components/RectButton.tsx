import type { TextStyle, ViewStyle } from 'react-native';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
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
        minWidth: minWidth,
        ...styles.button,
        ...props,
      }}
      onPress={handlePress}
    >
      <Text
        style={{
          fontSize: fontSize,
          ...styles.text,
        }}
      >
        Place a bid
      </Text>
    </TouchableOpacity>
  );
};

interface Style {
  button: ViewStyle;
  text: TextStyle;
}

const styles = StyleSheet.create<Style>({
  button: {
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.extraLarge,
    padding: SIZES.small,
  },
  text: {
    fontFamily: FONTS.semiBold,
    color: COLORS.white,
    textAlign: 'center',
  },
});
