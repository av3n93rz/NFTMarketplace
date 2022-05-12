import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { SIZES, FONTS, COLORS, SHADOWS, assets } from '../constants'

type NFTTitleProps = {
	title: string;
	subTitle: string;
	titleSize: number;
	subTitleSize: number;
}

export const NFTTitle: FC<NFTTitleProps> = ({ title, subTitle, titleSize, subTitleSize }) => {
  return (
    <View style={{}}>
      <Text style={{
				fontFamily: FONTS.semiBold,
				fontSize: titleSize,
				color: COLORS.primary
			}}>
				{title}
			</Text>
      <Text style={{
				fontFamily: FONTS.regular,
				fontSize: subTitleSize,
				color: COLORS.primary
			}}>
				{subTitle}
			</Text>
    </View>
  )
}

type EthPriceProps = {
	price: number;
}

export const EthPrice: FC<EthPriceProps> = ({ price }) => {
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center'}}>
        <Image 
					source={assets.eth}
					resizeMode='contain'
					style={{
						width: 20,
						height: 20,
						marginRight: 2
					}}
				/>
				<Text style={{
					fontFamily: FONTS.medium,
					fontSize: SIZES.font,
					color: COLORS.primary
				}}>{price}</Text>
      </View>
    )
  }

type ImageCmpProps = {
	imgUrl: ImageSourcePropType;
	index: number;
}

export const ImageCmp: FC<ImageCmpProps> = ({ imgUrl, index }) => {
	return (
		<Image
			source={imgUrl}
			resizeMode='contain'
			style={{
				width: 48,
				height: 48,
				marginLeft: index === 0 ? 0 : -SIZES.font
			}}
		/>
	)
}

export const People = () => {
	return (
		<View style={{
			flexDirection: 'row'
		}}>
			{[assets.person02, assets.person03, assets.person04].map(
				(imgUrl, index) => (
					<ImageCmp imgUrl={imgUrl} index={index} key={`People-${index}`}/>
				)
			)}
		</View>
	)
}

export const EndDate = () => {
	return (
		<View
			style={{
				paddingHorizontal: SIZES.font,
				paddingVertical: SIZES.base,
				backgroundColor: COLORS.white,
				justifyContent: 'center',
				alignItems: 'center',
				...SHADOWS.light,
				elevation: 1,
				maxWidth: '50%'
			}}
		>
			<Text style={{
				fontFamily: FONTS.regular,
				fontSize: SIZES.small,
				color: COLORS.primary
			}}>
				Ending in
			</Text>
			<Text style={{
				fontFamily: FONTS.semiBold,
				fontSize: SIZES.medium,
				color: COLORS.primary
			}}>
				12h 30m
			</Text>
		</View>
	)
}

export const SubInfo = () => {
	return (
		<View style={{ 
			width: '100%',
			paddingHorizontal: SIZES.font,
			marginTop: -SIZES.extraLarge,
			flexDirection: 'row',
			justifyContent: 'space-between'
		}}>
			<People/>
			<EndDate/>
		</View>
	)
}