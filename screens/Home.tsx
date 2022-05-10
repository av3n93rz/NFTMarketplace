import React from 'react'
import { View, SafeAreaView, FlatList, Text, StyleSheet } from 'react-native';
import { COLORS, NFTData } from '../constants'
import { NFTCard, HomeHeader, FocusedStatusBar } from '../components';
const Home = () => {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar background={COLORS.primary}/>
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={NFTData}
            renderItem={({ item }) => <NFTCard data={item}/>}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader/>}
          />
        </View>
        <View style={styles.background}>
          <View style={{ height: 300, backgroundColor: COLORS.primary }}/>
          <View style={{ flex: 1, backgroundColor: COLORS.white }}/>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: -1
  }
})