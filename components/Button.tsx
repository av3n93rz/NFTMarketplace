import { StyleSheet, Text, View, TouchableOpacity, Image, ImageSourcePropType } from 'react-native'
import React, { FC } from 'react'
import { COLORS, SHADOWS, SIZES } from '../constants'

type CircleButtonProps = {
  imgUrl: ImageSourcePropType;
  handlePress: () => void;
  right: number;
  top: number;
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

export const RectButton = () => {
  return (
    <View>
      <Text>CircleButton</Text>
    </View>
  )
}