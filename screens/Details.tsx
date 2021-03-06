import type { FC } from 'react';
import React from 'react';
import { Text, View, SafeAreaView, FlatList } from 'react-native';
import type { StackScreenProps } from '@react-navigation/stack';
import { COLORS, SHADOWS, SIZES, FONTS } from '../constants';
import type { RootStackParamList } from '../App';
import { DetailsBid, FocusedStatusBar, RectButton, DetailsHeader, SubInfo, DetailsDesc } from '../components';

type DetailsProps = StackScreenProps<RootStackParamList, 'Details'>;

export const Details: FC<DetailsProps> = ({ route, navigation }) => {
  const { data } = route.params;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar background="transparent" translucent={true} />
      <View
        style={{
          width: '100%',
          position: 'absolute',
          bottom: 0,
          paddingVertical: SIZES.font,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          zIndex: 1,
        }}
      >
        <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
      </View>
      <FlatList
        data={data.bids}
        renderItem={({ item }) => <DetailsBid bid={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: SIZES.extraLarge * 3,
        }}
        ListHeaderComponent={() => (
          <>
            <DetailsHeader data={data} navigation={navigation} />
            <SubInfo />
            <View style={{ padding: SIZES.font }}>
              <DetailsDesc data={data} />
              {data.bids.length > 0 && (
                <Text
                  style={{
                    fontSize: SIZES.font,
                    fontFamily: FONTS.semiBold,
                    color: COLORS.primary,
                  }}
                >
                  Currnet Bid
                </Text>
              )}
            </View>
          </>
        )}
      />
    </SafeAreaView>
  );
};
