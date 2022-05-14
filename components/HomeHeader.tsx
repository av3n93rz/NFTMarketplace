import type { ImageSourcePropType, ImageStyle, TextStyle, ViewStyle } from 'react-native';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import type { FC } from 'react';
import React from 'react';
import { COLORS, FONTS, SIZES, assets } from '../constants';

type HomeHeaderProps = {
  onSearch: (value: string) => void;
};

export const HomeHeader: FC<HomeHeaderProps> = ({ onSearch }) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.font,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Image
          source={assets.logo as ImageSourcePropType}
          resizeMode="contain"
          style={{
            width: 90,
            height: 25,
          }}
        />
        <View
          style={{
            width: 45,
            height: 45,
          }}
        >
          <Image
            source={assets.person01 as ImageSourcePropType}
            resizeMode="contain"
            style={{
              width: '100%',
              height: '100%',
            }}
          />
          <Image
            source={assets.badge as ImageSourcePropType}
            resizeMode="contain"
            style={{
              position: 'absolute',
              width: 15,
              height: 15,
              bottom: 0,
              right: 0,
            }}
          />
        </View>
      </View>
      <View style={{ marginVertical: SIZES.font }}>
        <Text style={styles.welcome}>Hello, Victoria 👋</Text>
        <Text style={styles.welcomeMessage}>Let's find a masterpiece</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Image source={assets.search as ImageSourcePropType} resizeMode="contain" style={styles.searchIcon} />
          <TextInput placeholder="Search NFTs" style={styles.searchInput} onChangeText={onSearch} />
        </View>
      </View>
    </View>
  );
};

interface Style {
  welcome: TextStyle;
  welcomeMessage: TextStyle;
  searchContainer: ViewStyle;
  searchBar: ViewStyle;
  searchIcon: ImageStyle;
  searchInput: TextStyle;
}

const styles = StyleSheet.create<Style>({
  welcome: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.small,
    color: COLORS.white,
  },
  welcomeMessage: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.large,
    color: COLORS.white,
    marginTop: SIZES.base / 2,
  },
  searchContainer: {
    marginTop: SIZES.font,
  },
  searchBar: {
    width: '100%',
    borderRadius: SIZES.font,
    backgroundColor: COLORS.gray,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SIZES.font,
    paddingVertical: SIZES.small - 2,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: SIZES.base,
  },
  searchInput: {
    flex: 1,
  },
});
