import { StyleSheet, Text, View, TouchableOpacity, Image, ImageSourcePropType } from 'react-native'
import React, { FC } from 'react'
import { COLORS, FONTS, SHADOWS, SIZES } from '../constants'

type CircleButtonProps = {
  imgUrl: ImageSourcePropType;
  handlePress?: () => void;
  right?: number;
  top?: number;
  left?: number;
}

export const CircleButton: FC<CircleButtonProps> = ({imgUrl, handlePress, ...props}) => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: 'absolute',
        borderRadius: SIZES.extraLarge,
        alignItems: 'center',
        justifyContent: 'center',
        ...SHADOWS.light,
        ...props
      }}
      onPress={handlePress}
    >
      <Image
        source={imgUrl}
        resizeMode='contain'
        style={{
          width: 24,
          height: 24,
        }}
      />
    </TouchableOpacity>
  )
}

type PartialShadowType = Partial<typeof SHADOWS.dark>

type RectButtonProps = {
  handlePress?: () => void;
  fontSize: number;
  minWidth: number;
}

export const RectButton: FC<RectButtonProps & PartialShadowType> = ({ minWidth, fontSize, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.extraLarge,
        minWidth: minWidth,
        padding: SIZES.small,
        ...props
      }}
      onPress={handlePress}
    >
      <Text style={{
        fontFamily: FONTS.semiBold,
        fontSize: fontSize,
        color: COLORS.white,
        textAlign: 'center'
      }}>
        Place a bid
      </Text>
    </TouchableOpacity>
  )
}