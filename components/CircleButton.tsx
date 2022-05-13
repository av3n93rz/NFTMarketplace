import type { ViewStyle, ImageStyle, ImageSourcePropType } from 'react-native';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import type { FC } from 'react';
import React from 'react';
import { COLORS, SHADOWS, SIZES } from '../constants';

type CircleButtonProps = {
  imgUrl: ImageSourcePropType;
  handlePress?: () => void;
} & Pick<ViewStyle, 'top' | 'left' | 'right'>;

export const CircleButton: FC<CircleButtonProps> = ({ imgUrl, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        ...props,
      }}
      onPress={handlePress}
    >
      <Image source={imgUrl} resizeMode="contain" style={styles.image} />
    </TouchableOpacity>
  );
};

interface Style {
  button: ViewStyle;
  image: ImageStyle;
}

const styles = StyleSheet.create<Style>({
  button: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.white,
    position: 'absolute',
    borderRadius: SIZES.extraLarge,
    alignItems: 'center',
    justifyContent: 'center',
    ...SHADOWS.light,
  },
  image: {
    width: 24,
    height: 24,
  },
});
